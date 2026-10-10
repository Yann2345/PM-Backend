import {
  lazy,
  Suspense,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react"
import { createPortal } from "react-dom"
import PrototypeMessage from "./components/PrototypeMessage"
import HomeScreen from "./screens/HomeScreen"

const loadDetailScreen = () => import("./screens/DetailScreen")
const loadFormScreen = () => import("./screens/FormScreen")
const loadListScreen = () => import("./screens/ListScreen")
const loadLightDetailScreen = () => import("./screens/light/LightDetailScreen")
const loadLightFormScreen = () => import("./screens/light/LightFormScreen")

const DetailScreen = lazy(loadDetailScreen)
const FormScreen = lazy(loadFormScreen)
const ListScreen = lazy(loadListScreen)
const LightDetailScreen = lazy(loadLightDetailScreen)
const LightFormScreen = lazy(loadLightFormScreen)

type Page = "home" | "list" | "detail" | "form"
type Theme = "dark" | "light"
type RouteKey = Page | "detail-dark" | "detail-light" | "form-dark" | "form-light"

function getActivePageScrollContainer(
  appViewport: HTMLElement,
): HTMLElement | null {
  const activeRoute = appViewport.querySelector<HTMLElement>(
    '.app-route[data-active="true"]',
  )
  const header = activeRoute?.querySelector<HTMLElement>(
    '[data-name="PageHeader"], [data-name="01 顶部品牌栏"]',
  )
  const pageShell = header?.parentElement
  if (!pageShell) return null

  return (
    Array.from(pageShell.children).find((child): child is HTMLElement => {
      if (!(child instanceof HTMLElement) || child === header) return false
      const overflowY = window.getComputedStyle(child).overflowY
      return overflowY === "auto" || overflowY === "scroll"
    }) ?? null
  )
}

export default function App() {
  const appViewportRef = useRef<HTMLDivElement>(null)
  const [page, setPage] = useState<Page>("home")
  const [previousPage, setPreviousPage] =
    useState<Exclude<Page, "form">>("home")
  const [theme, setTheme] = useState<Theme>("dark")
  const [isHeaderScrolled, setIsHeaderScrolled] = useState(false)
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)
  const [sidebarToggleHost, setSidebarToggleHost] =
    useState<HTMLDivElement | null>(null)
  const visitedRoutesRef = useRef<Set<RouteKey>>(new Set(["home"]))

  const activeRoute: RouteKey =
    page === "detail" || page === "form" ? `${page}-${theme}` : page
  visitedRoutesRef.current.add(activeRoute)

  useLayoutEffect(() => {
    const appViewport = appViewportRef.current
    if (!appViewport) return

    const syncHeaderScrollState = () => {
      const scrollContainer = getActivePageScrollContainer(appViewport)
      setIsHeaderScrolled((scrollContainer?.scrollTop ?? 0) > 0)
    }

    syncHeaderScrollState()

    const observer = new MutationObserver(syncHeaderScrollState)
    observer.observe(appViewport, { childList: true, subtree: true })

    return () => observer.disconnect()
  }, [activeRoute])

  useLayoutEffect(() => {
    if (page === "form") {
      setSidebarToggleHost(null)
      return
    }

    const breadcrumb = appViewportRef.current?.querySelector(
      '.app-route[data-active="true"] [data-name="PageHeader"] [data-name="面包屑"]',
    )
    if (!breadcrumb) {
      setSidebarToggleHost(null)
      return
    }

    const host = document.createElement("div")
    host.className = "sidebar-toggle-host"
    breadcrumb.prepend(host)
    setSidebarToggleHost(host)

    return () => {
      host.remove()
    }
  }, [page, theme])

  useEffect(() => {
    const prefetchTimeout = window.setTimeout(() => {
      void loadListScreen()
      void loadDetailScreen()
      void loadFormScreen()
      void loadLightDetailScreen()
      void loadLightFormScreen()
    }, 1200)

    return () => window.clearTimeout(prefetchTimeout)
  }, [])

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (page !== "form" && event.metaKey && event.key.toLowerCase() === "b") {
        event.preventDefault()
        setIsSidebarCollapsed((collapsed) => !collapsed)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [page])

  useEffect(() => {
    const appViewport = appViewportRef.current
    if (!appViewport) return

    const handleScroll = (event: Event) => {
      const target = event.target
      if (!(target instanceof HTMLElement)) return
      if (target !== getActivePageScrollContainer(appViewport)) return

      setIsHeaderScrolled(target.scrollTop > 0)
    }

    appViewport.addEventListener("scroll", handleScroll, true)
    return () => appViewport.removeEventListener("scroll", handleScroll, true)
  }, [])

  const openForm = () => {
    setPreviousPage(page === "form" ? previousPage : page)
    setPage("form")
  }

  return (
    <div
      className="app-viewport"
      data-header-scrolled={isHeaderScrolled}
      data-page={page}
      data-sidebar-collapsed={isSidebarCollapsed}
      data-theme={theme}
      ref={appViewportRef}
    >
      <PrototypeMessage />
      {sidebarToggleHost &&
        createPortal(
          <button
            aria-label={isSidebarCollapsed ? "展开侧栏" : "收起侧栏"}
            className="sidebar-toggle"
            data-tooltip={`${isSidebarCollapsed ? "展开侧栏" : "收起侧栏"}⌘+B`}
            onClick={() => setIsSidebarCollapsed((collapsed) => !collapsed)}
            type="button"
          >
            <img
              alt=""
              src={`${import.meta.env.BASE_URL}assets/light/detail/c43e8.svg`}
            />
          </button>,
          sidebarToggleHost,
        )}
      <Suspense fallback={null}>
        {visitedRoutesRef.current.has("form-light") && (
          <div
            className="app-route"
            data-active={activeRoute === "form-light"}
            hidden={activeRoute !== "form-light"}
          >
            <LightFormScreen onClose={() => setPage(previousPage)} />
          </div>
        )}
        {visitedRoutesRef.current.has("form-dark") && (
          <div
            className="app-route"
            data-active={activeRoute === "form-dark"}
            hidden={activeRoute !== "form-dark"}
          >
            <FormScreen onClose={() => setPage(previousPage)} />
          </div>
        )}
        {visitedRoutesRef.current.has("detail-light") && (
          <div
            className="app-route"
            data-active={activeRoute === "detail-light"}
            hidden={activeRoute !== "detail-light"}
          >
            <LightDetailScreen
              onNavigateForm={openForm}
              onNavigateHome={() => setPage("home")}
              onNavigateList={() => setPage("list")}
              onThemeChange={setTheme}
            />
          </div>
        )}
        {visitedRoutesRef.current.has("detail-dark") && (
          <div
            className="app-route"
            data-active={activeRoute === "detail-dark"}
            hidden={activeRoute !== "detail-dark"}
          >
            <DetailScreen
              onNavigateForm={openForm}
              onNavigateHome={() => setPage("home")}
              onNavigateList={() => setPage("list")}
              onThemeChange={setTheme}
              theme={theme}
            />
          </div>
        )}
        {visitedRoutesRef.current.has("list") && (
          <div
            className="app-route"
            data-active={activeRoute === "list"}
            hidden={activeRoute !== "list"}
          >
            <ListScreen
              onNavigateDetail={() => setPage("detail")}
              onNavigateForm={openForm}
              onNavigateHome={() => setPage("home")}
              onThemeChange={setTheme}
              theme={theme}
            />
          </div>
        )}
        <div
          className="app-route"
          data-active={activeRoute === "home"}
          hidden={activeRoute !== "home"}
        >
          <HomeScreen
            onNavigateDetail={() => setPage("detail")}
            onNavigateForm={openForm}
            onNavigateList={() => setPage("list")}
            onThemeChange={setTheme}
            theme={theme}
          />
        </div>
      </Suspense>
    </div>
  )
}
