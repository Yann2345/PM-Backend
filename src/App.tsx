import { useEffect, useLayoutEffect, useRef, useState } from "react"
import { createPortal } from "react-dom"
import PrototypeMessage from "./components/PrototypeMessage"
import DetailScreen from "./screens/DetailScreen"
import FormScreen from "./screens/FormScreen"
import HomeScreen from "./screens/HomeScreen"
import ListScreen from "./screens/ListScreen"
import LightDetailScreen from "./screens/light/LightDetailScreen"
import LightFormScreen from "./screens/light/LightFormScreen"

type Page = "home" | "list" | "detail" | "form"
type Theme = "dark" | "light"

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

  useEffect(() => {
    setIsHeaderScrolled(false)
  }, [page])

  useLayoutEffect(() => {
    if (page === "form") {
      setSidebarToggleHost(null)
      return
    }

    const breadcrumb = appViewportRef.current?.querySelector(
      '[data-name="PageHeader"] [data-name="面包屑"]',
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

      const overflowY = window.getComputedStyle(target).overflowY
      if (
        (overflowY === "auto" || overflowY === "scroll") &&
        target.scrollHeight > target.clientHeight
      ) {
        setIsHeaderScrolled(target.scrollTop > 0)
      }
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
            <img alt="" src={`${import.meta.env.BASE_URL}assets/light/detail/c43e8.svg`} />
          </button>,
          sidebarToggleHost,
        )}
      {page === "form" &&
        (theme === "light" ? (
          <LightFormScreen onClose={() => setPage(previousPage)} />
        ) : (
          <FormScreen onClose={() => setPage(previousPage)} />
        ))}
      {page === "detail" &&
        (theme === "light" ? (
          <LightDetailScreen
            onNavigateForm={openForm}
            onNavigateHome={() => setPage("home")}
            onNavigateList={() => setPage("list")}
            onThemeChange={setTheme}
          />
        ) : (
          <DetailScreen
            onNavigateForm={openForm}
            onNavigateHome={() => setPage("home")}
            onNavigateList={() => setPage("list")}
            onThemeChange={setTheme}
            theme={theme}
          />
        ))}
      {page === "list" && (
        <ListScreen
          onNavigateDetail={() => setPage("detail")}
          onNavigateForm={openForm}
          onNavigateHome={() => setPage("home")}
          onThemeChange={setTheme}
          theme={theme}
        />
      )}
      {page === "home" && (
        <HomeScreen
          onNavigateDetail={() => setPage("detail")}
          onNavigateForm={openForm}
          onNavigateList={() => setPage("list")}
          onThemeChange={setTheme}
          theme={theme}
        />
      )}
    </div>
  )
}
