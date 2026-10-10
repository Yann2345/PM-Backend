import * as React from "react";
import TraditionalTableView from "./TraditionalTableView";

const assetPathPrefix = `${import.meta.env.BASE_URL}assets/list`;
const imgVector = `${assetPathPrefix}/082f6.svg`;
const imgVector1 = `${assetPathPrefix}/09816.svg`;
const imgVector2 = `${assetPathPrefix}/cf20b.svg`;
const imgVector3 = `${assetPathPrefix}/cf20b.svg`;
const imgStar1 = `${assetPathPrefix}/cd2d9.svg`;
const imgCommonFilledMore = `${assetPathPrefix}/b8943.svg`;
const imgCommonFilledMoreHover = `${assetPathPrefix}/83a7c.svg`;
const imgCommonLinearOrder = `${assetPathPrefix}/569f8.svg`;
const imgCommonLinearEdit = `${assetPathPrefix}/a4402.svg`;
const imgAvatar = `${assetPathPrefix}/avatar.png`;
const imgGroup = `${assetPathPrefix}/bd4dd.svg`;
const imgGroup1 = `${assetPathPrefix}/87fe3.svg`;
const imgGroupLight = `${import.meta.env.BASE_URL}assets/form/282f0.svg`;
const imgGroup1Light = `${import.meta.env.BASE_URL}assets/form/35434.svg`;
const imgCommonLinearMenu = `${assetPathPrefix}/531e2.svg`;
const imgHome = `${assetPathPrefix}/0580c.svg`;
const imgVuesaxBoldGrid6 = `${assetPathPrefix}/1e558.svg`;
const imgCommonLinearFile = `${assetPathPrefix}/7a779.svg`;
const imgTaskSquare = `${assetPathPrefix}/bc535.svg`;
const imgCommonLinearArrowRight = `${assetPathPrefix}/104a3.svg`;
const imgSearchNormal = `${assetPathPrefix}/c7403.svg`;
const imgNotification = `${assetPathPrefix}/4d75d.svg`;
const imgCommonLinearMessageQuestion = `${assetPathPrefix}/a92c9.svg`;
const imgSidebarLinearSettings = `${assetPathPrefix}/6638a.svg`;
const imgCommonLinearArrowDown = `${assetPathPrefix}/8c44f.svg`;
const imgLine2 = `${assetPathPrefix}/062fa.svg`;
const imgCommonLinearSearch = `${assetPathPrefix}/c7403.svg`;
const imgCommonLinearArrowDown1 = `${assetPathPrefix}/eddf9.svg`;
const imgCommonLinearInvite = `${assetPathPrefix}/1b424.svg`;
const imgCommonLinearFilterButton = `${assetPathPrefix}/12f34.svg`;
const imgCommonLinearAdd = `${assetPathPrefix}/b721c.svg`;
const imgCommonLinearDelete = `${assetPathPrefix}/c5ea7.svg`;
const imgCommonLinearDownload = `${assetPathPrefix}/f6a6a.svg`;
const imgCommonLinearRefresh = `${assetPathPrefix}/08222.svg`;
const imgSidebarLinearSettings1 = `${assetPathPrefix}/6a285.svg`;
const imgCommonLinearFilter = `${assetPathPrefix}/ec98c.svg`;
const imgTableCellSorter = `${assetPathPrefix}/e9c72.svg`;
const imgCommonLinearLocationLeft = `${assetPathPrefix}/e008d.svg`;
const imgCommonLinearArrowLeft = `${assetPathPrefix}/eca34.svg`;
const imgCommonLinearArrowRight1 = `${assetPathPrefix}/afdf5.svg`;
const imgCommonLinearLocationRight = `${assetPathPrefix}/22447.svg`;
const imgIcon = `${assetPathPrefix}/c313e.svg`;

const SearchContext = React.createContext("");
const DetailNavigationContext = React.createContext<() => void>(() => undefined);

function getNodeText(node: React.ReactNode): string {
  return React.Children.toArray(node)
    .map((child) => {
      if (typeof child === "string" || typeof child === "number") {
        return String(child);
      }

      if (React.isValidElement<{ children?: React.ReactNode }>(child)) {
        return getNodeText(child.props.children);
      }

      return "";
    })
    .join("");
}

function MoreIcon() {
  return (
    <>
      <img alt="" className="operation-more-default" src={imgCommonFilledMore} />
      <img alt="" className="operation-more-hover" src={imgCommonFilledMoreHover} />
    </>
  );
}

function RowHoverActions() {
  return (
    <div className="row-hover-actions" onClick={(event) => event.stopPropagation()} onKeyDown={(event) => event.stopPropagation()}>
      <button className="row-hover-follow" type="button">
        <span className="relative size-[16px] shrink-0">
          <img alt="" className="design-icon-native" src={imgCommonLinearOrder} />
        </span>
        <span className="text-[14px] font-medium leading-[20px] text-[#3c455d] whitespace-nowrap">写跟进</span>
      </button>
      <button aria-label="编辑" className="row-hover-icon-button" type="button">
        <span className="relative size-[16px]">
          <img alt="" className="design-icon-native" src={imgCommonLinearEdit} />
        </span>
      </button>
      <button aria-label="更多操作" className="row-hover-icon-button" type="button">
        <span className="relative size-[16px]">
          <img alt="" className="operation-more-static" src={imgCommonFilledMore} />
        </span>
      </button>
    </div>
  );
}

type TagProps = {
  className?: string;
  property1?: "Default" | "Variant5";
};

function Tag({ className, property1 = "Default" }: TagProps) {
  const isVariant5 = property1 === "Variant5";
  return (
    <div className={className || `border border-solid content-stretch flex gap-[2px] items-center px-[6px] py-px relative rounded-[9999px] ${isVariant5 ? "bg-[#eef2fe] border-[#c7d6fe]" : "bg-[#fdf0e9] border-[#fadecf]"}`} id={isVariant5 ? "node-1_14709" : "node-1_14683"}>
      <div className="relative shrink-0 size-[9px]" id={isVariant5 ? "node-1_14712" : "node-1_14687"} data-name="Vector">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={isVariant5 ? imgVector1 : imgVector} />
      </div>
      <div className={`[word-break:break-word] flex flex-col font-["Inter:Regular"] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] whitespace-nowrap ${isVariant5 ? "text-[#4d72fe]" : "text-[#e08152]"}`} id={isVariant5 ? "node-1_14713" : "node-1_14688"}>
        <p className="leading-[18px]">{isVariant5 ? "SKA" : "NORM"}</p>
      </div>
    </div>
  );
}

type RowProps = {
  className?: string;
  children?: React.ReactNode | null;
  property1?: "Default";
};

function Row({ className, children = null, property1 = "Default" }: RowProps) {
  const searchQuery = React.useContext(SearchContext).trim().toLowerCase();
  const onNavigateDetail = React.useContext(DetailNavigationContext);
  if (searchQuery && !getNodeText(children).toLowerCase().includes(searchQuery)) {
    return null;
  }

  return (
    <div
      className={className || "bg-white border-[#f3f3f7] border-b border-solid content-stretch flex items-start min-h-[44px] overflow-clip relative w-[1118px]"}
      data-node-id="1:16215"
      onClick={onNavigateDetail}
      onKeyDown={(event) => {
        if (event.target === event.currentTarget && (event.key === "Enter" || event.key === " ")) {
          event.preventDefault();
          onNavigateDetail();
        }
      }}
      role="button"
      tabIndex={0}
    >
      <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative self-stretch" data-node-id="1:16216" data-name="行">
        {children || (
          <>
            <div className="border-[#f3f3f7] border-b border-solid content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-[48px] min-w-[240px] px-[12px] py-[8px] relative" data-node-id="1:16219" data-name="table-cell-body">
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-node-id="I1:16219;2835:114404" data-name="内容插槽">
                <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-node-id="I1:16219;2835:114404;1:16221" data-name="Content">
                  <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#1e2436] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="I1:16219;2835:114404;1:16222">
                    <p className="leading-[20px] overflow-hidden text-ellipsis">鼠标悬浮效果</p>
                  </div>
                </div>
                <div className="content-center flex flex-wrap gap-[2px_6px] h-[20px] items-center relative shrink-0 w-full" data-node-id="I1:16219;2835:114404;1:16225" data-name="说明文字插槽">
                  <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#646e87] text-[12px] text-ellipsis whitespace-nowrap" data-node-id="I1:16219;2835:114404;1:16227">
                    <p className="leading-[18px] overflow-hidden text-ellipsis">客户数 4</p>
                  </div>
                  <div className="h-[10px] relative shrink-0 w-0" data-node-id="I1:16219;2835:114404;1:16228">
                    <div className="absolute inset-[0_-0.5px]">
                      <img alt="" className="block max-w-none size-full" src={imgVector3} />
                    </div>
                  </div>
                  <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#646e87] text-[12px] text-ellipsis whitespace-nowrap" data-node-id="I1:16219;2835:114404;1:16231">
                    <p className="leading-[18px] overflow-hidden text-ellipsis">商户数 12</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-0 border-[#f3f3f7] border-solid content-stretch flex h-full items-center min-h-[48px] min-w-[90px] px-[12px] py-[8px] relative shrink-0 w-[90px]" data-node-id="1:16235" data-name="table-cell-body">
              <div className="content-center flex flex-[1_0_0] flex-wrap gap-y-[4px] h-full items-center min-w-px relative" data-node-id="1:16236" data-name="标签插槽">
                <div className="border border-[#4080ff] border-solid content-stretch flex gap-[2px] items-center px-[6px] py-px relative rounded-[9999px] shrink-0" data-node-id="1:16237" data-name="tag">
                  <div className="relative shrink-0 size-[12px]" data-node-id="1:16240">
                    <div className="absolute inset-[5.78%_7.74%_13.42%_7.74%]">
                      <img alt="" className="block max-w-none size-full" src={imgStar1} />
                    </div>
                  </div>
                  <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#4080ff] text-[12px] whitespace-nowrap" data-node-id="1:16241">
                    <p className="leading-[18px]">SMA</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-0 border-[#f3f3f7] border-solid content-stretch flex flex-[1_0_0] h-full items-center min-h-[48px] min-w-[80px] px-[12px] py-[8px] relative" data-node-id="1:16246" data-name="table-cell-body">
              <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-node-id="I1:16246;2985:32162" data-name="Content">
                <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I1:16246;574:4502" data-name="Content">
                  <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#1e2436] text-[14px] text-ellipsis" data-node-id="I1:16246;574:4503">
                    <p className="leading-[20px]">9</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-0 border-[#f3f3f7] border-solid content-stretch flex flex-[1_0_0] h-full items-center min-h-[48px] min-w-[80px] px-[12px] py-[8px] relative" data-node-id="1:16247" data-name="table-cell-body">
              <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-node-id="I1:16247;2985:32162" data-name="Content">
                <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I1:16247;574:4502" data-name="Content">
                  <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#1e2436] text-[14px] text-ellipsis" data-node-id="I1:16247;574:4503">
                    <p className="leading-[20px]">1</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-0 border-[#f3f3f7] border-solid content-stretch flex flex-[1_0_0] h-full items-center min-h-[48px] min-w-[120px] px-[12px] py-[8px] relative" data-node-id="1:16256" data-name="table-cell-body">
              <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-node-id="I1:16256;2985:32162" data-name="Content">
                <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I1:16256;574:4502" data-name="Content">
                  <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#1e2436] text-[14px] text-ellipsis" data-node-id="I1:16256;574:4503">
                    <p className="leading-[20px]">周杰伦</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-0 border-[#f3f3f7] border-solid content-stretch flex flex-[1_0_0] h-full items-center min-h-[48px] min-w-[120px] px-[12px] py-[8px] relative" data-node-id="1:16257" data-name="table-cell-body">
              <div className="content-center flex flex-[1_0_0] flex-wrap gap-y-[4px] h-full items-center min-w-px relative" data-node-id="I1:16257;366:246428" data-name="标签插槽">
                <div className="bg-[#eefbf5] content-stretch flex gap-[4px] items-center px-[8px] py-[2px] relative rounded-[9999px] shrink-0" data-node-id="I1:16257;430:252457" data-name="tag">
                  <div className="bg-[#18a765] content-stretch flex flex-col items-center justify-center p-[2px] relative rounded-[8px] shrink-0" data-node-id="I1:16257;430:252458" data-name="badge">
                    <div className="flex items-center justify-center relative shrink-0" data-node-id="I1:16257;430:252459">
                      <div className="-scale-y-100 flex-none rotate-180">
                        <div className="bg-[#d9d9d9] relative size-0" data-name="dot" />
                      </div>
                    </div>
                  </div>
                  <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] not-italic relative shrink-0 text-[#18a765] text-[14px] whitespace-nowrap" data-node-id="I1:16257;430:252460">
                    <p className="leading-[20px]">运营增长</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-0 border-[#f3f3f7] border-solid content-stretch flex h-full items-center min-h-[48px] min-w-[100px] px-[12px] py-[8px] relative shrink-0 w-[168px]" data-node-id="1:16258" data-name="table-cell-body">
              <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-node-id="I1:16258;2985:32163" data-name="Content">
                <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I1:16258;1312:14702" data-name="Content">
                  <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] min-w-px not-italic relative text-[#1e2436] text-[14px]" data-node-id="I1:16258;1312:14703">
                    <p className="leading-[20px]">2025-02-14 10:20:11</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-0 border-[#f3f3f7] border-solid content-stretch flex h-full items-center min-h-[48px] min-w-[100px] px-[12px] py-[8px] relative shrink-0 w-[168px]" data-node-id="1:16259" data-name="table-cell-body">
              <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-node-id="I1:16259;2985:32163" data-name="Content">
                <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I1:16259;1312:14702" data-name="Content">
                  <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] min-w-px not-italic relative text-[#1e2436] text-[14px]" data-node-id="I1:16259;1312:14703">
                    <p className="leading-[20px]">2025-02-14 10:20:11</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-0 border-[#f3f3f7] border-solid content-stretch flex h-full items-center min-h-[48px] px-[12px] py-[8px] relative shrink-0" data-node-id="1:16260" data-name="table-cell-body">
              <div className="content-stretch flex h-full items-center justify-end relative shrink-0" data-node-id="I1:16260;578:10532" data-name="button-group">
                <div className="content-stretch flex gap-[12px] items-center justify-end relative shrink-0" data-node-id="I1:16260;578:10532;12640:3505" data-name="按钮布局插槽">
                  <div className="content-stretch flex items-center justify-center p-[6px] relative rounded-[6px] shrink-0" data-node-id="I1:16260;578:10532;12640:3505;1:16262" data-name="button">
                    <div className="relative shrink-0 size-[16px]" data-node-id="I1:16260;578:10532;12640:3505;1:16262;802:23041" data-name="common-linear-add">
                      <MoreIcon />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      <RowHoverActions />
    </div>
  );
}

type TabsCapsuleProps = {
  className?: string;
  children?: React.ReactNode | null;
  propValue?: "sm";
  propValue1?: "1";
};

function TabsCapsule({ className, children = null, propValue = "sm", propValue1 = "1" }: TabsCapsuleProps) {
  return (
    <div className={className || "content-stretch flex h-[32px] items-center relative"} data-node-id="1:6791">
      <div className="bg-[#eaebf1] border-0 border-[#eaebf1] border-solid content-stretch flex gap-[2px] h-full items-center overflow-clip p-[2px] relative rounded-[8px] shrink-0" data-node-id="1:6792" data-name="tabs水平插槽">
        {children || (
          <>
            <div className="bg-white content-stretch drop-shadow-[0px_1px_0.5px_rgba(20,41,79,0.02),0px_2px_2px_rgba(20,41,79,0.01)] flex gap-[4px] h-full items-center justify-center max-w-[160px] min-w-[48px] px-[12px] py-[3px] relative rounded-[6px] shrink-0" data-node-id="1:6793" data-name="tabs-capsule-cell">
              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#1e2436] text-[14px] text-center text-ellipsis whitespace-nowrap" data-node-id="I1:6793;1220:72548">
                <p className="leading-[24px] overflow-hidden text-ellipsis">简约表格</p>
              </div>
            </div>
            <button className="content-stretch cursor-pointer flex gap-[4px] h-full items-center justify-center max-w-[160px] min-w-[48px] px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-node-id="1:6794" data-name="tabs-capsule-cell">
              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#646e87] text-[14px] text-center text-ellipsis whitespace-nowrap" data-node-id="I1:6794;1220:72538">
                <p className="leading-[20px] overflow-hidden text-ellipsis">传统表格</p>
              </div>
            </button>
            <button className="content-stretch cursor-pointer flex gap-[4px] h-full items-center justify-center max-w-[160px] min-w-[48px] px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-node-id="1:6795" data-name="tabs-capsule-cell">
              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#646e87] text-[14px] text-center text-ellipsis whitespace-nowrap" data-node-id="I1:6795;1220:72538">
                <p className="leading-[20px] overflow-hidden text-ellipsis">Tabs栏</p>
              </div>
            </button>
          </>
        )}
      </div>
    </div>
  );
}

type ButtonGroupProps = {
  className?: string;
  children?: React.ReactNode | null;
  more?: "False";
  prop2?: "False";
  prop3?: "True";
  prop4?: "False";
  prop5?: "False";
  prop6?: "False";
  propValue1?: "sm";
  propValue2?: "长方形";
};

function ButtonGroup({ className, children = null, more = "False", prop2 = "False", prop3 = "True", prop4 = "False", prop5 = "False", prop6 = "False", propValue1 = "sm", propValue2 = "长方形" }: ButtonGroupProps) {
  return (
    <div className={className || "content-stretch flex items-center justify-end relative"} data-node-id="1:6171">
      <div className="content-stretch flex items-center justify-end relative shrink-0" data-node-id="1:6172" data-name="按钮布局插槽">
        {children || (
          <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0" data-node-id="1:6173" data-name="按钮组">
            <div className="bg-white border border-[#d3d8de] border-solid content-stretch flex gap-[6px] items-center justify-center min-w-[56px] px-[8px] py-[6px] relative rounded-[8px] shrink-0" data-node-id="1:6174" data-name="button">
              <div className="[word-break:break-word] flex flex-col font-['Source_Han_Sans_CN:SemiBold'] justify-center leading-[0] not-italic relative shrink-0 text-[#3d4652] text-[14px] text-center whitespace-nowrap" data-node-id="I1:6174;150:1172">
                <p className="leading-[20px]">Button Text</p>
              </div>
            </div>
            <div className="bg-white border border-[#d3d8de] border-solid content-stretch flex gap-[6px] items-center justify-center min-w-[56px] px-[8px] py-[6px] relative rounded-[8px] shrink-0" data-node-id="1:6175" data-name="button">
              <div className="[word-break:break-word] flex flex-col font-['Source_Han_Sans_CN:SemiBold'] justify-center leading-[0] not-italic relative shrink-0 text-[#3d4652] text-[14px] text-center whitespace-nowrap" data-node-id="I1:6175;150:1172">
                <p className="leading-[20px]">Button Text</p>
              </div>
            </div>
            <div className="bg-[#0c71ff] content-stretch flex gap-[6px] items-center justify-center min-w-[56px] px-[8px] py-[6px] relative rounded-[8px] shrink-0" data-node-id="1:6176" data-name="button">
              <div className="[word-break:break-word] flex flex-col font-['Source_Han_Sans_CN:SemiBold'] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap" data-node-id="I1:6176;150:1168">
                <p className="leading-[20px]">Button Text</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

type ListScreenProps = {
  onNavigateDetail: () => void;
  onNavigateForm: () => void;
  onNavigateHome: () => void;
  onThemeChange: (theme: "dark" | "light") => void;
  theme: "dark" | "light";
};

export default function Component17({ onNavigateDetail, onNavigateForm, onNavigateHome, onThemeChange, theme }: ListScreenProps) {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [tableMode, setTableMode] = React.useState<"simple" | "traditional">("simple");
  const tableBodyScrollRef = React.useRef<HTMLDivElement>(null);
  const tableHeaderScrollRef = React.useRef<HTMLDivElement>(null);

  const syncTableScroll = (source: "body" | "header", scrollLeft: number) => {
    const target = source === "body" ? tableHeaderScrollRef.current : tableBodyScrollRef.current;
    if (target && target.scrollLeft !== scrollLeft) {
      target.scrollLeft = scrollLeft;
    }
  };

  return (
    <SearchContext.Provider value={searchQuery}>
      <DetailNavigationContext.Provider value={onNavigateDetail}>
        <div className="bg-[#15171e] content-stretch flex flex-col items-start relative size-full" data-node-id="1:21795" data-name="列表页">
      <div className="content-stretch flex flex-[1_0_0] items-start min-h-px relative w-full" data-node-id="1:21796">
        <div className="content-stretch flex flex-col h-full items-start px-[12px] relative shrink-0 w-[216px]" data-node-id="1:21797" data-name="Menu">
          <div className="content-stretch flex gap-[8px] items-center pb-[12px] pl-[6px] pr-[12px] pt-[16px] relative shrink-0 w-full" data-node-id="1:21798" data-name="logo">
            <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-node-id="1:21799">
              <div className="h-[24px] relative shrink-0 w-[90px]" data-node-id="1:21800" data-name="Logo">
                <div className="absolute contents inset-[8.33%_3.14%_8.33%_2.78%]" data-node-id="I1:21800;4343:5333" data-name="Group">
                  <div className="absolute inset-[8.33%_76.18%_8.33%_2.78%]" data-node-id="I1:21800;4343:5334" data-name="Group">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={theme === "light" ? imgGroupLight : imgGroup} />
                  </div>
                  <div className="absolute inset-[29.7%_3.14%_14.2%_28.64%]" data-node-id="I1:21800;4343:5337" data-name="Group">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={theme === "light" ? imgGroup1Light : imgGroup1} />
                  </div>
                </div>
              </div>
            </div>
            <div className="relative shrink-0 size-[14px]" data-node-id="1:21805" data-name="common-linear-menu">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCommonLinearMenu} />
            </div>
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px overflow-x-clip overflow-y-auto pt-[8px] relative w-full" data-node-id="1:21806" data-name="Navigation">
            <a className="content-stretch cursor-pointer flex gap-[8px] h-[40px] items-center pr-[8px] relative rounded-[8px] shrink-0 w-full" data-node-id="1:21807" data-name="navigation-item-1st-level" onClick={onNavigateHome}>
              <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-node-id="I1:21807;908:27495" data-name="Content">
                <div className="content-stretch flex items-center pl-[12px] pr-[8px] py-[8px] relative shrink-0" data-node-id="I1:21807;908:27496" data-name="Icon">
                  <div className="content-stretch flex items-center justify-center relative shrink-0" data-node-id="I1:21807;908:27497" data-name="尺寸=md">
                    <div className="relative shrink-0 size-[16px]" data-node-id="I1:21807;908:27497;114:779" data-name="sidebar-linear-home">
                      <div className="absolute inset-[4.17%_4.17%_4.28%_4.17%]" data-node-id="I1:21807;908:27497;114:779;864:19437" data-name="home">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgHome} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#bdc2d1] text-[14px] text-ellipsis text-left whitespace-nowrap" data-node-id="I1:21807;908:27499">
                  <p className="leading-[20px] overflow-hidden text-ellipsis">首页</p>
                </div>
              </div>
            </a>
            <div className="bg-[rgba(60,69,93,0.3)] content-stretch flex gap-[8px] h-[40px] items-center pr-[8px] relative rounded-[6px] shrink-0 w-full" data-node-id="1:21808" data-name="navigation-item-1st-level">
              <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-node-id="I1:21808;908:27469" data-name="Content">
                <div className="content-stretch flex items-center justify-center pl-[12px] pr-[8px] py-[8px] relative shrink-0" data-node-id="I1:21808;908:27470" data-name="Icon">
                  <div className="content-stretch flex items-center justify-center relative shrink-0" data-node-id="I1:21808;908:27471" data-name="尺寸=md">
                    <div className="relative shrink-0 size-[16px]" data-node-id="I1:21808;908:27471;114:779" data-name="common-filled-grid">
                      <div className="absolute contents inset-0" data-node-id="I1:21808;908:27471;114:779;14415:36290" data-name="vuesax/bold/grid-6">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVuesaxBoldGrid6} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Bold'] font-semibold justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[14px] text-ellipsis text-white whitespace-nowrap" data-node-id="I1:21808;908:27472">
                  <p className="leading-[20px] overflow-hidden text-ellipsis">列表页</p>
                </div>
              </div>
            </div>
            <div className="sidebar-nav-link content-stretch cursor-pointer flex gap-[8px] h-[40px] items-center pr-[8px] relative rounded-[8px] shrink-0 w-full" data-node-id="1:21809" data-name="navigation-item-1st-level" onClick={onNavigateDetail}>
              <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-node-id="I1:21809;908:27469" data-name="Content">
                <div className="content-stretch flex items-center justify-center pl-[12px] pr-[8px] py-[8px] relative shrink-0" data-node-id="I1:21809;908:27470" data-name="Icon">
                  <div className="content-stretch flex items-center justify-center relative shrink-0" data-node-id="I1:21809;908:27471" data-name="尺寸=md">
                    <div className="relative shrink-0 size-[16px]" data-node-id="I1:21809;908:27471;114:779" data-name="common-linear-file">
                      <img alt="" className="design-icon-native" src={imgCommonLinearFile} />
                    </div>
                  </div>
                </div>
                <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#bdc2d1] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="I1:21809;908:27472">
                  <p className="leading-[20px] overflow-hidden text-ellipsis">详情页</p>
                </div>
              </div>
            </div>
            <div className="sidebar-nav-link content-stretch cursor-pointer flex gap-[8px] h-[40px] items-center pr-[8px] relative rounded-[8px] shrink-0 w-full" data-node-id="1:21810" data-name="navigation-item-1st-level" onClick={onNavigateForm}>
              <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-node-id="I1:21810;908:27469" data-name="Content">
                <div className="content-stretch flex items-center justify-center pl-[12px] pr-[8px] py-[8px] relative shrink-0" data-node-id="I1:21810;908:27470" data-name="Icon">
                  <div className="content-stretch flex items-center justify-center relative shrink-0" data-node-id="I1:21810;908:27471" data-name="尺寸=md">
                    <div className="relative shrink-0 size-[16px]" data-node-id="I1:21810;908:27471;114:779" data-name="common-linear-todo">
                      <div className="absolute inset-[4.17%]" data-node-id="I1:21810;908:27471;114:779;1290:14543" data-name="task-square">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgTaskSquare} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#bdc2d1] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="I1:21810;908:27472">
                  <p className="leading-[20px] overflow-hidden text-ellipsis">表单页</p>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start pb-[16px] pt-[12px] relative shrink-0 w-full" data-node-id="1:21819">
            <div className="content-stretch flex h-[28px] items-center relative shrink-0 w-full" data-node-id="1:21827" data-name="tabs-capsule">
              <div className="bg-[rgba(60,69,93,0.3)] content-stretch flex flex-[1_0_0] gap-[2px] items-center min-w-px overflow-clip p-[2px] relative rounded-[6px]" data-node-id="I1:21827;522:9341" data-name="tabs水平插槽">
                <div className="flex flex-[1_0_0] flex-row items-center self-stretch" data-node-id="I1:21827;522:9341;1:21821">
                  <button aria-pressed={theme === "dark"} className="bg-[#15171e] content-stretch flex flex-[1_0_0] gap-[4px] h-full items-center justify-center max-w-[160px] min-w-[48px] px-[12px] py-[3px] relative rounded-[4px] shadow-[0px_2px_4px_0px_rgba(18,50,108,0.01),0px_8px_16px_0px_rgba(18,50,108,0.02)]" data-name="tabs-capsule-cell" data-theme-option="dark" onClick={() => onThemeChange("dark")} type="button">
                    <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[12px] text-center text-ellipsis text-white whitespace-nowrap" data-node-id="I1:21827;522:9341;1:21821;522:9597">
                      <p className="leading-[20px] overflow-hidden text-ellipsis">暗色风格</p>
                    </div>
                  </button>
                </div>
                <div className="flex flex-[1_0_0] flex-row items-center self-stretch" data-node-id="I1:21827;522:9341;1:21822">
                  <button aria-pressed={theme === "light"} className="content-stretch cursor-pointer flex flex-[1_0_0] gap-[4px] h-full items-center justify-center max-w-[160px] min-w-[48px] px-[12px] py-[4px] relative rounded-[4px]" data-name="tabs-capsule-cell" data-theme-option="light" onClick={() => onThemeChange("light")} type="button">
                    <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#bdc2d1] text-[12px] text-center text-ellipsis whitespace-nowrap" data-node-id="I1:21827;522:9341;1:21822;522:9565">
                      <p className="leading-[20px] overflow-hidden text-ellipsis">亮色风格</p>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#f0f1f7] content-stretch flex flex-[1_0_0] flex-col h-full items-start min-w-px overflow-clip relative" data-node-id="1:21828" data-name="右">
          <div className="border-[#e3e6ed] border-b border-solid content-stretch flex gap-[8px] h-[56px] items-center px-[32px] shrink-0 sticky top-0 w-full" data-node-id="1:21829" data-name="PageHeader">
            <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px relative" data-node-id="1:21830">
              <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-w-px relative" data-node-id="1:21832" data-name="面包屑">
                <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#646e87] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="1:21834">
                  <p className="leading-[20px] overflow-hidden text-ellipsis">{theme === "light" ? "首页" : "列表页"}</p>
                </div>
                <div className="relative shrink-0 size-[12px]" data-node-id="1:21835" data-name="common-linear-arrow-right">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCommonLinearArrowRight} />
                </div>
                <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#1e2436] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="1:21838">
                  <p className="leading-[20px] overflow-hidden text-ellipsis">{theme === "light" ? "客户详情" : "列表页"}</p>
                </div>
              </div>
              <button className="bg-[#eaebf1] content-stretch cursor-pointer flex gap-[4px] h-[32px] items-center px-[12px] py-[6px] relative rounded-[6px] shrink-0 w-[140px]" data-node-id="1:21839" data-name="input-search">
                <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-node-id="I1:21839;654:20563" data-name="Content">
                  <div className="relative shrink-0 size-[16px]" data-node-id="I1:21839;654:20564" data-name="common-linear-search">
                    <div className="absolute inset-[4.17%]" data-node-id="I1:21839;654:20564;110:1324" data-name="search-normal">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSearchNormal} />
                    </div>
                  </div>
                  <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#646e87] text-[14px] text-ellipsis text-left whitespace-nowrap" data-node-id="I1:21839;654:20565">
                    <p className="leading-[20px] overflow-hidden text-ellipsis">搜索 ⌘+K</p>
                  </div>
                </div>
              </button>
            </div>
            <div className="content-stretch flex gap-[8px] h-full items-center relative shrink-0" data-node-id="1:21857" data-name="功能区">
              <div className="bg-[#eaebf1] content-stretch flex gap-[8px] items-center justify-center p-[6px] relative rounded-[6px] shrink-0 size-[32px]" data-node-id="1:21861" data-name="Icon-item">
                <div className="relative shrink-0 size-[16px]" data-node-id="1:21862" data-name="common-linear-notification">
                  <div className="absolute inset-[3.92%_12.43%_3.92%_12.39%]" data-node-id="I1:21862;110:1422" data-name="notification">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgNotification} />
                  </div>
                </div>
              </div>
              <div className="bg-[#eaebf1] content-stretch flex gap-[8px] items-center justify-center p-[6px] relative rounded-[6px] shrink-0 size-[32px]" data-node-id="1:21864" data-name="Icon-item">
                <div className="relative shrink-0 size-[16px]" data-node-id="1:21865" data-name="common-linear-message-question">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCommonLinearMessageQuestion} />
                </div>
              </div>
              <div className="bg-[#eaebf1] content-stretch flex gap-[4px] items-center justify-center p-[6px] relative rounded-[6px] shrink-0 size-[32px]" data-node-id="1:21873" data-name="Icon-item">
                <div className="relative shrink-0 size-[16px]" data-node-id="1:21874" data-name="sidebar-linear-settings">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSidebarLinearSettings} />
                </div>
              </div>
              <div className="bg-[#eaebf1] content-stretch flex gap-[4px] items-center pl-[4px] pr-[6px] py-[4px] relative rounded-[16px] shrink-0" data-node-id="1:21882" data-name="Icon-item">
                <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="I1:21882;4358:4272" data-name="个人">
                  <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 size-[24px]" data-node-id="I1:21882;1740:15931" data-name="avatar">
                    <div className="flex-[1_0_0] h-full min-w-px relative rounded-[32px]" data-node-id="I1:21882;1740:15931;509:320" data-name="Avatar">
                      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[32px] size-full" src={imgAvatar} />
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="I1:21882;4358:3405" data-name="文本信息">
                    <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#3c455d] text-[12px] text-center text-ellipsis whitespace-nowrap" data-node-id="I1:21882;4358:3406">
                      <p className="leading-[18px] overflow-hidden text-ellipsis">张三</p>
                    </div>
                  </div>
                </div>
                <div className="relative shrink-0 size-[16px]" data-node-id="I1:21882;1740:15932" data-name="common-linear-arrow-down">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCommonLinearArrowDown} />
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[20px] items-start min-h-px overflow-x-clip overflow-y-auto px-[32px] pb-0 pt-[20px] relative w-full" data-node-id="1:21934">
            <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-node-id="1:21935">
              <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-node-id="1:21936">
                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-center justify-center min-w-px relative" data-node-id="1:21937">
                  <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#1e2436] text-[24px] w-full" data-node-id="1:21938">
                    <p className="leading-[32px]">客户管理</p>
                  </div>
                </div>
                <ButtonGroup className="content-stretch flex items-center justify-end relative shrink-0">
                  <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0" data-node-id="1:21941" data-name="按钮组">
                    {tableMode === "traditional" && (
                      <button className="bg-white border border-[#e7e8ef] border-solid content-stretch cursor-pointer flex gap-[6px] h-[32px] items-center justify-center px-[8px] py-[6px] relative rounded-[8px] shrink-0" type="button">
                        <span className="relative shrink-0 size-[16px]">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCommonLinearDownload} />
                        </span>
                        <span className="font-['Noto_Sans_SC:Regular'] text-[#3c455d] text-[14px] leading-[20px]">导出</span>
                      </button>
                    )}
                    <div className="bg-white border border-[#e3e6ed] border-solid content-stretch flex gap-[6px] h-[32px] items-center justify-center min-w-[56px] px-[10px] py-[6px] relative rounded-[6px] shrink-0" data-node-id="1:21945" data-name="button">
                      <div className="relative shrink-0 size-[16px]" data-node-id="I1:21945;150:1171" data-name="common-linear-add">
                        <img alt="" className="design-icon-native" src={imgCommonLinearInvite} />
                      </div>
                      <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] not-italic relative shrink-0 text-[#3c455d] text-[14px] text-center whitespace-nowrap" data-node-id="I1:21945;150:1172">
                        <p className="leading-[20px]">邀请入驻</p>
                      </div>
                    </div>
                    <button
                      className="add-customer-button bg-[#0036fe] border-0 content-stretch cursor-pointer flex gap-[6px] h-[32px] items-center justify-center min-w-[56px] px-[10px] py-[6px] relative rounded-[6px] shrink-0"
                      data-node-id="1:21947"
                      data-name="button"
                      onClick={onNavigateForm}
                      type="button"
                    >
                      <div className="relative shrink-0 size-[16px]" data-node-id="I1:21947;150:1167" data-name="common-linear-add">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCommonLinearAdd} />
                      </div>
                      <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap" data-node-id="I1:21947;150:1168">
                        <p className="leading-[20px]">新增客户</p>
                      </div>
                    </button>
                  </div>
                </ButtonGroup>
              </div>
              <TabsCapsule className="list-table-mode-tabs content-stretch flex h-[32px] items-center relative shrink-0">
                <button
                  className={`${tableMode === "simple" ? "bg-white drop-shadow-[0px_1px_0.5px_rgba(20,41,79,0.02),0px_2px_2px_rgba(20,41,79,0.01)] py-[3px]" : "py-[4px]"} content-stretch cursor-pointer flex gap-[4px] h-full items-center justify-center max-w-[160px] min-w-[48px] px-[12px] relative rounded-[6px] shrink-0`}
                  data-node-id="1:21960"
                  data-name="tabs-capsule-cell"
                  onClick={() => setTableMode("simple")}
                  type="button"
                >
                  <div className={`[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] min-w-px not-italic overflow-hidden text-[14px] text-center text-ellipsis whitespace-nowrap ${tableMode === "simple" ? "text-[#1e2436]" : "text-[#646e87]"}`} data-node-id="I1:21960;1220:72548">
                    <p className={`${tableMode === "simple" ? "leading-[24px]" : "leading-[20px]"} overflow-hidden text-ellipsis`}>简约表格</p>
                  </div>
                </button>
                <button
                  className={`${tableMode === "traditional" ? "bg-white drop-shadow-[0px_1px_0.5px_rgba(20,41,79,0.02),0px_2px_2px_rgba(20,41,79,0.01)] py-[3px]" : "py-[4px]"} content-stretch cursor-pointer flex gap-[4px] h-full items-center justify-center max-w-[160px] min-w-[48px] px-[12px] relative rounded-[6px] shrink-0`}
                  data-node-id="1:21961"
                  data-name="tabs-capsule-cell"
                  onClick={() => setTableMode("traditional")}
                  type="button"
                >
                  <div className={`[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] min-w-px not-italic overflow-hidden text-[14px] text-center text-ellipsis whitespace-nowrap ${tableMode === "traditional" ? "text-[#1e2436]" : "text-[#646e87]"}`} data-node-id="I1:21961;1220:72538">
                    <p className={`${tableMode === "traditional" ? "leading-[24px]" : "leading-[20px]"} overflow-hidden text-ellipsis`}>传统表格</p>
                  </div>
                </button>
                <div className="content-stretch flex gap-[4px] h-full items-center justify-center max-w-[160px] min-w-[48px] px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-node-id="1:21962" data-name="tabs-capsule-cell">
                  <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#646e87] text-[14px] text-center text-ellipsis whitespace-nowrap" data-node-id="I1:21962;1220:72538">
                    <p className="leading-[20px] overflow-hidden text-ellipsis">Tabs栏</p>
                  </div>
                </div>
              </TabsCapsule>
            </div>
            {tableMode === "traditional" && (
              <TraditionalTableView
                onSearchChange={setSearchQuery}
                searchQuery={searchQuery}
              />
            )}
            <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-node-id="1:22046">
              <div className={`${tableMode === "simple" ? "flex" : "hidden"} bg-white border border-[#edeef3] border-solid content-stretch drop-shadow-[0px_1px_0.5px_rgba(20,41,79,0.02),0px_2px_2px_rgba(20,41,79,0.01)] flex-col gap-[16px] items-start p-[20px] relative rounded-[8px] shrink-0 w-full`} data-node-id="1:22047">
                <div className="content-stretch flex gap-[20px] items-center relative shrink-0 w-full" data-node-id="1:22049">
                  <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-start min-w-[80px] overflow-clip relative rounded-[4px]" data-node-id="1:22050" data-name="数据统计卡片">
                    <div className="flex-[1_0_0] min-w-px relative" data-node-id="1:22053">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
                        <div className="content-stretch flex items-center relative shrink-0 w-full" data-node-id="1:22054" data-name="标题">
                          <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-w-px relative" data-node-id="1:22055" data-name="标题">
                            <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] not-italic relative shrink-0 text-[#3c455d] text-[14px] whitespace-nowrap" data-node-id="1:22056">
                              <p className="leading-[20px]">全部</p>
                            </div>
                          </div>
                        </div>
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#1e2436] text-[20px] w-full" data-node-id="1:22058">
                          <p className="leading-[30px]">28</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-center self-stretch" data-node-id="1:22059">
                    <div className="flex h-full items-center justify-center relative shrink-0 w-0" style={{ containerType: "size" }}>
                      <div className="flex-none rotate-90 w-[100cqh]">
                        <div className="h-0 relative w-full">
                          <div className="absolute inset-[-1px_0_0_0]">
                            <img alt="" className="block max-w-none size-full" src={imgLine2} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-start min-w-[80px] overflow-clip relative rounded-[4px]" data-node-id="1:22060" data-name="数据统计卡片">
                    <div className="flex-[1_0_0] min-w-px relative" data-node-id="1:22063">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
                        <div className="content-stretch flex items-center relative shrink-0 w-full" data-node-id="1:22064" data-name="标题">
                          <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-w-px relative" data-node-id="1:22065" data-name="标题">
                            <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] not-italic relative shrink-0 text-[#3c455d] text-[14px] whitespace-nowrap" data-node-id="1:22066">
                              <p className="leading-[20px]">初步接触</p>
                            </div>
                          </div>
                        </div>
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#1e2436] text-[20px] w-full" data-node-id="1:22068">
                          <p className="leading-[30px]">28</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-center self-stretch" data-node-id="1:22069">
                    <div className="flex h-full items-center justify-center relative shrink-0 w-0" style={{ containerType: "size" }}>
                      <div className="flex-none rotate-90 w-[100cqh]">
                        <div className="h-0 relative w-full">
                          <div className="absolute inset-[-1px_0_0_0]">
                            <img alt="" className="block max-w-none size-full" src={imgLine2} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-start min-w-[80px] overflow-clip relative rounded-[4px]" data-node-id="1:22070" data-name="数据统计卡片">
                    <div className="flex-[1_0_0] min-w-px relative" data-node-id="1:22073">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
                        <div className="content-stretch flex items-center relative shrink-0 w-full" data-node-id="1:22074" data-name="标题">
                          <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-w-px relative" data-node-id="1:22075" data-name="标题">
                            <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] not-italic relative shrink-0 text-[#3c455d] text-[14px] whitespace-nowrap" data-node-id="1:22076">
                              <p className="leading-[20px]">意向沟通</p>
                            </div>
                          </div>
                        </div>
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#1e2436] text-[20px] w-full" data-node-id="1:22078">
                          <p className="leading-[30px]">28</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-center self-stretch" data-node-id="1:22079">
                    <div className="flex h-full items-center justify-center relative shrink-0 w-0" style={{ containerType: "size" }}>
                      <div className="flex-none rotate-90 w-[100cqh]">
                        <div className="h-0 relative w-full">
                          <div className="absolute inset-[-1px_0_0_0]">
                            <img alt="" className="block max-w-none size-full" src={imgLine2} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-start min-w-[80px] overflow-clip relative rounded-[4px]" data-node-id="1:22080" data-name="数据统计卡片">
                    <div className="flex-[1_0_0] min-w-px relative" data-node-id="1:22083">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
                        <div className="content-stretch flex items-center relative shrink-0 w-full" data-node-id="1:22084" data-name="标题">
                          <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-w-px relative" data-node-id="1:22085" data-name="标题">
                            <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] not-italic relative shrink-0 text-[#3c455d] text-[14px] whitespace-nowrap" data-node-id="1:22086">
                              <p className="leading-[20px]">入驻签约</p>
                            </div>
                          </div>
                        </div>
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#1e2436] text-[20px] w-full" data-node-id="1:22088">
                          <p className="leading-[30px]">28</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-center self-stretch" data-node-id="1:22089">
                    <div className="flex h-full items-center justify-center relative shrink-0 w-0" style={{ containerType: "size" }}>
                      <div className="flex-none rotate-90 w-[100cqh]">
                        <div className="h-0 relative w-full">
                          <div className="absolute inset-[-1px_0_0_0]">
                            <img alt="" className="block max-w-none size-full" src={imgLine2} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-start min-w-[80px] overflow-clip relative rounded-[4px]" data-node-id="1:22090" data-name="数据统计卡片">
                    <div className="flex-[1_0_0] min-w-px relative" data-node-id="1:22093">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
                        <div className="content-stretch flex items-center relative shrink-0 w-full" data-node-id="1:22094" data-name="标题">
                          <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-w-px relative" data-node-id="1:22095" data-name="标题">
                            <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] not-italic relative shrink-0 text-[#3c455d] text-[14px] whitespace-nowrap" data-node-id="1:22096">
                              <p className="leading-[20px]">运营/增长</p>
                            </div>
                          </div>
                        </div>
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#1e2436] text-[20px] w-full" data-node-id="1:22098">
                          <p className="leading-[30px]">28</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-center self-stretch" data-node-id="1:22099">
                    <div className="flex h-full items-center justify-center relative shrink-0 w-0" style={{ containerType: "size" }}>
                      <div className="flex-none rotate-90 w-[100cqh]">
                        <div className="h-0 relative w-full">
                          <div className="absolute inset-[-1px_0_0_0]">
                            <img alt="" className="block max-w-none size-full" src={imgLine2} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-start min-w-[80px] overflow-clip relative rounded-[4px]" data-node-id="1:22100" data-name="数据统计卡片">
                    <div className="flex-[1_0_0] min-w-px relative" data-node-id="1:22103">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
                        <div className="content-stretch flex items-center relative shrink-0 w-full" data-node-id="1:22104" data-name="标题">
                          <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-w-px relative" data-node-id="1:22105" data-name="标题">
                            <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] not-italic relative shrink-0 text-[#3c455d] text-[14px] whitespace-nowrap" data-node-id="1:22106">
                              <p className="leading-[20px]">沉睡/流失</p>
                            </div>
                          </div>
                        </div>
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#1e2436] text-[20px] w-full" data-node-id="1:22108">
                          <p className="leading-[30px]">28</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="list-table-card bg-white border border-[#edeef3] border-solid content-stretch flex flex-col gap-[16px] items-start overflow-visible pb-0 pt-[20px] px-[20px] relative rounded-[8px] shadow-[0px_1px_1px_0px_rgba(20,41,79,0.02),0px_2px_4px_0px_rgba(20,41,79,0.01)] shrink-0 w-full" data-node-id="1:22125">
                <div className={`${tableMode === "simple" ? "flex" : "hidden"} content-stretch gap-[8px] items-start relative shrink-0 w-full`} data-node-id="1:22126" data-name="搜索">
                  <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-node-id="1:22127">
                    <div className="content-stretch flex flex-col h-[32px] items-start relative rounded-[6px] shrink-0 w-[280px]" data-node-id="1:22128">
                      <div className="bg-white border border-[#e3e6ed] border-solid content-stretch flex gap-[4px] h-[32px] items-center px-[12px] py-[6px] relative rounded-[6px] shrink-0 w-full" data-node-id="1:22129" data-name="input">
                        <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-node-id="I1:22129;215:694" data-name="Content">
                          <div className="relative shrink-0 size-[16px]" data-node-id="I1:22129;215:695" data-name="common-linear-search">
                            <img alt="" className="design-icon-native" src={imgCommonLinearSearch} />
                          </div>
                          <input
                            aria-label="搜索集团、客户、商户名称或ID"
                            className="h-[20px] flex-[1_0_0] min-w-px bg-transparent font-['PingFang_SC:Regular'] text-[#1e2436] text-[14px] leading-[20px] outline-none placeholder:text-[#9097ad]"
                            onChange={(event) => setSearchQuery(event.target.value)}
                            placeholder="搜索集团、客户、商户名称/ID"
                            type="search"
                            value={searchQuery}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="bg-white border border-[#e3e6ed] border-solid content-stretch flex gap-[2px] h-[32px] items-center max-w-[320px] px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-node-id="1:22130" data-name="filter-simple">
                      <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#3c455d] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="I1:22130;3248:13910">
                        <p className="leading-[20px] overflow-hidden text-ellipsis">更新时间</p>
                      </div>
                      <div className="content-stretch flex items-center p-[2px] relative shrink-0" data-node-id="I1:22130;11024:14070" data-name="icon">
                        <div className="relative shrink-0 size-[12px]" data-node-id="I1:22130;3248:13911" data-name="common-linear-arrow-down">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCommonLinearArrowDown1} />
                        </div>
                      </div>
                    </div>
                    <div className="bg-white border border-[#e3e6ed] border-solid content-stretch flex gap-[6px] h-[32px] items-center justify-center min-w-[56px] px-[8px] py-[6px] relative rounded-[6px] shrink-0" data-node-id="1:22131" data-name="button">
                      <div className="relative shrink-0 size-[16px]" data-node-id="I1:22131;150:1171" data-name="common-linear-add">
                        <img alt="" className="design-icon-native" src={imgCommonLinearFilterButton} />
                      </div>
                      <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] not-italic relative shrink-0 text-[#3c455d] text-[14px] whitespace-nowrap" data-node-id="I1:22131;150:1172">
                        <p className="leading-[20px]">更多筛选</p>
                      </div>
                    </div>
                    <div className="bg-white border border-[#e3e6ed] border-solid content-stretch flex items-center justify-center p-[8px] relative rounded-[6px] shrink-0 size-[32px]" data-node-id="1:22132" data-name="button">
                      <div className="relative shrink-0 size-[16px]" data-node-id="I1:22132;152:8756" data-name="common-linear-add">
                        <img alt="" className="design-icon-native" src={imgCommonLinearDelete} />
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0" data-node-id="1:22133" data-name="按钮布局插槽">
                    <div className="bg-white border border-[#e3e6ed] border-solid content-stretch flex gap-[6px] h-[32px] items-center justify-center px-[12px] py-[10px] relative rounded-[6px] shrink-0" data-node-id="1:22134" data-name="button">
                      <div className="relative shrink-0 size-[16px]" data-node-id="I1:22134;118:731" data-name="common-linear-add">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCommonLinearDownload} />
                      </div>
                      <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] not-italic relative shrink-0 text-[#3c455d] text-[14px] text-center whitespace-nowrap" data-node-id="I1:22134;118:732">
                        <p className="leading-[20px]">导出</p>
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0" data-node-id="1:22135" data-name="按钮组">
                      <div className="bg-white border border-[#e3e6ed] border-solid content-stretch flex items-center justify-center p-[8px] relative rounded-[6px] shrink-0 size-[32px]" data-node-id="1:22137" data-name="button">
                        <div className="relative shrink-0 size-[16px]" data-node-id="I1:22137;152:8756" data-name="common-linear-add">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCommonLinearRefresh} />
                        </div>
                      </div>
                      <div className="bg-white border border-[#e3e6ed] border-solid content-stretch flex items-center justify-center p-[8px] relative rounded-[6px] shrink-0 size-[32px]" data-node-id="1:22138" data-name="button">
                        <div className="relative shrink-0 size-[16px]" data-node-id="I1:22138;152:8756" data-name="common-linear-add">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSidebarLinearSettings1} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="simple-table-shell content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="1:22141">
                  <div
                    className="simple-table-body-scroll simple-table-view bg-white content-stretch flex flex-col items-start relative shrink-0 w-full"
                    data-node-id="1:22142"
                    data-name="table"
                    onScroll={(event) => syncTableScroll("body", event.currentTarget.scrollLeft)}
                    ref={tableBodyScrollRef}
                  >
                    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="1:22143" data-name="水平布局插槽">
                      <Row className="bg-white border-[#f3f3f7] border-b border-solid content-stretch flex items-start min-h-[44px] overflow-clip relative shrink-0 w-full">
                        <div className="border-[#f3f3f7] border-b border-solid content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-[48px] min-w-[240px] px-[12px] py-[8px] relative" data-node-id="1:22162" data-name="table-cell-body">
                          <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-node-id="I1:22162;2835:114404" data-name="内容插槽">
                            <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-node-id="I1:22162;2835:114404;1:22148" data-name="Content">
                              <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#1e2436] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="I1:22162;2835:114404;1:22149">
                                <p className="leading-[20px] overflow-hidden text-ellipsis">阿里巴巴网络技术有限公司</p>
                              </div>
                            </div>
                            <div className="content-center flex flex-wrap gap-[2px_6px] h-[20px] items-center relative shrink-0 w-full" data-node-id="I1:22162;2835:114404;1:22152" data-name="说明文字插槽">
                              <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#646e87] text-[12px] text-ellipsis whitespace-nowrap" data-node-id="I1:22162;2835:114404;1:22154">
                                <p className="leading-[18px] overflow-hidden text-ellipsis">客户数 4</p>
                              </div>
                              <div className="h-[10px] relative shrink-0 w-0" data-node-id="I1:22162;2835:114404;1:22155">
                                <div className="absolute inset-[0_-0.5px]">
                                  <img alt="" className="block max-w-none size-full" src={imgVector2} />
                                </div>
                              </div>
                              <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#646e87] text-[12px] text-ellipsis whitespace-nowrap" data-node-id="I1:22162;2835:114404;1:22158">
                                <p className="leading-[18px] overflow-hidden text-ellipsis">商户数 12</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="border-0 border-[#f3f3f7] border-solid content-stretch flex h-full items-center min-h-[48px] min-w-[90px] px-[12px] py-[8px] relative shrink-0 w-[90px]" data-node-id="1:22163" data-name="table-cell-body">
                          <div className="content-center flex flex-[1_0_0] flex-wrap gap-y-[4px] h-full items-center min-w-px relative" data-node-id="1:22164" data-name="标签插槽">
                            <Tag className="bg-[#fdf0e9] border border-[#fadecf] border-solid content-stretch flex gap-[2px] items-center px-[6px] py-px relative rounded-[9999px] shrink-0" />
                          </div>
                        </div>
                        <div className="border-0 border-[#f3f3f7] border-solid content-stretch flex flex-[1_0_0] h-full items-center min-h-[48px] min-w-[80px] px-[12px] py-[8px] relative" data-node-id="1:22169" data-name="table-cell-body">
                          <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-node-id="I1:22169;2985:32162" data-name="Content">
                            <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I1:22169;574:4502" data-name="Content">
                              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#1e2436] text-[14px] text-ellipsis" data-node-id="I1:22169;574:4503">
                                <p className="leading-[20px]">9</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="border-0 border-[#f3f3f7] border-solid content-stretch flex flex-[1_0_0] h-full items-center min-h-[48px] min-w-[80px] px-[12px] py-[8px] relative" data-node-id="1:22170" data-name="table-cell-body">
                          <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-node-id="I1:22170;2985:32162" data-name="Content">
                            <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I1:22170;574:4502" data-name="Content">
                              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#1e2436] text-[14px] text-ellipsis" data-node-id="I1:22170;574:4503">
                                <p className="leading-[20px]">1</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="border-0 border-[#f3f3f7] border-solid content-stretch flex flex-[1_0_0] h-full items-center min-h-[48px] min-w-[120px] px-[12px] py-[8px] relative" data-node-id="1:22179" data-name="table-cell-body">
                          <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-node-id="I1:22179;2985:32162" data-name="Content">
                            <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I1:22179;574:4502" data-name="Content">
                              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#1e2436] text-[14px] text-ellipsis" data-node-id="I1:22179;574:4503">
                                <p className="leading-[20px]">周杰伦</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="border-0 border-[#f3f3f7] border-solid content-stretch flex flex-[1_0_0] h-full items-center min-h-[48px] min-w-[120px] px-[12px] py-[8px] relative" data-node-id="1:22180" data-name="table-cell-body">
                          <div className="content-center flex flex-[1_0_0] flex-wrap gap-y-[4px] h-full items-center min-w-px relative" data-node-id="I1:22180;366:246416" data-name="标签插槽">
                            <div className="bg-[#f3f3f7] content-stretch flex gap-[4px] items-center px-[8px] py-px relative rounded-[9999px] shrink-0" data-node-id="I1:22180;430:252433" data-name="tag">
                              <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] not-italic relative shrink-0 text-[#3c455d] text-[12px] whitespace-nowrap" data-node-id="I1:22180;430:252435">
                                <p className="leading-[18px]">初步接触</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="border-0 border-[#f3f3f7] border-solid content-stretch flex h-full items-center min-h-[48px] min-w-[100px] px-[12px] py-[8px] relative shrink-0 w-[168px]" data-node-id="1:22181" data-name="table-cell-body">
                          <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-node-id="I1:22181;2985:32163" data-name="Content">
                            <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I1:22181;1312:14702" data-name="Content">
                              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] min-w-px not-italic relative text-[#1e2436] text-[14px]" data-node-id="I1:22181;1312:14703">
                                <p className="leading-[20px]">2025-02-14 10:20:11</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="border-0 border-[#f3f3f7] border-solid content-stretch flex h-full items-center min-h-[48px] min-w-[100px] px-[12px] py-[8px] relative shrink-0 w-[168px]" data-node-id="1:22182" data-name="table-cell-body">
                          <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-node-id="I1:22182;2985:32163" data-name="Content">
                            <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I1:22182;1312:14702" data-name="Content">
                              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] min-w-px not-italic relative text-[#1e2436] text-[14px]" data-node-id="I1:22182;1312:14703">
                                <p className="leading-[20px]">2025-02-14 10:20:11</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="border-0 border-[#f3f3f7] border-solid content-stretch flex h-[56px] items-center min-h-[48px] px-[12px] py-[8px] relative shrink-0" data-node-id="1:22187" data-name="table-cell-body">
                          <div className="content-stretch flex h-full items-center justify-end relative shrink-0" data-node-id="I1:22187;578:10532" data-name="button-group">
                            <div className="content-stretch flex gap-[12px] items-center justify-end relative shrink-0" data-node-id="I1:22187;578:10532;12640:3505" data-name="按钮布局插槽">
                              <div className="content-stretch flex items-center justify-center p-[6px] relative rounded-[6px] shrink-0" data-node-id="I1:22187;578:10532;12640:3505;1:22184" data-name="button">
                                <div className="relative shrink-0 size-[16px]" data-node-id="I1:22187;578:10532;12640:3505;1:22184;802:23041" data-name="common-linear-add">
                                  <MoreIcon />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Row>
                      <Row className="bg-white border-[#f3f3f7] border-b border-solid content-stretch flex items-start min-h-[44px] overflow-clip relative shrink-0 w-full">
                        <div className="border-[#f3f3f7] border-b border-solid content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-[48px] min-w-[240px] px-[12px] py-[8px] relative" data-node-id="1:22207" data-name="table-cell-body">
                          <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-node-id="I1:22207;2835:114404" data-name="内容插槽">
                            <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-node-id="I1:22207;2835:114404;1:22193" data-name="Content">
                              <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#1e2436] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="I1:22207;2835:114404;1:22194">
                                <p className="leading-[20px] overflow-hidden text-ellipsis">阿里巴巴网络技术有限公司</p>
                              </div>
                            </div>
                            <div className="content-center flex flex-wrap gap-[2px_6px] h-[20px] items-center relative shrink-0 w-full" data-node-id="I1:22207;2835:114404;1:22197" data-name="说明文字插槽">
                              <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#646e87] text-[12px] text-ellipsis whitespace-nowrap" data-node-id="I1:22207;2835:114404;1:22199">
                                <p className="leading-[18px] overflow-hidden text-ellipsis">客户数 4</p>
                              </div>
                              <div className="h-[10px] relative shrink-0 w-0" data-node-id="I1:22207;2835:114404;1:22200">
                                <div className="absolute inset-[0_-0.5px]">
                                  <img alt="" className="block max-w-none size-full" src={imgVector2} />
                                </div>
                              </div>
                              <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#646e87] text-[12px] text-ellipsis whitespace-nowrap" data-node-id="I1:22207;2835:114404;1:22203">
                                <p className="leading-[18px] overflow-hidden text-ellipsis">商户数 12</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="border-0 border-[#f3f3f7] border-solid content-stretch flex h-full items-center min-h-[48px] min-w-[90px] px-[12px] py-[8px] relative shrink-0 w-[90px]" data-node-id="1:22208" data-name="table-cell-body">
                          <div className="content-center flex flex-[1_0_0] flex-wrap gap-y-[4px] h-full items-center min-w-px relative" data-node-id="1:22209" data-name="标签插槽">
                            <Tag className="bg-[#fdf0e9] border border-[#fadecf] border-solid content-stretch flex gap-[2px] items-center px-[6px] py-px relative rounded-[9999px] shrink-0" />
                          </div>
                        </div>
                        <div className="border-0 border-[#f3f3f7] border-solid content-stretch flex flex-[1_0_0] h-full items-center min-h-[48px] min-w-[80px] px-[12px] py-[8px] relative" data-node-id="1:22214" data-name="table-cell-body">
                          <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-node-id="I1:22214;2985:32162" data-name="Content">
                            <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I1:22214;574:4502" data-name="Content">
                              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#1e2436] text-[14px] text-ellipsis" data-node-id="I1:22214;574:4503">
                                <p className="leading-[20px]">9</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="border-0 border-[#f3f3f7] border-solid content-stretch flex flex-[1_0_0] h-full items-center min-h-[48px] min-w-[80px] px-[12px] py-[8px] relative" data-node-id="1:22215" data-name="table-cell-body">
                          <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-node-id="I1:22215;2985:32162" data-name="Content">
                            <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I1:22215;574:4502" data-name="Content">
                              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#1e2436] text-[14px] text-ellipsis" data-node-id="I1:22215;574:4503">
                                <p className="leading-[20px]">1</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="border-0 border-[#f3f3f7] border-solid content-stretch flex flex-[1_0_0] h-full items-center min-h-[48px] min-w-[120px] px-[12px] py-[8px] relative" data-node-id="1:22224" data-name="table-cell-body">
                          <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-node-id="I1:22224;2985:32162" data-name="Content">
                            <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I1:22224;574:4502" data-name="Content">
                              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#1e2436] text-[14px] text-ellipsis" data-node-id="I1:22224;574:4503">
                                <p className="leading-[20px]">周杰伦</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="border-0 border-[#f3f3f7] border-solid content-stretch flex flex-[1_0_0] h-full items-center min-h-[48px] min-w-[120px] px-[12px] py-[8px] relative" data-node-id="1:22225" data-name="table-cell-body">
                          <div className="content-center flex flex-[1_0_0] flex-wrap gap-y-[4px] h-full items-center min-w-px relative" data-node-id="I1:22225;366:246424" data-name="标签插槽">
                            <div className="bg-[#eef3ff] content-stretch flex gap-[4px] items-center px-[8px] py-px relative rounded-[9999px] shrink-0" data-node-id="I1:22225;430:252451" data-name="tag">
                              <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] not-italic relative shrink-0 text-[#3651b2] text-[12px] whitespace-nowrap" data-node-id="I1:22225;430:252454">
                                <p className="leading-[18px]">入驻签约</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="border-0 border-[#f3f3f7] border-solid content-stretch flex h-full items-center min-h-[48px] min-w-[100px] px-[12px] py-[8px] relative shrink-0 w-[168px]" data-node-id="1:22226" data-name="table-cell-body">
                          <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-node-id="I1:22226;2985:32163" data-name="Content">
                            <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I1:22226;1312:14702" data-name="Content">
                              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] min-w-px not-italic relative text-[#1e2436] text-[14px]" data-node-id="I1:22226;1312:14703">
                                <p className="leading-[20px]">2025-02-14 10:20:11</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="border-0 border-[#f3f3f7] border-solid content-stretch flex h-full items-center min-h-[48px] min-w-[100px] px-[12px] py-[8px] relative shrink-0 w-[168px]" data-node-id="1:22227" data-name="table-cell-body">
                          <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-node-id="I1:22227;2985:32163" data-name="Content">
                            <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I1:22227;1312:14702" data-name="Content">
                              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] min-w-px not-italic relative text-[#1e2436] text-[14px]" data-node-id="I1:22227;1312:14703">
                                <p className="leading-[20px]">2025-02-14 10:20:11</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="border-0 border-[#f3f3f7] border-solid content-stretch flex h-full items-center min-h-[48px] px-[12px] py-[8px] relative shrink-0" data-node-id="1:22232" data-name="table-cell-body">
                          <div className="content-stretch flex h-full items-center justify-end relative shrink-0" data-node-id="I1:22232;578:10532" data-name="button-group">
                            <div className="content-stretch flex gap-[12px] items-center justify-end relative shrink-0" data-node-id="I1:22232;578:10532;12640:3505" data-name="按钮布局插槽">
                              <div className="content-stretch flex items-center justify-center p-[6px] relative rounded-[6px] shrink-0" data-node-id="I1:22232;578:10532;12640:3505;1:22229" data-name="button">
                                <div className="relative shrink-0 size-[16px]" data-node-id="I1:22232;578:10532;12640:3505;1:22229;802:23041" data-name="common-linear-add">
                                  <MoreIcon />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Row>
                      <Row className="bg-white border-[#f3f3f7] border-b border-solid content-stretch flex items-start min-h-[44px] overflow-clip relative shrink-0 w-full">
                        <div className="border-[#f3f3f7] border-b border-solid content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-[48px] min-w-[240px] px-[12px] py-[8px] relative" data-node-id="1:22252" data-name="table-cell-body">
                          <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-node-id="I1:22252;2835:114404" data-name="内容插槽">
                            <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-node-id="I1:22252;2835:114404;1:22238" data-name="Content">
                              <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#1e2436] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="I1:22252;2835:114404;1:22239">
                                <p className="leading-[20px] overflow-hidden text-ellipsis">阿里巴巴网络技术有限公司</p>
                              </div>
                            </div>
                            <div className="content-center flex flex-wrap gap-[2px_6px] h-[20px] items-center relative shrink-0 w-full" data-node-id="I1:22252;2835:114404;1:22242" data-name="说明文字插槽">
                              <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#646e87] text-[12px] text-ellipsis whitespace-nowrap" data-node-id="I1:22252;2835:114404;1:22244">
                                <p className="leading-[18px] overflow-hidden text-ellipsis">客户数 4</p>
                              </div>
                              <div className="h-[10px] relative shrink-0 w-0" data-node-id="I1:22252;2835:114404;1:22245">
                                <div className="absolute inset-[0_-0.5px]">
                                  <img alt="" className="block max-w-none size-full" src={imgVector2} />
                                </div>
                              </div>
                              <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#646e87] text-[12px] text-ellipsis whitespace-nowrap" data-node-id="I1:22252;2835:114404;1:22248">
                                <p className="leading-[18px] overflow-hidden text-ellipsis">商户数 12</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="border-0 border-[#f3f3f7] border-solid content-stretch flex h-full items-center min-h-[48px] min-w-[90px] px-[12px] py-[8px] relative shrink-0 w-[90px]" data-node-id="1:22253" data-name="table-cell-body">
                          <div className="content-center flex flex-[1_0_0] flex-wrap gap-y-[4px] h-full items-center min-w-px relative" data-node-id="1:22254" data-name="标签插槽">
                            <Tag className="bg-[#eef2fe] border border-[#c7d6fe] border-solid content-stretch flex gap-[2px] items-center px-[6px] py-px relative rounded-[9999px] shrink-0" property1="Variant5" />
                          </div>
                        </div>
                        <div className="border-0 border-[#f3f3f7] border-solid content-stretch flex flex-[1_0_0] h-full items-center min-h-[48px] min-w-[80px] px-[12px] py-[8px] relative" data-node-id="1:22259" data-name="table-cell-body">
                          <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-node-id="I1:22259;2985:32162" data-name="Content">
                            <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I1:22259;574:4502" data-name="Content">
                              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#1e2436] text-[14px] text-ellipsis" data-node-id="I1:22259;574:4503">
                                <p className="leading-[20px]">9</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="border-0 border-[#f3f3f7] border-solid content-stretch flex flex-[1_0_0] h-full items-center min-h-[48px] min-w-[80px] px-[12px] py-[8px] relative" data-node-id="1:22260" data-name="table-cell-body">
                          <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-node-id="I1:22260;2985:32162" data-name="Content">
                            <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I1:22260;574:4502" data-name="Content">
                              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#1e2436] text-[14px] text-ellipsis" data-node-id="I1:22260;574:4503">
                                <p className="leading-[20px]">1</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="border-0 border-[#f3f3f7] border-solid content-stretch flex flex-[1_0_0] h-full items-center min-h-[48px] min-w-[120px] px-[12px] py-[8px] relative" data-node-id="1:22269" data-name="table-cell-body">
                          <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-node-id="I1:22269;2985:32162" data-name="Content">
                            <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I1:22269;574:4502" data-name="Content">
                              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#1e2436] text-[14px] text-ellipsis" data-node-id="I1:22269;574:4503">
                                <p className="leading-[20px]">周杰伦</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="border-0 border-[#f3f3f7] border-solid content-stretch flex flex-[1_0_0] h-full items-center min-h-[48px] min-w-[120px] px-[12px] py-[8px] relative" data-node-id="1:22270" data-name="table-cell-body">
                          <div className="content-center flex flex-[1_0_0] flex-wrap gap-y-[4px] h-full items-center min-w-px relative" data-node-id="I1:22270;366:246424" data-name="标签插槽">
                            <div className="bg-[#eef3ff] content-stretch flex gap-[4px] items-center px-[8px] py-px relative rounded-[9999px] shrink-0" data-node-id="I1:22270;430:252451" data-name="tag">
                              <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] not-italic relative shrink-0 text-[#3651b2] text-[12px] whitespace-nowrap" data-node-id="I1:22270;430:252454">
                                <p className="leading-[18px]">入驻签约</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="border-0 border-[#f3f3f7] border-solid content-stretch flex h-full items-center min-h-[48px] min-w-[100px] px-[12px] py-[8px] relative shrink-0 w-[168px]" data-node-id="1:22271" data-name="table-cell-body">
                          <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-node-id="I1:22271;2985:32163" data-name="Content">
                            <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I1:22271;1312:14702" data-name="Content">
                              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] min-w-px not-italic relative text-[#1e2436] text-[14px]" data-node-id="I1:22271;1312:14703">
                                <p className="leading-[20px]">2025-02-14 10:20:11</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="border-0 border-[#f3f3f7] border-solid content-stretch flex h-full items-center min-h-[48px] min-w-[100px] px-[12px] py-[8px] relative shrink-0 w-[168px]" data-node-id="1:22272" data-name="table-cell-body">
                          <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-node-id="I1:22272;2985:32163" data-name="Content">
                            <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I1:22272;1312:14702" data-name="Content">
                              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] min-w-px not-italic relative text-[#1e2436] text-[14px]" data-node-id="I1:22272;1312:14703">
                                <p className="leading-[20px]">2025-02-14 10:20:11</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="border-0 border-[#f3f3f7] border-solid content-stretch flex h-full items-center min-h-[48px] px-[12px] py-[8px] relative shrink-0" data-node-id="1:22277" data-name="table-cell-body">
                          <div className="content-stretch flex h-full items-center justify-end relative shrink-0" data-node-id="I1:22277;578:10532" data-name="button-group">
                            <div className="content-stretch flex gap-[12px] items-center justify-end relative shrink-0" data-node-id="I1:22277;578:10532;12640:3505" data-name="按钮布局插槽">
                              <div className="content-stretch flex items-center justify-center p-[6px] relative rounded-[6px] shrink-0" data-node-id="I1:22277;578:10532;12640:3505;1:22274" data-name="button">
                                <div className="relative shrink-0 size-[16px]" data-node-id="I1:22277;578:10532;12640:3505;1:22274;802:23041" data-name="common-linear-add">
                                  <MoreIcon />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Row>
                      <Row className="bg-white border-[#f3f3f7] border-b border-solid content-stretch flex items-start min-h-[44px] overflow-clip relative shrink-0 w-full">
                        <div className="border-[#f3f3f7] border-b border-solid content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-[48px] min-w-[240px] px-[12px] py-[8px] relative" data-node-id="1:22297" data-name="table-cell-body">
                          <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-node-id="I1:22297;2835:114404" data-name="内容插槽">
                            <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-node-id="I1:22297;2835:114404;1:22283" data-name="Content">
                              <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#1e2436] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="I1:22297;2835:114404;1:22284">
                                <p className="leading-[20px] overflow-hidden text-ellipsis">阿里巴巴网络技术有限公司</p>
                              </div>
                            </div>
                            <div className="content-center flex flex-wrap gap-[2px_6px] h-[20px] items-center relative shrink-0 w-full" data-node-id="I1:22297;2835:114404;1:22287" data-name="说明文字插槽">
                              <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#646e87] text-[12px] text-ellipsis whitespace-nowrap" data-node-id="I1:22297;2835:114404;1:22289">
                                <p className="leading-[18px] overflow-hidden text-ellipsis">客户数 4</p>
                              </div>
                              <div className="h-[10px] relative shrink-0 w-0" data-node-id="I1:22297;2835:114404;1:22290">
                                <div className="absolute inset-[0_-0.5px]">
                                  <img alt="" className="block max-w-none size-full" src={imgVector2} />
                                </div>
                              </div>
                              <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#646e87] text-[12px] text-ellipsis whitespace-nowrap" data-node-id="I1:22297;2835:114404;1:22293">
                                <p className="leading-[18px] overflow-hidden text-ellipsis">商户数 12</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="border-0 border-[#f3f3f7] border-solid content-stretch flex h-full items-center min-h-[48px] min-w-[90px] px-[12px] py-[8px] relative shrink-0 w-[90px]" data-node-id="1:22298" data-name="table-cell-body">
                          <div className="content-center flex flex-[1_0_0] flex-wrap gap-y-[4px] h-full items-center min-w-px relative" data-node-id="1:22299" data-name="标签插槽">
                            <Tag className="bg-[#eef2fe] border border-[#c7d6fe] border-solid content-stretch flex gap-[2px] items-center px-[6px] py-px relative rounded-[9999px] shrink-0" property1="Variant5" />
                          </div>
                        </div>
                        <div className="border-0 border-[#f3f3f7] border-solid content-stretch flex flex-[1_0_0] h-full items-center min-h-[48px] min-w-[80px] px-[12px] py-[8px] relative" data-node-id="1:22304" data-name="table-cell-body">
                          <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-node-id="I1:22304;2985:32162" data-name="Content">
                            <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I1:22304;574:4502" data-name="Content">
                              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#1e2436] text-[14px] text-ellipsis" data-node-id="I1:22304;574:4503">
                                <p className="leading-[20px]">9</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="border-0 border-[#f3f3f7] border-solid content-stretch flex flex-[1_0_0] h-full items-center min-h-[48px] min-w-[80px] px-[12px] py-[8px] relative" data-node-id="1:22305" data-name="table-cell-body">
                          <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-node-id="I1:22305;2985:32162" data-name="Content">
                            <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I1:22305;574:4502" data-name="Content">
                              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#1e2436] text-[14px] text-ellipsis" data-node-id="I1:22305;574:4503">
                                <p className="leading-[20px]">1</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="border-0 border-[#f3f3f7] border-solid content-stretch flex flex-[1_0_0] h-full items-center min-h-[48px] min-w-[120px] px-[12px] py-[8px] relative" data-node-id="1:22314" data-name="table-cell-body">
                          <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-node-id="I1:22314;2985:32162" data-name="Content">
                            <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I1:22314;574:4502" data-name="Content">
                              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#1e2436] text-[14px] text-ellipsis" data-node-id="I1:22314;574:4503">
                                <p className="leading-[20px]">周杰伦</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="border-0 border-[#f3f3f7] border-solid content-stretch flex flex-[1_0_0] h-full items-center min-h-[48px] min-w-[120px] px-[12px] py-[8px] relative" data-node-id="1:22315" data-name="table-cell-body">
                          <div className="content-center flex flex-[1_0_0] flex-wrap gap-y-[4px] h-full items-center min-w-px relative" data-node-id="I1:22315;366:246424" data-name="标签插槽">
                            <div className="bg-[#eef3ff] content-stretch flex gap-[4px] items-center px-[8px] py-px relative rounded-[9999px] shrink-0" data-node-id="I1:22315;430:252451" data-name="tag">
                              <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] not-italic relative shrink-0 text-[#3651b2] text-[12px] whitespace-nowrap" data-node-id="I1:22315;430:252454">
                                <p className="leading-[18px]">入驻签约</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="border-0 border-[#f3f3f7] border-solid content-stretch flex h-full items-center min-h-[48px] min-w-[100px] px-[12px] py-[8px] relative shrink-0 w-[168px]" data-node-id="1:22316" data-name="table-cell-body">
                          <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-node-id="I1:22316;2985:32163" data-name="Content">
                            <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I1:22316;1312:14702" data-name="Content">
                              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] min-w-px not-italic relative text-[#1e2436] text-[14px]" data-node-id="I1:22316;1312:14703">
                                <p className="leading-[20px]">2025-02-14 10:20:11</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="border-0 border-[#f3f3f7] border-solid content-stretch flex h-full items-center min-h-[48px] min-w-[100px] px-[12px] py-[8px] relative shrink-0 w-[168px]" data-node-id="1:22317" data-name="table-cell-body">
                          <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-node-id="I1:22317;2985:32163" data-name="Content">
                            <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I1:22317;1312:14702" data-name="Content">
                              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] min-w-px not-italic relative text-[#1e2436] text-[14px]" data-node-id="I1:22317;1312:14703">
                                <p className="leading-[20px]">2025-02-14 10:20:11</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="border-0 border-[#f3f3f7] border-solid content-stretch flex h-full items-center min-h-[48px] px-[12px] py-[8px] relative shrink-0" data-node-id="1:22322" data-name="table-cell-body">
                          <div className="content-stretch flex h-full items-center justify-end relative shrink-0" data-node-id="I1:22322;578:10532" data-name="button-group">
                            <div className="content-stretch flex gap-[12px] items-center justify-end relative shrink-0" data-node-id="I1:22322;578:10532;12640:3505" data-name="按钮布局插槽">
                              <div className="content-stretch flex items-center justify-center p-[6px] relative rounded-[6px] shrink-0" data-node-id="I1:22322;578:10532;12640:3505;1:22319" data-name="button">
                                <div className="relative shrink-0 size-[16px]" data-node-id="I1:22322;578:10532;12640:3505;1:22319;802:23041" data-name="common-linear-add">
                                  <MoreIcon />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Row>
                      <Row className="bg-white border-[#f3f3f7] border-b border-solid content-stretch flex items-start min-h-[44px] overflow-clip relative shrink-0 w-full">
                        <div className="border-[#f3f3f7] border-b border-solid content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-[48px] min-w-[240px] px-[12px] py-[8px] relative" data-node-id="1:22342" data-name="table-cell-body">
                          <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-node-id="I1:22342;2835:114404" data-name="内容插槽">
                            <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-node-id="I1:22342;2835:114404;1:22328" data-name="Content">
                              <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#1e2436] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="I1:22342;2835:114404;1:22329">
                                <p className="leading-[20px] overflow-hidden text-ellipsis">阿里巴巴网络技术有限公司</p>
                              </div>
                            </div>
                            <div className="content-center flex flex-wrap gap-[2px_6px] h-[20px] items-center relative shrink-0 w-full" data-node-id="I1:22342;2835:114404;1:22332" data-name="说明文字插槽">
                              <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#646e87] text-[12px] text-ellipsis whitespace-nowrap" data-node-id="I1:22342;2835:114404;1:22334">
                                <p className="leading-[18px] overflow-hidden text-ellipsis">客户数 4</p>
                              </div>
                              <div className="h-[10px] relative shrink-0 w-0" data-node-id="I1:22342;2835:114404;1:22335">
                                <div className="absolute inset-[0_-0.5px]">
                                  <img alt="" className="block max-w-none size-full" src={imgVector2} />
                                </div>
                              </div>
                              <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#646e87] text-[12px] text-ellipsis whitespace-nowrap" data-node-id="I1:22342;2835:114404;1:22338">
                                <p className="leading-[18px] overflow-hidden text-ellipsis">商户数 12</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="border-0 border-[#f3f3f7] border-solid content-stretch flex h-full items-center min-h-[48px] min-w-[90px] px-[12px] py-[8px] relative shrink-0 w-[90px]" data-node-id="1:22343" data-name="table-cell-body">
                          <div className="content-center flex flex-[1_0_0] flex-wrap gap-y-[4px] h-full items-center min-w-px relative" data-node-id="1:22344" data-name="标签插槽">
                            <Tag className="bg-[#eef2fe] border border-[#c7d6fe] border-solid content-stretch flex gap-[2px] items-center px-[6px] py-px relative rounded-[9999px] shrink-0" property1="Variant5" />
                          </div>
                        </div>
                        <div className="border-0 border-[#f3f3f7] border-solid content-stretch flex flex-[1_0_0] h-full items-center min-h-[48px] min-w-[80px] px-[12px] py-[8px] relative" data-node-id="1:22349" data-name="table-cell-body">
                          <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-node-id="I1:22349;2985:32162" data-name="Content">
                            <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I1:22349;574:4502" data-name="Content">
                              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#1e2436] text-[14px] text-ellipsis" data-node-id="I1:22349;574:4503">
                                <p className="leading-[20px]">9</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="border-0 border-[#f3f3f7] border-solid content-stretch flex flex-[1_0_0] h-full items-center min-h-[48px] min-w-[80px] px-[12px] py-[8px] relative" data-node-id="1:22350" data-name="table-cell-body">
                          <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-node-id="I1:22350;2985:32162" data-name="Content">
                            <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I1:22350;574:4502" data-name="Content">
                              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#1e2436] text-[14px] text-ellipsis" data-node-id="I1:22350;574:4503">
                                <p className="leading-[20px]">1</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="border-0 border-[#f3f3f7] border-solid content-stretch flex flex-[1_0_0] h-full items-center min-h-[48px] min-w-[120px] px-[12px] py-[8px] relative" data-node-id="1:22359" data-name="table-cell-body">
                          <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-node-id="I1:22359;2985:32162" data-name="Content">
                            <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I1:22359;574:4502" data-name="Content">
                              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#1e2436] text-[14px] text-ellipsis" data-node-id="I1:22359;574:4503">
                                <p className="leading-[20px]">周杰伦</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="border-0 border-[#f3f3f7] border-solid content-stretch flex flex-[1_0_0] h-full items-center min-h-[48px] min-w-[120px] px-[12px] py-[8px] relative" data-node-id="1:22360" data-name="table-cell-body">
                          <div className="content-center flex flex-[1_0_0] flex-wrap gap-y-[4px] h-full items-center min-w-px relative" data-node-id="I1:22360;366:246428" data-name="标签插槽">
                            <div className="bg-[#eefbf5] content-stretch flex gap-[4px] items-center px-[8px] py-px relative rounded-[9999px] shrink-0" data-node-id="I1:22360;430:252457" data-name="tag">
                              <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] not-italic relative shrink-0 text-[#246634] text-[12px] whitespace-nowrap" data-node-id="I1:22360;430:252460">
                                <p className="leading-[18px]">运营增长</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="border-0 border-[#f3f3f7] border-solid content-stretch flex h-full items-center min-h-[48px] min-w-[100px] px-[12px] py-[8px] relative shrink-0 w-[168px]" data-node-id="1:22361" data-name="table-cell-body">
                          <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-node-id="I1:22361;2985:32163" data-name="Content">
                            <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I1:22361;1312:14702" data-name="Content">
                              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] min-w-px not-italic relative text-[#1e2436] text-[14px]" data-node-id="I1:22361;1312:14703">
                                <p className="leading-[20px]">2025-02-14 10:20:11</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="border-0 border-[#f3f3f7] border-solid content-stretch flex h-full items-center min-h-[48px] min-w-[100px] px-[12px] py-[8px] relative shrink-0 w-[168px]" data-node-id="1:22362" data-name="table-cell-body">
                          <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-node-id="I1:22362;2985:32163" data-name="Content">
                            <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I1:22362;1312:14702" data-name="Content">
                              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] min-w-px not-italic relative text-[#1e2436] text-[14px]" data-node-id="I1:22362;1312:14703">
                                <p className="leading-[20px]">2025-02-14 10:20:11</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="border-0 border-[#f3f3f7] border-solid content-stretch flex h-[56px] items-center min-h-[48px] px-[12px] py-[8px] relative shrink-0" data-node-id="1:22367" data-name="table-cell-body">
                          <div className="content-stretch flex h-full items-center justify-end relative shrink-0" data-node-id="I1:22367;578:10532" data-name="button-group">
                            <div className="content-stretch flex gap-[12px] items-center justify-end relative shrink-0" data-node-id="I1:22367;578:10532;12640:3505" data-name="按钮布局插槽">
                              <div className="content-stretch flex items-center justify-center p-[6px] relative rounded-[6px] shrink-0" data-node-id="I1:22367;578:10532;12640:3505;1:22364" data-name="button">
                                <div className="relative shrink-0 size-[16px]" data-node-id="I1:22367;578:10532;12640:3505;1:22364;802:23041" data-name="common-linear-add">
                                  <MoreIcon />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Row>
                      <Row className="bg-white border-[#f3f3f7] border-b border-solid content-stretch flex items-start min-h-[44px] overflow-clip relative shrink-0 w-full">
                        <div className="border-[#f3f3f7] border-b border-solid content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-[48px] min-w-[240px] px-[12px] py-[8px] relative" data-node-id="1:22387" data-name="table-cell-body">
                          <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-node-id="I1:22387;2835:114404" data-name="内容插槽">
                            <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-node-id="I1:22387;2835:114404;1:22373" data-name="Content">
                              <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#1e2436] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="I1:22387;2835:114404;1:22374">
                                <p className="leading-[20px] overflow-hidden text-ellipsis">阿里巴巴网络技术有限公司</p>
                              </div>
                            </div>
                            <div className="content-center flex flex-wrap gap-[2px_6px] h-[20px] items-center relative shrink-0 w-full" data-node-id="I1:22387;2835:114404;1:22377" data-name="说明文字插槽">
                              <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#646e87] text-[12px] text-ellipsis whitespace-nowrap" data-node-id="I1:22387;2835:114404;1:22379">
                                <p className="leading-[18px] overflow-hidden text-ellipsis">客户数 4</p>
                              </div>
                              <div className="h-[10px] relative shrink-0 w-0" data-node-id="I1:22387;2835:114404;1:22380">
                                <div className="absolute inset-[0_-0.5px]">
                                  <img alt="" className="block max-w-none size-full" src={imgVector2} />
                                </div>
                              </div>
                              <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#646e87] text-[12px] text-ellipsis whitespace-nowrap" data-node-id="I1:22387;2835:114404;1:22383">
                                <p className="leading-[18px] overflow-hidden text-ellipsis">商户数 12</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="border-0 border-[#f3f3f7] border-solid content-stretch flex h-full items-center min-h-[48px] min-w-[90px] px-[12px] py-[8px] relative shrink-0 w-[90px]" data-node-id="1:22388" data-name="table-cell-body">
                          <div className="content-center flex flex-[1_0_0] flex-wrap gap-y-[4px] h-full items-center min-w-px relative" data-node-id="1:22389" data-name="标签插槽">
                            <Tag className="bg-[#fdf0e9] border border-[#fadecf] border-solid content-stretch flex gap-[2px] items-center px-[6px] py-px relative rounded-[9999px] shrink-0" />
                          </div>
                        </div>
                        <div className="border-0 border-[#f3f3f7] border-solid content-stretch flex flex-[1_0_0] h-full items-center min-h-[48px] min-w-[80px] px-[12px] py-[8px] relative" data-node-id="1:22394" data-name="table-cell-body">
                          <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-node-id="I1:22394;2985:32162" data-name="Content">
                            <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I1:22394;574:4502" data-name="Content">
                              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#1e2436] text-[14px] text-ellipsis" data-node-id="I1:22394;574:4503">
                                <p className="leading-[20px]">9</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="border-0 border-[#f3f3f7] border-solid content-stretch flex flex-[1_0_0] h-full items-center min-h-[48px] min-w-[80px] px-[12px] py-[8px] relative" data-node-id="1:22395" data-name="table-cell-body">
                          <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-node-id="I1:22395;2985:32162" data-name="Content">
                            <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I1:22395;574:4502" data-name="Content">
                              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#1e2436] text-[14px] text-ellipsis" data-node-id="I1:22395;574:4503">
                                <p className="leading-[20px]">1</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="border-0 border-[#f3f3f7] border-solid content-stretch flex flex-[1_0_0] h-full items-center min-h-[48px] min-w-[120px] px-[12px] py-[8px] relative" data-node-id="1:22404" data-name="table-cell-body">
                          <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-node-id="I1:22404;2985:32162" data-name="Content">
                            <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I1:22404;574:4502" data-name="Content">
                              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#1e2436] text-[14px] text-ellipsis" data-node-id="I1:22404;574:4503">
                                <p className="leading-[20px]">王小二</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="border-0 border-[#f3f3f7] border-solid content-stretch flex flex-[1_0_0] h-full items-center min-h-[48px] min-w-[120px] px-[12px] py-[8px] relative" data-node-id="1:22405" data-name="table-cell-body">
                          <div className="content-center flex flex-[1_0_0] flex-wrap gap-y-[4px] h-full items-center min-w-px relative" data-node-id="I1:22405;366:246432" data-name="标签插槽">
                            <div className="bg-[#fff1f3] content-stretch flex gap-[4px] items-center px-[8px] py-px relative rounded-[9999px] shrink-0" data-node-id="I1:22405;430:252463" data-name="tag">
                              <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] not-italic relative shrink-0 text-[#992e3e] text-[12px] whitespace-nowrap" data-node-id="I1:22405;430:252466">
                                <p className="leading-[18px]">沉睡流失</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="border-0 border-[#f3f3f7] border-solid content-stretch flex h-full items-center min-h-[48px] min-w-[100px] px-[12px] py-[8px] relative shrink-0 w-[168px]" data-node-id="1:22406" data-name="table-cell-body">
                          <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-node-id="I1:22406;2985:32163" data-name="Content">
                            <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I1:22406;1312:14702" data-name="Content">
                              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] min-w-px not-italic relative text-[#1e2436] text-[14px]" data-node-id="I1:22406;1312:14703">
                                <p className="leading-[20px]">2025-02-14 10:20:11</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="border-0 border-[#f3f3f7] border-solid content-stretch flex h-full items-center min-h-[48px] min-w-[100px] px-[12px] py-[8px] relative shrink-0 w-[168px]" data-node-id="1:22407" data-name="table-cell-body">
                          <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-node-id="I1:22407;2985:32163" data-name="Content">
                            <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I1:22407;1312:14702" data-name="Content">
                              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] min-w-px not-italic relative text-[#1e2436] text-[14px]" data-node-id="I1:22407;1312:14703">
                                <p className="leading-[20px]">2025-02-14 10:20:11</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="border-0 border-[#f3f3f7] border-solid content-stretch flex h-full items-center min-h-[48px] px-[12px] py-[8px] relative shrink-0" data-node-id="1:22412" data-name="table-cell-body">
                          <div className="content-stretch flex h-full items-center justify-end relative shrink-0" data-node-id="I1:22412;578:10532" data-name="button-group">
                            <div className="content-stretch flex gap-[12px] items-center justify-end relative shrink-0" data-node-id="I1:22412;578:10532;12640:3505" data-name="按钮布局插槽">
                              <div className="content-stretch flex items-center justify-center p-[6px] relative rounded-[6px] shrink-0" data-node-id="I1:22412;578:10532;12640:3505;1:22409" data-name="button">
                                <div className="relative shrink-0 size-[16px]" data-node-id="I1:22412;578:10532;12640:3505;1:22409;802:23041" data-name="common-linear-add">
                                  <MoreIcon />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Row>
                      <Row className="bg-white border-[#f3f3f7] border-b border-solid content-stretch flex items-start min-h-[44px] overflow-clip relative shrink-0 w-full">
                        <div className="border-[#f3f3f7] border-b border-solid content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-[48px] min-w-[240px] px-[12px] py-[8px] relative" data-node-id="1:22432" data-name="table-cell-body">
                          <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-node-id="I1:22432;2835:114404" data-name="内容插槽">
                            <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-node-id="I1:22432;2835:114404;1:22418" data-name="Content">
                              <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#1e2436] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="I1:22432;2835:114404;1:22419">
                                <p className="leading-[20px] overflow-hidden text-ellipsis">阿里巴巴网络技术有限公司</p>
                              </div>
                            </div>
                            <div className="content-center flex flex-wrap gap-[2px_6px] h-[20px] items-center relative shrink-0 w-full" data-node-id="I1:22432;2835:114404;1:22422" data-name="说明文字插槽">
                              <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#646e87] text-[12px] text-ellipsis whitespace-nowrap" data-node-id="I1:22432;2835:114404;1:22424">
                                <p className="leading-[18px] overflow-hidden text-ellipsis">客户数 4</p>
                              </div>
                              <div className="h-[10px] relative shrink-0 w-0" data-node-id="I1:22432;2835:114404;1:22425">
                                <div className="absolute inset-[0_-0.5px]">
                                  <img alt="" className="block max-w-none size-full" src={imgVector2} />
                                </div>
                              </div>
                              <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#646e87] text-[12px] text-ellipsis whitespace-nowrap" data-node-id="I1:22432;2835:114404;1:22428">
                                <p className="leading-[18px] overflow-hidden text-ellipsis">商户数 12</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="border-0 border-[#f3f3f7] border-solid content-stretch flex h-full items-center min-h-[48px] min-w-[90px] px-[12px] py-[8px] relative shrink-0 w-[90px]" data-node-id="1:22433" data-name="table-cell-body">
                          <div className="content-center flex flex-[1_0_0] flex-wrap gap-y-[4px] h-full items-center min-w-px relative" data-node-id="1:22434" data-name="标签插槽">
                            <Tag className="bg-[#fdf0e9] border border-[#fadecf] border-solid content-stretch flex gap-[2px] items-center px-[6px] py-px relative rounded-[9999px] shrink-0" />
                          </div>
                        </div>
                        <div className="border-0 border-[#f3f3f7] border-solid content-stretch flex flex-[1_0_0] h-full items-center min-h-[48px] min-w-[80px] px-[12px] py-[8px] relative" data-node-id="1:22439" data-name="table-cell-body">
                          <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-node-id="I1:22439;2985:32162" data-name="Content">
                            <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I1:22439;574:4502" data-name="Content">
                              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#1e2436] text-[14px] text-ellipsis" data-node-id="I1:22439;574:4503">
                                <p className="leading-[20px]">9</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="border-0 border-[#f3f3f7] border-solid content-stretch flex flex-[1_0_0] h-full items-center min-h-[48px] min-w-[80px] px-[12px] py-[8px] relative" data-node-id="1:22440" data-name="table-cell-body">
                          <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-node-id="I1:22440;2985:32162" data-name="Content">
                            <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I1:22440;574:4502" data-name="Content">
                              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#1e2436] text-[14px] text-ellipsis" data-node-id="I1:22440;574:4503">
                                <p className="leading-[20px]">1</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="border-0 border-[#f3f3f7] border-solid content-stretch flex flex-[1_0_0] h-full items-center min-h-[48px] min-w-[120px] px-[12px] py-[8px] relative" data-node-id="1:22449" data-name="table-cell-body">
                          <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-node-id="I1:22449;2985:32162" data-name="Content">
                            <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I1:22449;574:4502" data-name="Content">
                              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#1e2436] text-[14px] text-ellipsis" data-node-id="I1:22449;574:4503">
                                <p className="leading-[20px]">蔡徐坤</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="border-0 border-[#f3f3f7] border-solid content-stretch flex flex-[1_0_0] h-full items-center min-h-[48px] min-w-[120px] px-[12px] py-[8px] relative" data-node-id="1:22450" data-name="table-cell-body">
                          <div className="content-center flex flex-[1_0_0] flex-wrap gap-y-[4px] h-full items-center min-w-px relative" data-node-id="I1:22450;366:246420" data-name="标签插槽">
                            <div className="bg-[#fff8e8] content-stretch flex gap-[4px] items-center px-[8px] py-px relative rounded-[9999px] shrink-0" data-node-id="I1:22450;430:252445" data-name="tag">
                              <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] not-italic relative shrink-0 text-[#805d26] text-[12px] whitespace-nowrap" data-node-id="I1:22450;430:252448">
                                <p className="leading-[18px]">意向沟通</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="border-0 border-[#f3f3f7] border-solid content-stretch flex h-full items-center min-h-[48px] min-w-[100px] px-[12px] py-[8px] relative shrink-0 w-[168px]" data-node-id="1:22451" data-name="table-cell-body">
                          <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-node-id="I1:22451;2985:32163" data-name="Content">
                            <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I1:22451;1312:14702" data-name="Content">
                              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] min-w-px not-italic relative text-[#1e2436] text-[14px]" data-node-id="I1:22451;1312:14703">
                                <p className="leading-[20px]">2025-02-14 10:20:11</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="border-0 border-[#f3f3f7] border-solid content-stretch flex h-full items-center min-h-[48px] min-w-[100px] px-[12px] py-[8px] relative shrink-0 w-[168px]" data-node-id="1:22452" data-name="table-cell-body">
                          <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-node-id="I1:22452;2985:32163" data-name="Content">
                            <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I1:22452;1312:14702" data-name="Content">
                              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] min-w-px not-italic relative text-[#1e2436] text-[14px]" data-node-id="I1:22452;1312:14703">
                                <p className="leading-[20px]">2025-02-14 10:20:11</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="border-0 border-[#f3f3f7] border-solid content-stretch flex h-full items-center min-h-[48px] px-[12px] py-[8px] relative shrink-0" data-node-id="1:22457" data-name="table-cell-body">
                          <div className="content-stretch flex h-full items-center justify-end relative shrink-0" data-node-id="I1:22457;578:10532" data-name="button-group">
                            <div className="content-stretch flex gap-[12px] items-center justify-end relative shrink-0" data-node-id="I1:22457;578:10532;12640:3505" data-name="按钮布局插槽">
                              <div className="content-stretch flex items-center justify-center p-[6px] relative rounded-[6px] shrink-0" data-node-id="I1:22457;578:10532;12640:3505;1:22454" data-name="button">
                                <div className="relative shrink-0 size-[16px]" data-node-id="I1:22457;578:10532;12640:3505;1:22454;802:23041" data-name="common-linear-add">
                                  <MoreIcon />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Row>
                      <Row className="bg-white border-[#f3f3f7] border-b border-solid content-stretch flex items-start min-h-[44px] overflow-clip relative shrink-0 w-full">
                        <div className="border-[#f3f3f7] border-b border-solid content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-[48px] min-w-[240px] px-[12px] py-[8px] relative" data-node-id="1:22477" data-name="table-cell-body">
                          <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-node-id="I1:22477;2835:114404" data-name="内容插槽">
                            <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-node-id="I1:22477;2835:114404;1:22463" data-name="Content">
                              <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#1e2436] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="I1:22477;2835:114404;1:22464">
                                <p className="leading-[20px] overflow-hidden text-ellipsis">阿里巴巴网络技术有限公司</p>
                              </div>
                            </div>
                            <div className="content-center flex flex-wrap gap-[2px_6px] h-[20px] items-center relative shrink-0 w-full" data-node-id="I1:22477;2835:114404;1:22467" data-name="说明文字插槽">
                              <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#646e87] text-[12px] text-ellipsis whitespace-nowrap" data-node-id="I1:22477;2835:114404;1:22469">
                                <p className="leading-[18px] overflow-hidden text-ellipsis">客户数 4</p>
                              </div>
                              <div className="h-[10px] relative shrink-0 w-0" data-node-id="I1:22477;2835:114404;1:22470">
                                <div className="absolute inset-[0_-0.5px]">
                                  <img alt="" className="block max-w-none size-full" src={imgVector2} />
                                </div>
                              </div>
                              <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#646e87] text-[12px] text-ellipsis whitespace-nowrap" data-node-id="I1:22477;2835:114404;1:22473">
                                <p className="leading-[18px] overflow-hidden text-ellipsis">商户数 12</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="border-0 border-[#f3f3f7] border-solid content-stretch flex h-full items-center min-h-[48px] min-w-[90px] px-[12px] py-[8px] relative shrink-0 w-[90px]" data-node-id="1:22478" data-name="table-cell-body">
                          <div className="content-center flex flex-[1_0_0] flex-wrap gap-y-[4px] h-full items-center min-w-px relative" data-node-id="1:22479" data-name="标签插槽">
                            <Tag className="bg-[#fdf0e9] border border-[#fadecf] border-solid content-stretch flex gap-[2px] items-center px-[6px] py-px relative rounded-[9999px] shrink-0" />
                          </div>
                        </div>
                        <div className="border-0 border-[#f3f3f7] border-solid content-stretch flex flex-[1_0_0] h-full items-center min-h-[48px] min-w-[80px] px-[12px] py-[8px] relative" data-node-id="1:22484" data-name="table-cell-body">
                          <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-node-id="I1:22484;2985:32162" data-name="Content">
                            <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I1:22484;574:4502" data-name="Content">
                              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#1e2436] text-[14px] text-ellipsis" data-node-id="I1:22484;574:4503">
                                <p className="leading-[20px]">9</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="border-0 border-[#f3f3f7] border-solid content-stretch flex flex-[1_0_0] h-full items-center min-h-[48px] min-w-[80px] px-[12px] py-[8px] relative" data-node-id="1:22485" data-name="table-cell-body">
                          <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-node-id="I1:22485;2985:32162" data-name="Content">
                            <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I1:22485;574:4502" data-name="Content">
                              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#1e2436] text-[14px] text-ellipsis" data-node-id="I1:22485;574:4503">
                                <p className="leading-[20px]">1</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="border-0 border-[#f3f3f7] border-solid content-stretch flex flex-[1_0_0] h-full items-center min-h-[48px] min-w-[120px] px-[12px] py-[8px] relative" data-node-id="1:22494" data-name="table-cell-body">
                          <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-node-id="I1:22494;2985:32162" data-name="Content">
                            <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I1:22494;574:4502" data-name="Content">
                              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#1e2436] text-[14px] text-ellipsis" data-node-id="I1:22494;574:4503">
                                <p className="leading-[20px]">周杰伦</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="border-0 border-[#f3f3f7] border-solid content-stretch flex flex-[1_0_0] h-full items-center min-h-[48px] min-w-[120px] px-[12px] py-[8px] relative" data-node-id="1:22495" data-name="table-cell-body">
                          <div className="content-center flex flex-[1_0_0] flex-wrap gap-y-[4px] h-full items-center min-w-px relative" data-node-id="I1:22495;366:246428" data-name="标签插槽">
                            <div className="bg-[#eefbf5] content-stretch flex gap-[4px] items-center px-[8px] py-px relative rounded-[9999px] shrink-0" data-node-id="I1:22495;430:252457" data-name="tag">
                              <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] not-italic relative shrink-0 text-[#246634] text-[12px] whitespace-nowrap" data-node-id="I1:22495;430:252460">
                                <p className="leading-[18px]">运营增长</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="border-0 border-[#f3f3f7] border-solid content-stretch flex h-full items-center min-h-[48px] min-w-[100px] px-[12px] py-[8px] relative shrink-0 w-[168px]" data-node-id="1:22496" data-name="table-cell-body">
                          <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-node-id="I1:22496;2985:32163" data-name="Content">
                            <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I1:22496;1312:14702" data-name="Content">
                              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] min-w-px not-italic relative text-[#1e2436] text-[14px]" data-node-id="I1:22496;1312:14703">
                                <p className="leading-[20px]">2025-02-14 10:20:11</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="border-0 border-[#f3f3f7] border-solid content-stretch flex h-full items-center min-h-[48px] min-w-[100px] px-[12px] py-[8px] relative shrink-0 w-[168px]" data-node-id="1:22497" data-name="table-cell-body">
                          <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-node-id="I1:22497;2985:32163" data-name="Content">
                            <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I1:22497;1312:14702" data-name="Content">
                              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] min-w-px not-italic relative text-[#1e2436] text-[14px]" data-node-id="I1:22497;1312:14703">
                                <p className="leading-[20px]">2025-02-14 10:20:11</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="border-0 border-[#f3f3f7] border-solid content-stretch flex h-full items-center min-h-[48px] px-[12px] py-[8px] relative shrink-0" data-node-id="1:22502" data-name="table-cell-body">
                          <div className="content-stretch flex h-full items-center justify-end relative shrink-0" data-node-id="I1:22502;578:10532" data-name="button-group">
                            <div className="content-stretch flex gap-[12px] items-center justify-end relative shrink-0" data-node-id="I1:22502;578:10532;12640:3505" data-name="按钮布局插槽">
                              <div className="content-stretch flex items-center justify-center p-[6px] relative rounded-[6px] shrink-0" data-node-id="I1:22502;578:10532;12640:3505;1:22499" data-name="button">
                                <div className="relative shrink-0 size-[16px]" data-node-id="I1:22502;578:10532;12640:3505;1:22499;802:23041" data-name="common-linear-add">
                                  <MoreIcon />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Row>
                      <Row className="bg-white border-[#f3f3f7] border-b border-solid content-stretch flex items-start min-h-[44px] overflow-clip relative shrink-0 w-full">
                        <div className="border-[#f3f3f7] border-b border-solid content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-[48px] min-w-[240px] px-[12px] py-[8px] relative" data-node-id="1:22522" data-name="table-cell-body">
                          <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-node-id="I1:22522;2835:114404" data-name="内容插槽">
                            <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-node-id="I1:22522;2835:114404;1:22508" data-name="Content">
                              <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#1e2436] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="I1:22522;2835:114404;1:22509">
                                <p className="leading-[20px] overflow-hidden text-ellipsis">阿里巴巴网络技术有限公司</p>
                              </div>
                            </div>
                            <div className="content-center flex flex-wrap gap-[2px_6px] h-[20px] items-center relative shrink-0 w-full" data-node-id="I1:22522;2835:114404;1:22512" data-name="说明文字插槽">
                              <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#646e87] text-[12px] text-ellipsis whitespace-nowrap" data-node-id="I1:22522;2835:114404;1:22514">
                                <p className="leading-[18px] overflow-hidden text-ellipsis">客户数 4</p>
                              </div>
                              <div className="h-[10px] relative shrink-0 w-0" data-node-id="I1:22522;2835:114404;1:22515">
                                <div className="absolute inset-[0_-0.5px]">
                                  <img alt="" className="block max-w-none size-full" src={imgVector2} />
                                </div>
                              </div>
                              <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#646e87] text-[12px] text-ellipsis whitespace-nowrap" data-node-id="I1:22522;2835:114404;1:22518">
                                <p className="leading-[18px] overflow-hidden text-ellipsis">商户数 12</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="border-0 border-[#f3f3f7] border-solid content-stretch flex h-full items-center min-h-[48px] min-w-[90px] px-[12px] py-[8px] relative shrink-0 w-[90px]" data-node-id="1:22523" data-name="table-cell-body">
                          <div className="content-center flex flex-[1_0_0] flex-wrap gap-y-[4px] h-full items-center min-w-px relative" data-node-id="1:22524" data-name="标签插槽">
                            <Tag className="bg-[#fdf0e9] border border-[#fadecf] border-solid content-stretch flex gap-[2px] items-center px-[6px] py-px relative rounded-[9999px] shrink-0" />
                          </div>
                        </div>
                        <div className="border-0 border-[#f3f3f7] border-solid content-stretch flex flex-[1_0_0] h-full items-center min-h-[48px] min-w-[80px] px-[12px] py-[8px] relative" data-node-id="1:22529" data-name="table-cell-body">
                          <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-node-id="I1:22529;2985:32162" data-name="Content">
                            <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I1:22529;574:4502" data-name="Content">
                              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#1e2436] text-[14px] text-ellipsis" data-node-id="I1:22529;574:4503">
                                <p className="leading-[20px]">9</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="border-0 border-[#f3f3f7] border-solid content-stretch flex flex-[1_0_0] h-full items-center min-h-[48px] min-w-[80px] px-[12px] py-[8px] relative" data-node-id="1:22530" data-name="table-cell-body">
                          <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-node-id="I1:22530;2985:32162" data-name="Content">
                            <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I1:22530;574:4502" data-name="Content">
                              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#1e2436] text-[14px] text-ellipsis" data-node-id="I1:22530;574:4503">
                                <p className="leading-[20px]">1</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="border-0 border-[#f3f3f7] border-solid content-stretch flex flex-[1_0_0] h-full items-center min-h-[48px] min-w-[120px] px-[12px] py-[8px] relative" data-node-id="1:22539" data-name="table-cell-body">
                          <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-node-id="I1:22539;2985:32162" data-name="Content">
                            <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I1:22539;574:4502" data-name="Content">
                              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#1e2436] text-[14px] text-ellipsis" data-node-id="I1:22539;574:4503">
                                <p className="leading-[20px]">周杰伦</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="border-0 border-[#f3f3f7] border-solid content-stretch flex flex-[1_0_0] h-full items-center min-h-[48px] min-w-[120px] px-[12px] py-[8px] relative" data-node-id="1:22540" data-name="table-cell-body">
                          <div className="content-center flex flex-[1_0_0] flex-wrap gap-y-[4px] h-full items-center min-w-px relative" data-node-id="I1:22540;366:246428" data-name="标签插槽">
                            <div className="bg-[#eefbf5] content-stretch flex gap-[4px] items-center px-[8px] py-px relative rounded-[9999px] shrink-0" data-node-id="I1:22540;430:252457" data-name="tag">
                              <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] not-italic relative shrink-0 text-[#246634] text-[12px] whitespace-nowrap" data-node-id="I1:22540;430:252460">
                                <p className="leading-[18px]">运营增长</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="border-0 border-[#f3f3f7] border-solid content-stretch flex h-full items-center min-h-[48px] min-w-[100px] px-[12px] py-[8px] relative shrink-0 w-[168px]" data-node-id="1:22541" data-name="table-cell-body">
                          <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-node-id="I1:22541;2985:32163" data-name="Content">
                            <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I1:22541;1312:14702" data-name="Content">
                              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] min-w-px not-italic relative text-[#1e2436] text-[14px]" data-node-id="I1:22541;1312:14703">
                                <p className="leading-[20px]">2025-02-14 10:20:11</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="border-0 border-[#f3f3f7] border-solid content-stretch flex h-full items-center min-h-[48px] min-w-[100px] px-[12px] py-[8px] relative shrink-0 w-[168px]" data-node-id="1:22542" data-name="table-cell-body">
                          <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-node-id="I1:22542;2985:32163" data-name="Content">
                            <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I1:22542;1312:14702" data-name="Content">
                              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] min-w-px not-italic relative text-[#1e2436] text-[14px]" data-node-id="I1:22542;1312:14703">
                                <p className="leading-[20px]">2025-02-14 10:20:11</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="border-0 border-[#f3f3f7] border-solid content-stretch flex h-full items-center min-h-[48px] px-[12px] py-[8px] relative shrink-0" data-node-id="1:22547" data-name="table-cell-body">
                          <div className="content-stretch flex h-full items-center justify-end relative shrink-0" data-node-id="I1:22547;578:10532" data-name="button-group">
                            <div className="content-stretch flex gap-[12px] items-center justify-end relative shrink-0" data-node-id="I1:22547;578:10532;12640:3505" data-name="按钮布局插槽">
                              <div className="content-stretch flex items-center justify-center p-[6px] relative rounded-[6px] shrink-0" data-node-id="I1:22547;578:10532;12640:3505;1:22544" data-name="button">
                                <div className="relative shrink-0 size-[16px]" data-node-id="I1:22547;578:10532;12640:3505;1:22544;802:23041" data-name="common-linear-add">
                                  <MoreIcon />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Row>
                      <Row className="bg-white border-[#f3f3f7] border-b border-solid content-stretch flex items-start min-h-[44px] overflow-clip relative shrink-0 w-full">
                        <div className="border-[#f3f3f7] border-b border-solid content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-[48px] min-w-[240px] px-[12px] py-[8px] relative" data-node-id="1:22567" data-name="table-cell-body">
                          <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-node-id="I1:22567;2835:114404" data-name="内容插槽">
                            <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-node-id="I1:22567;2835:114404;1:22553" data-name="Content">
                              <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#1e2436] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="I1:22567;2835:114404;1:22554">
                                <p className="leading-[20px] overflow-hidden text-ellipsis">阿里巴巴网络技术有限公司</p>
                              </div>
                            </div>
                            <div className="content-center flex flex-wrap gap-[2px_6px] h-[20px] items-center relative shrink-0 w-full" data-node-id="I1:22567;2835:114404;1:22557" data-name="说明文字插槽">
                              <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#646e87] text-[12px] text-ellipsis whitespace-nowrap" data-node-id="I1:22567;2835:114404;1:22559">
                                <p className="leading-[18px] overflow-hidden text-ellipsis">客户数 4</p>
                              </div>
                              <div className="h-[10px] relative shrink-0 w-0" data-node-id="I1:22567;2835:114404;1:22560">
                                <div className="absolute inset-[0_-0.5px]">
                                  <img alt="" className="block max-w-none size-full" src={imgVector2} />
                                </div>
                              </div>
                              <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#646e87] text-[12px] text-ellipsis whitespace-nowrap" data-node-id="I1:22567;2835:114404;1:22563">
                                <p className="leading-[18px] overflow-hidden text-ellipsis">商户数 12</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="border-0 border-[#f3f3f7] border-solid content-stretch flex h-full items-center min-h-[48px] min-w-[90px] px-[12px] py-[8px] relative shrink-0 w-[90px]" data-node-id="1:22568" data-name="table-cell-body">
                          <div className="content-center flex flex-[1_0_0] flex-wrap gap-y-[4px] h-full items-center min-w-px relative" data-node-id="1:22569" data-name="标签插槽">
                            <Tag className="bg-[#fdf0e9] border border-[#fadecf] border-solid content-stretch flex gap-[2px] items-center px-[6px] py-px relative rounded-[9999px] shrink-0" />
                          </div>
                        </div>
                        <div className="border-0 border-[#f3f3f7] border-solid content-stretch flex flex-[1_0_0] h-full items-center min-h-[48px] min-w-[80px] px-[12px] py-[8px] relative" data-node-id="1:22574" data-name="table-cell-body">
                          <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-node-id="I1:22574;2985:32162" data-name="Content">
                            <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I1:22574;574:4502" data-name="Content">
                              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#1e2436] text-[14px] text-ellipsis" data-node-id="I1:22574;574:4503">
                                <p className="leading-[20px]">9</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="border-0 border-[#f3f3f7] border-solid content-stretch flex flex-[1_0_0] h-full items-center min-h-[48px] min-w-[80px] px-[12px] py-[8px] relative" data-node-id="1:22575" data-name="table-cell-body">
                          <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-node-id="I1:22575;2985:32162" data-name="Content">
                            <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I1:22575;574:4502" data-name="Content">
                              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#1e2436] text-[14px] text-ellipsis" data-node-id="I1:22575;574:4503">
                                <p className="leading-[20px]">1</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="border-0 border-[#f3f3f7] border-solid content-stretch flex flex-[1_0_0] h-full items-center min-h-[48px] min-w-[120px] px-[12px] py-[8px] relative" data-node-id="1:22584" data-name="table-cell-body">
                          <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-node-id="I1:22584;2985:32162" data-name="Content">
                            <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I1:22584;574:4502" data-name="Content">
                              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#1e2436] text-[14px] text-ellipsis" data-node-id="I1:22584;574:4503">
                                <p className="leading-[20px]">周杰伦</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="border-0 border-[#f3f3f7] border-solid content-stretch flex flex-[1_0_0] h-full items-center min-h-[48px] min-w-[120px] px-[12px] py-[8px] relative" data-node-id="1:22585" data-name="table-cell-body">
                          <div className="content-center flex flex-[1_0_0] flex-wrap gap-y-[4px] h-full items-center min-w-px relative" data-node-id="I1:22585;366:246428" data-name="标签插槽">
                            <div className="bg-[#eefbf5] content-stretch flex gap-[4px] items-center px-[8px] py-px relative rounded-[9999px] shrink-0" data-node-id="I1:22585;430:252457" data-name="tag">
                              <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] not-italic relative shrink-0 text-[#246634] text-[12px] whitespace-nowrap" data-node-id="I1:22585;430:252460">
                                <p className="leading-[18px]">运营增长</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="border-0 border-[#f3f3f7] border-solid content-stretch flex h-full items-center min-h-[48px] min-w-[100px] px-[12px] py-[8px] relative shrink-0 w-[168px]" data-node-id="1:22586" data-name="table-cell-body">
                          <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-node-id="I1:22586;2985:32163" data-name="Content">
                            <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I1:22586;1312:14702" data-name="Content">
                              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] min-w-px not-italic relative text-[#1e2436] text-[14px]" data-node-id="I1:22586;1312:14703">
                                <p className="leading-[20px]">2025-02-14 10:20:11</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="border-0 border-[#f3f3f7] border-solid content-stretch flex h-full items-center min-h-[48px] min-w-[100px] px-[12px] py-[8px] relative shrink-0 w-[168px]" data-node-id="1:22587" data-name="table-cell-body">
                          <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-node-id="I1:22587;2985:32163" data-name="Content">
                            <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I1:22587;1312:14702" data-name="Content">
                              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] min-w-px not-italic relative text-[#1e2436] text-[14px]" data-node-id="I1:22587;1312:14703">
                                <p className="leading-[20px]">2025-02-14 10:20:11</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="border-0 border-[#f3f3f7] border-solid content-stretch flex h-full items-center min-h-[48px] px-[12px] py-[8px] relative shrink-0" data-node-id="1:22592" data-name="table-cell-body">
                          <div className="content-stretch flex h-full items-center justify-end relative shrink-0" data-node-id="I1:22592;578:10532" data-name="button-group">
                            <div className="content-stretch flex gap-[12px] items-center justify-end relative shrink-0" data-node-id="I1:22592;578:10532;12640:3505" data-name="按钮布局插槽">
                              <div className="content-stretch flex items-center justify-center p-[6px] relative rounded-[6px] shrink-0" data-node-id="I1:22592;578:10532;12640:3505;1:22589" data-name="button">
                                <div className="relative shrink-0 size-[16px]" data-node-id="I1:22592;578:10532;12640:3505;1:22589;802:23041" data-name="common-linear-add">
                                  <MoreIcon />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Row>
                      <Row className="bg-white border-[#f3f3f7] border-b border-solid content-stretch flex items-start min-h-[44px] overflow-clip relative shrink-0 w-full">
                        <div className="border-[#f3f3f7] border-b border-solid content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-[48px] min-w-[240px] px-[12px] py-[8px] relative" data-node-id="1:22612" data-name="table-cell-body">
                          <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-node-id="I1:22612;2835:114404" data-name="内容插槽">
                            <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-node-id="I1:22612;2835:114404;1:22598" data-name="Content">
                              <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#1e2436] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="I1:22612;2835:114404;1:22599">
                                <p className="leading-[20px] overflow-hidden text-ellipsis">阿里巴巴网络技术有限公司</p>
                              </div>
                            </div>
                            <div className="content-center flex flex-wrap gap-[2px_6px] h-[20px] items-center relative shrink-0 w-full" data-node-id="I1:22612;2835:114404;1:22602" data-name="说明文字插槽">
                              <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#646e87] text-[12px] text-ellipsis whitespace-nowrap" data-node-id="I1:22612;2835:114404;1:22604">
                                <p className="leading-[18px] overflow-hidden text-ellipsis">客户数 4</p>
                              </div>
                              <div className="h-[10px] relative shrink-0 w-0" data-node-id="I1:22612;2835:114404;1:22605">
                                <div className="absolute inset-[0_-0.5px]">
                                  <img alt="" className="block max-w-none size-full" src={imgVector2} />
                                </div>
                              </div>
                              <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#646e87] text-[12px] text-ellipsis whitespace-nowrap" data-node-id="I1:22612;2835:114404;1:22608">
                                <p className="leading-[18px] overflow-hidden text-ellipsis">商户数 12</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="border-0 border-[#f3f3f7] border-solid content-stretch flex h-full items-center min-h-[48px] min-w-[90px] px-[12px] py-[8px] relative shrink-0 w-[90px]" data-node-id="1:22613" data-name="table-cell-body">
                          <div className="content-center flex flex-[1_0_0] flex-wrap gap-y-[4px] h-full items-center min-w-px relative" data-node-id="1:22614" data-name="标签插槽">
                            <Tag className="bg-[#fdf0e9] border border-[#fadecf] border-solid content-stretch flex gap-[2px] items-center px-[6px] py-px relative rounded-[9999px] shrink-0" />
                          </div>
                        </div>
                        <div className="border-0 border-[#f3f3f7] border-solid content-stretch flex flex-[1_0_0] h-full items-center min-h-[48px] min-w-[80px] px-[12px] py-[8px] relative" data-node-id="1:22619" data-name="table-cell-body">
                          <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-node-id="I1:22619;2985:32162" data-name="Content">
                            <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I1:22619;574:4502" data-name="Content">
                              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#1e2436] text-[14px] text-ellipsis" data-node-id="I1:22619;574:4503">
                                <p className="leading-[20px]">9</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="border-0 border-[#f3f3f7] border-solid content-stretch flex flex-[1_0_0] h-full items-center min-h-[48px] min-w-[80px] px-[12px] py-[8px] relative" data-node-id="1:22620" data-name="table-cell-body">
                          <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-node-id="I1:22620;2985:32162" data-name="Content">
                            <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I1:22620;574:4502" data-name="Content">
                              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#1e2436] text-[14px] text-ellipsis" data-node-id="I1:22620;574:4503">
                                <p className="leading-[20px]">1</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="border-0 border-[#f3f3f7] border-solid content-stretch flex flex-[1_0_0] h-full items-center min-h-[48px] min-w-[120px] px-[12px] py-[8px] relative" data-node-id="1:22629" data-name="table-cell-body">
                          <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-node-id="I1:22629;2985:32162" data-name="Content">
                            <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I1:22629;574:4502" data-name="Content">
                              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#1e2436] text-[14px] text-ellipsis" data-node-id="I1:22629;574:4503">
                                <p className="leading-[20px]">周杰伦</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="border-0 border-[#f3f3f7] border-solid content-stretch flex flex-[1_0_0] h-full items-center min-h-[48px] min-w-[120px] px-[12px] py-[8px] relative" data-node-id="1:22630" data-name="table-cell-body">
                          <div className="content-center flex flex-[1_0_0] flex-wrap gap-y-[4px] h-full items-center min-w-px relative" data-node-id="I1:22630;366:246428" data-name="标签插槽">
                            <div className="bg-[#eefbf5] content-stretch flex gap-[4px] items-center px-[8px] py-px relative rounded-[9999px] shrink-0" data-node-id="I1:22630;430:252457" data-name="tag">
                              <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] not-italic relative shrink-0 text-[#246634] text-[12px] whitespace-nowrap" data-node-id="I1:22630;430:252460">
                                <p className="leading-[18px]">运营增长</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="border-0 border-[#f3f3f7] border-solid content-stretch flex h-full items-center min-h-[48px] min-w-[100px] px-[12px] py-[8px] relative shrink-0 w-[168px]" data-node-id="1:22631" data-name="table-cell-body">
                          <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-node-id="I1:22631;2985:32163" data-name="Content">
                            <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I1:22631;1312:14702" data-name="Content">
                              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] min-w-px not-italic relative text-[#1e2436] text-[14px]" data-node-id="I1:22631;1312:14703">
                                <p className="leading-[20px]">2025-02-14 10:20:11</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="border-0 border-[#f3f3f7] border-solid content-stretch flex h-full items-center min-h-[48px] min-w-[100px] px-[12px] py-[8px] relative shrink-0 w-[168px]" data-node-id="1:22632" data-name="table-cell-body">
                          <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-node-id="I1:22632;2985:32163" data-name="Content">
                            <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I1:22632;1312:14702" data-name="Content">
                              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] min-w-px not-italic relative text-[#1e2436] text-[14px]" data-node-id="I1:22632;1312:14703">
                                <p className="leading-[20px]">2025-02-14 10:20:11</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="border-0 border-[#f3f3f7] border-solid content-stretch flex h-full items-center min-h-[48px] px-[12px] py-[8px] relative shrink-0" data-node-id="1:22637" data-name="table-cell-body">
                          <div className="content-stretch flex h-full items-center justify-end relative shrink-0" data-node-id="I1:22637;578:10532" data-name="button-group">
                            <div className="content-stretch flex gap-[12px] items-center justify-end relative shrink-0" data-node-id="I1:22637;578:10532;12640:3505" data-name="按钮布局插槽">
                              <div className="content-stretch flex items-center justify-center p-[6px] relative rounded-[6px] shrink-0" data-node-id="I1:22637;578:10532;12640:3505;1:22634" data-name="button">
                                <div className="relative shrink-0 size-[16px]" data-node-id="I1:22637;578:10532;12640:3505;1:22634;802:23041" data-name="common-linear-add">
                                  <MoreIcon />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Row>
                      <Row className="bg-white border-[#f3f3f7] border-b border-solid content-stretch flex items-start min-h-[44px] overflow-clip relative shrink-0 w-full">
                        <div className="border-[#f3f3f7] border-b border-solid content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-[48px] min-w-[240px] px-[12px] py-[8px] relative" data-node-id="1:22657" data-name="table-cell-body">
                          <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-node-id="I1:22657;2835:114404" data-name="内容插槽">
                            <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-node-id="I1:22657;2835:114404;1:22643" data-name="Content">
                              <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#1e2436] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="I1:22657;2835:114404;1:22644">
                                <p className="leading-[20px] overflow-hidden text-ellipsis">阿里巴巴网络技术有限公司</p>
                              </div>
                            </div>
                            <div className="content-center flex flex-wrap gap-[2px_6px] h-[20px] items-center relative shrink-0 w-full" data-node-id="I1:22657;2835:114404;1:22647" data-name="说明文字插槽">
                              <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#646e87] text-[12px] text-ellipsis whitespace-nowrap" data-node-id="I1:22657;2835:114404;1:22649">
                                <p className="leading-[18px] overflow-hidden text-ellipsis">客户数 4</p>
                              </div>
                              <div className="h-[10px] relative shrink-0 w-0" data-node-id="I1:22657;2835:114404;1:22650">
                                <div className="absolute inset-[0_-0.5px]">
                                  <img alt="" className="block max-w-none size-full" src={imgVector2} />
                                </div>
                              </div>
                              <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#646e87] text-[12px] text-ellipsis whitespace-nowrap" data-node-id="I1:22657;2835:114404;1:22653">
                                <p className="leading-[18px] overflow-hidden text-ellipsis">商户数 12</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="border-0 border-[#f3f3f7] border-solid content-stretch flex h-full items-center min-h-[48px] min-w-[90px] px-[12px] py-[8px] relative shrink-0 w-[90px]" data-node-id="1:22658" data-name="table-cell-body">
                          <div className="content-center flex flex-[1_0_0] flex-wrap gap-y-[4px] h-full items-center min-w-px relative" data-node-id="1:22659" data-name="标签插槽">
                            <Tag className="bg-[#eef2fe] border border-[#c7d6fe] border-solid content-stretch flex gap-[2px] items-center px-[6px] py-px relative rounded-[9999px] shrink-0" property1="Variant5" />
                          </div>
                        </div>
                        <div className="border-0 border-[#f3f3f7] border-solid content-stretch flex flex-[1_0_0] h-full items-center min-h-[48px] min-w-[80px] px-[12px] py-[8px] relative" data-node-id="1:22664" data-name="table-cell-body">
                          <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-node-id="I1:22664;2985:32162" data-name="Content">
                            <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I1:22664;574:4502" data-name="Content">
                              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#1e2436] text-[14px] text-ellipsis" data-node-id="I1:22664;574:4503">
                                <p className="leading-[20px]">9</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="border-0 border-[#f3f3f7] border-solid content-stretch flex flex-[1_0_0] h-full items-center min-h-[48px] min-w-[80px] px-[12px] py-[8px] relative" data-node-id="1:22665" data-name="table-cell-body">
                          <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-node-id="I1:22665;2985:32162" data-name="Content">
                            <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I1:22665;574:4502" data-name="Content">
                              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#1e2436] text-[14px] text-ellipsis" data-node-id="I1:22665;574:4503">
                                <p className="leading-[20px]">1</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="border-0 border-[#f3f3f7] border-solid content-stretch flex flex-[1_0_0] h-full items-center min-h-[48px] min-w-[120px] px-[12px] py-[8px] relative" data-node-id="1:22674" data-name="table-cell-body">
                          <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-node-id="I1:22674;2985:32162" data-name="Content">
                            <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I1:22674;574:4502" data-name="Content">
                              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#1e2436] text-[14px] text-ellipsis" data-node-id="I1:22674;574:4503">
                                <p className="leading-[20px]">周杰伦</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="border-0 border-[#f3f3f7] border-solid content-stretch flex flex-[1_0_0] h-full items-center min-h-[48px] min-w-[120px] px-[12px] py-[8px] relative" data-node-id="1:22675" data-name="table-cell-body">
                          <div className="content-center flex flex-[1_0_0] flex-wrap gap-y-[4px] h-full items-center min-w-px relative" data-node-id="I1:22675;366:246428" data-name="标签插槽">
                            <div className="bg-[#eefbf5] content-stretch flex gap-[4px] items-center px-[8px] py-px relative rounded-[9999px] shrink-0" data-node-id="I1:22675;430:252457" data-name="tag">
                              <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] not-italic relative shrink-0 text-[#246634] text-[12px] whitespace-nowrap" data-node-id="I1:22675;430:252460">
                                <p className="leading-[18px]">运营增长</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="border-0 border-[#f3f3f7] border-solid content-stretch flex h-full items-center min-h-[48px] min-w-[100px] px-[12px] py-[8px] relative shrink-0 w-[168px]" data-node-id="1:22676" data-name="table-cell-body">
                          <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-node-id="I1:22676;2985:32163" data-name="Content">
                            <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I1:22676;1312:14702" data-name="Content">
                              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] min-w-px not-italic relative text-[#1e2436] text-[14px]" data-node-id="I1:22676;1312:14703">
                                <p className="leading-[20px]">2025-02-14 10:20:11</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="border-0 border-[#f3f3f7] border-solid content-stretch flex h-full items-center min-h-[48px] min-w-[100px] px-[12px] py-[8px] relative shrink-0 w-[168px]" data-node-id="1:22677" data-name="table-cell-body">
                          <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-node-id="I1:22677;2985:32163" data-name="Content">
                            <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I1:22677;1312:14702" data-name="Content">
                              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] min-w-px not-italic relative text-[#1e2436] text-[14px]" data-node-id="I1:22677;1312:14703">
                                <p className="leading-[20px]">2025-02-14 10:20:11</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="border-0 border-[#f3f3f7] border-solid content-stretch flex h-full items-center min-h-[48px] px-[12px] py-[8px] relative shrink-0" data-node-id="1:22682" data-name="table-cell-body">
                          <div className="content-stretch flex h-full items-center justify-end relative shrink-0" data-node-id="I1:22682;578:10532" data-name="button-group">
                            <div className="content-stretch flex gap-[12px] items-center justify-end relative shrink-0" data-node-id="I1:22682;578:10532;12640:3505" data-name="按钮布局插槽">
                              <div className="content-stretch flex items-center justify-center p-[6px] relative rounded-[6px] shrink-0" data-node-id="I1:22682;578:10532;12640:3505;1:22679" data-name="button">
                                <div className="relative shrink-0 size-[16px]" data-node-id="I1:22682;578:10532;12640:3505;1:22679;802:23041" data-name="common-linear-add">
                                  <MoreIcon />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Row>
                      <Row className="bg-white border-[#f3f3f7] border-b border-solid content-stretch flex items-start min-h-[44px] overflow-clip relative shrink-0 w-full">
                        <div className="border-[#f3f3f7] border-b border-solid content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-[48px] min-w-[240px] px-[12px] py-[8px] relative" data-node-id="1:22702" data-name="table-cell-body">
                          <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-node-id="I1:22702;2835:114404" data-name="内容插槽">
                            <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-node-id="I1:22702;2835:114404;1:22688" data-name="Content">
                              <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#1e2436] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="I1:22702;2835:114404;1:22689">
                                <p className="leading-[20px] overflow-hidden text-ellipsis">阿里巴巴网络技术有限公司</p>
                              </div>
                            </div>
                            <div className="content-center flex flex-wrap gap-[2px_6px] h-[20px] items-center relative shrink-0 w-full" data-node-id="I1:22702;2835:114404;1:22692" data-name="说明文字插槽">
                              <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#646e87] text-[12px] text-ellipsis whitespace-nowrap" data-node-id="I1:22702;2835:114404;1:22694">
                                <p className="leading-[18px] overflow-hidden text-ellipsis">客户数 4</p>
                              </div>
                              <div className="h-[10px] relative shrink-0 w-0" data-node-id="I1:22702;2835:114404;1:22695">
                                <div className="absolute inset-[0_-0.5px]">
                                  <img alt="" className="block max-w-none size-full" src={imgVector2} />
                                </div>
                              </div>
                              <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#646e87] text-[12px] text-ellipsis whitespace-nowrap" data-node-id="I1:22702;2835:114404;1:22698">
                                <p className="leading-[18px] overflow-hidden text-ellipsis">商户数 12</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="border-0 border-[#f3f3f7] border-solid content-stretch flex h-full items-center min-h-[48px] min-w-[90px] px-[12px] py-[8px] relative shrink-0 w-[90px]" data-node-id="1:22703" data-name="table-cell-body">
                          <div className="content-center flex flex-[1_0_0] flex-wrap gap-y-[4px] h-full items-center min-w-px relative" data-node-id="1:22704" data-name="标签插槽">
                            <Tag className="bg-[#eef2fe] border border-[#c7d6fe] border-solid content-stretch flex gap-[2px] items-center px-[6px] py-px relative rounded-[9999px] shrink-0" property1="Variant5" />
                          </div>
                        </div>
                        <div className="border-0 border-[#f3f3f7] border-solid content-stretch flex flex-[1_0_0] h-full items-center min-h-[48px] min-w-[80px] px-[12px] py-[8px] relative" data-node-id="1:22709" data-name="table-cell-body">
                          <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-node-id="I1:22709;2985:32162" data-name="Content">
                            <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I1:22709;574:4502" data-name="Content">
                              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#1e2436] text-[14px] text-ellipsis" data-node-id="I1:22709;574:4503">
                                <p className="leading-[20px]">9</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="border-0 border-[#f3f3f7] border-solid content-stretch flex flex-[1_0_0] h-full items-center min-h-[48px] min-w-[80px] px-[12px] py-[8px] relative" data-node-id="1:22710" data-name="table-cell-body">
                          <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-node-id="I1:22710;2985:32162" data-name="Content">
                            <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I1:22710;574:4502" data-name="Content">
                              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#1e2436] text-[14px] text-ellipsis" data-node-id="I1:22710;574:4503">
                                <p className="leading-[20px]">1</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="border-0 border-[#f3f3f7] border-solid content-stretch flex flex-[1_0_0] h-full items-center min-h-[48px] min-w-[120px] px-[12px] py-[8px] relative" data-node-id="1:22719" data-name="table-cell-body">
                          <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-node-id="I1:22719;2985:32162" data-name="Content">
                            <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I1:22719;574:4502" data-name="Content">
                              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#1e2436] text-[14px] text-ellipsis" data-node-id="I1:22719;574:4503">
                                <p className="leading-[20px]">周杰伦</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="border-0 border-[#f3f3f7] border-solid content-stretch flex flex-[1_0_0] h-full items-center min-h-[48px] min-w-[120px] px-[12px] py-[8px] relative" data-node-id="1:22720" data-name="table-cell-body">
                          <div className="content-center flex flex-[1_0_0] flex-wrap gap-y-[4px] h-full items-center min-w-px relative" data-node-id="I1:22720;366:246428" data-name="标签插槽">
                            <div className="bg-[#eefbf5] content-stretch flex gap-[4px] items-center px-[8px] py-px relative rounded-[9999px] shrink-0" data-node-id="I1:22720;430:252457" data-name="tag">
                              <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] not-italic relative shrink-0 text-[#246634] text-[12px] whitespace-nowrap" data-node-id="I1:22720;430:252460">
                                <p className="leading-[18px]">运营增长</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="border-0 border-[#f3f3f7] border-solid content-stretch flex h-full items-center min-h-[48px] min-w-[100px] px-[12px] py-[8px] relative shrink-0 w-[168px]" data-node-id="1:22721" data-name="table-cell-body">
                          <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-node-id="I1:22721;2985:32163" data-name="Content">
                            <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I1:22721;1312:14702" data-name="Content">
                              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] min-w-px not-italic relative text-[#1e2436] text-[14px]" data-node-id="I1:22721;1312:14703">
                                <p className="leading-[20px]">2025-02-14 10:20:11</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="border-0 border-[#f3f3f7] border-solid content-stretch flex h-full items-center min-h-[48px] min-w-[100px] px-[12px] py-[8px] relative shrink-0 w-[168px]" data-node-id="1:22722" data-name="table-cell-body">
                          <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-node-id="I1:22722;2985:32163" data-name="Content">
                            <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I1:22722;1312:14702" data-name="Content">
                              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] min-w-px not-italic relative text-[#1e2436] text-[14px]" data-node-id="I1:22722;1312:14703">
                                <p className="leading-[20px]">2025-02-14 10:20:11</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="border-0 border-[#f3f3f7] border-solid content-stretch flex h-full items-center min-h-[48px] px-[12px] py-[8px] relative shrink-0" data-node-id="1:22727" data-name="table-cell-body">
                          <div className="content-stretch flex h-full items-center justify-end relative shrink-0" data-node-id="I1:22727;578:10532" data-name="button-group">
                            <div className="content-stretch flex gap-[12px] items-center justify-end relative shrink-0" data-node-id="I1:22727;578:10532;12640:3505" data-name="按钮布局插槽">
                              <div className="content-stretch flex items-center justify-center p-[6px] relative rounded-[6px] shrink-0" data-node-id="I1:22727;578:10532;12640:3505;1:22724" data-name="button">
                                <div className="relative shrink-0 size-[16px]" data-node-id="I1:22727;578:10532;12640:3505;1:22724;802:23041" data-name="common-linear-add">
                                  <MoreIcon />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Row>
                      <Row className="bg-white border-[#f3f3f7] border-b border-solid content-stretch flex items-start min-h-[44px] overflow-clip relative shrink-0 w-full">
                        <div className="border-[#f3f3f7] border-b border-solid content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-[48px] min-w-[240px] px-[12px] py-[8px] relative" data-node-id="1:22747" data-name="table-cell-body">
                          <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-node-id="I1:22747;2835:114404" data-name="内容插槽">
                            <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-node-id="I1:22747;2835:114404;1:22733" data-name="Content">
                              <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#1e2436] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="I1:22747;2835:114404;1:22734">
                                <p className="leading-[20px] overflow-hidden text-ellipsis">阿里巴巴网络技术有限公司</p>
                              </div>
                            </div>
                            <div className="content-center flex flex-wrap gap-[2px_6px] h-[20px] items-center relative shrink-0 w-full" data-node-id="I1:22747;2835:114404;1:22737" data-name="说明文字插槽">
                              <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#646e87] text-[12px] text-ellipsis whitespace-nowrap" data-node-id="I1:22747;2835:114404;1:22739">
                                <p className="leading-[18px] overflow-hidden text-ellipsis">客户数 4</p>
                              </div>
                              <div className="h-[10px] relative shrink-0 w-0" data-node-id="I1:22747;2835:114404;1:22740">
                                <div className="absolute inset-[0_-0.5px]">
                                  <img alt="" className="block max-w-none size-full" src={imgVector2} />
                                </div>
                              </div>
                              <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#646e87] text-[12px] text-ellipsis whitespace-nowrap" data-node-id="I1:22747;2835:114404;1:22743">
                                <p className="leading-[18px] overflow-hidden text-ellipsis">商户数 12</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="border-0 border-[#f3f3f7] border-solid content-stretch flex h-full items-center min-h-[48px] min-w-[90px] px-[12px] py-[8px] relative shrink-0 w-[90px]" data-node-id="1:22748" data-name="table-cell-body">
                          <div className="content-center flex flex-[1_0_0] flex-wrap gap-y-[4px] h-full items-center min-w-px relative" data-node-id="1:22749" data-name="标签插槽">
                            <Tag className="bg-[#eef2fe] border border-[#c7d6fe] border-solid content-stretch flex gap-[2px] items-center px-[6px] py-px relative rounded-[9999px] shrink-0" property1="Variant5" />
                          </div>
                        </div>
                        <div className="border-0 border-[#f3f3f7] border-solid content-stretch flex flex-[1_0_0] h-full items-center min-h-[48px] min-w-[80px] px-[12px] py-[8px] relative" data-node-id="1:22754" data-name="table-cell-body">
                          <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-node-id="I1:22754;2985:32162" data-name="Content">
                            <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I1:22754;574:4502" data-name="Content">
                              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#1e2436] text-[14px] text-ellipsis" data-node-id="I1:22754;574:4503">
                                <p className="leading-[20px]">9</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="border-0 border-[#f3f3f7] border-solid content-stretch flex flex-[1_0_0] h-full items-center min-h-[48px] min-w-[80px] px-[12px] py-[8px] relative" data-node-id="1:22755" data-name="table-cell-body">
                          <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-node-id="I1:22755;2985:32162" data-name="Content">
                            <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I1:22755;574:4502" data-name="Content">
                              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#1e2436] text-[14px] text-ellipsis" data-node-id="I1:22755;574:4503">
                                <p className="leading-[20px]">1</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="border-0 border-[#f3f3f7] border-solid content-stretch flex flex-[1_0_0] h-full items-center min-h-[48px] min-w-[120px] px-[12px] py-[8px] relative" data-node-id="1:22764" data-name="table-cell-body">
                          <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-node-id="I1:22764;2985:32162" data-name="Content">
                            <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I1:22764;574:4502" data-name="Content">
                              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#1e2436] text-[14px] text-ellipsis" data-node-id="I1:22764;574:4503">
                                <p className="leading-[20px]">周杰伦</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="border-0 border-[#f3f3f7] border-solid content-stretch flex flex-[1_0_0] h-full items-center min-h-[48px] min-w-[120px] px-[12px] py-[8px] relative" data-node-id="1:22765" data-name="table-cell-body">
                          <div className="content-center flex flex-[1_0_0] flex-wrap gap-y-[4px] h-full items-center min-w-px relative" data-node-id="I1:22765;366:246428" data-name="标签插槽">
                            <div className="bg-[#eefbf5] content-stretch flex gap-[4px] items-center px-[8px] py-px relative rounded-[9999px] shrink-0" data-node-id="I1:22765;430:252457" data-name="tag">
                              <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] not-italic relative shrink-0 text-[#246634] text-[12px] whitespace-nowrap" data-node-id="I1:22765;430:252460">
                                <p className="leading-[18px]">运营增长</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="border-0 border-[#f3f3f7] border-solid content-stretch flex h-full items-center min-h-[48px] min-w-[100px] px-[12px] py-[8px] relative shrink-0 w-[168px]" data-node-id="1:22766" data-name="table-cell-body">
                          <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-node-id="I1:22766;2985:32163" data-name="Content">
                            <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I1:22766;1312:14702" data-name="Content">
                              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] min-w-px not-italic relative text-[#1e2436] text-[14px]" data-node-id="I1:22766;1312:14703">
                                <p className="leading-[20px]">2025-02-14 10:20:11</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="border-0 border-[#f3f3f7] border-solid content-stretch flex h-full items-center min-h-[48px] min-w-[100px] px-[12px] py-[8px] relative shrink-0 w-[168px]" data-node-id="1:22767" data-name="table-cell-body">
                          <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-node-id="I1:22767;2985:32163" data-name="Content">
                            <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I1:22767;1312:14702" data-name="Content">
                              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] min-w-px not-italic relative text-[#1e2436] text-[14px]" data-node-id="I1:22767;1312:14703">
                                <p className="leading-[20px]">2025-02-14 10:20:11</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="border-0 border-[#f3f3f7] border-solid content-stretch flex h-full items-center min-h-[48px] px-[12px] py-[8px] relative shrink-0" data-node-id="1:22772" data-name="table-cell-body">
                          <div className="content-stretch flex h-full items-center justify-end relative shrink-0" data-node-id="I1:22772;578:10532" data-name="button-group">
                            <div className="content-stretch flex gap-[12px] items-center justify-end relative shrink-0" data-node-id="I1:22772;578:10532;12640:3505" data-name="按钮布局插槽">
                              <div className="content-stretch flex items-center justify-center p-[6px] relative rounded-[6px] shrink-0" data-node-id="I1:22772;578:10532;12640:3505;1:22769" data-name="button">
                                <div className="relative shrink-0 size-[16px]" data-node-id="I1:22772;578:10532;12640:3505;1:22769;802:23041" data-name="common-linear-add">
                                  <MoreIcon />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Row>
                      <Row className="bg-white border-[#f3f3f7] border-b border-solid content-stretch flex items-start min-h-[44px] overflow-clip relative shrink-0 w-full">
                        <div className="border-[#f3f3f7] border-b border-solid content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-[48px] min-w-[240px] px-[12px] py-[8px] relative" data-node-id="1:22792" data-name="table-cell-body">
                          <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-node-id="I1:22792;2835:114404" data-name="内容插槽">
                            <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-node-id="I1:22792;2835:114404;1:22778" data-name="Content">
                              <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#1e2436] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="I1:22792;2835:114404;1:22779">
                                <p className="leading-[20px] overflow-hidden text-ellipsis">阿里巴巴网络技术有限公司</p>
                              </div>
                            </div>
                            <div className="content-center flex flex-wrap gap-[2px_6px] h-[20px] items-center relative shrink-0 w-full" data-node-id="I1:22792;2835:114404;1:22782" data-name="说明文字插槽">
                              <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#646e87] text-[12px] text-ellipsis whitespace-nowrap" data-node-id="I1:22792;2835:114404;1:22784">
                                <p className="leading-[18px] overflow-hidden text-ellipsis">客户数 4</p>
                              </div>
                              <div className="h-[10px] relative shrink-0 w-0" data-node-id="I1:22792;2835:114404;1:22785">
                                <div className="absolute inset-[0_-0.5px]">
                                  <img alt="" className="block max-w-none size-full" src={imgVector2} />
                                </div>
                              </div>
                              <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#646e87] text-[12px] text-ellipsis whitespace-nowrap" data-node-id="I1:22792;2835:114404;1:22788">
                                <p className="leading-[18px] overflow-hidden text-ellipsis">商户数 12</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="border-0 border-[#f3f3f7] border-solid content-stretch flex h-full items-center min-h-[48px] min-w-[90px] px-[12px] py-[8px] relative shrink-0 w-[90px]" data-node-id="1:22793" data-name="table-cell-body">
                          <div className="content-center flex flex-[1_0_0] flex-wrap gap-y-[4px] h-full items-center min-w-px relative" data-node-id="1:22794" data-name="标签插槽">
                            <Tag className="bg-[#eef2fe] border border-[#c7d6fe] border-solid content-stretch flex gap-[2px] items-center px-[6px] py-px relative rounded-[9999px] shrink-0" property1="Variant5" />
                          </div>
                        </div>
                        <div className="border-0 border-[#f3f3f7] border-solid content-stretch flex flex-[1_0_0] h-full items-center min-h-[48px] min-w-[80px] px-[12px] py-[8px] relative" data-node-id="1:22799" data-name="table-cell-body">
                          <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-node-id="I1:22799;2985:32162" data-name="Content">
                            <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I1:22799;574:4502" data-name="Content">
                              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#1e2436] text-[14px] text-ellipsis" data-node-id="I1:22799;574:4503">
                                <p className="leading-[20px]">9</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="border-0 border-[#f3f3f7] border-solid content-stretch flex flex-[1_0_0] h-full items-center min-h-[48px] min-w-[80px] px-[12px] py-[8px] relative" data-node-id="1:22800" data-name="table-cell-body">
                          <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-node-id="I1:22800;2985:32162" data-name="Content">
                            <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I1:22800;574:4502" data-name="Content">
                              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#1e2436] text-[14px] text-ellipsis" data-node-id="I1:22800;574:4503">
                                <p className="leading-[20px]">1</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="border-0 border-[#f3f3f7] border-solid content-stretch flex flex-[1_0_0] h-full items-center min-h-[48px] min-w-[120px] px-[12px] py-[8px] relative" data-node-id="1:22809" data-name="table-cell-body">
                          <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-node-id="I1:22809;2985:32162" data-name="Content">
                            <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I1:22809;574:4502" data-name="Content">
                              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#1e2436] text-[14px] text-ellipsis" data-node-id="I1:22809;574:4503">
                                <p className="leading-[20px]">蔡徐坤</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="border-0 border-[#f3f3f7] border-solid content-stretch flex flex-[1_0_0] h-full items-center min-h-[48px] min-w-[120px] px-[12px] py-[8px] relative" data-node-id="1:22810" data-name="table-cell-body">
                          <div className="content-center flex flex-[1_0_0] flex-wrap gap-y-[4px] h-full items-center min-w-px relative" data-node-id="I1:22810;366:246420" data-name="标签插槽">
                            <div className="bg-[#fff8e8] content-stretch flex gap-[4px] items-center px-[8px] py-px relative rounded-[9999px] shrink-0" data-node-id="I1:22810;430:252445" data-name="tag">
                              <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] not-italic relative shrink-0 text-[#805d26] text-[12px] whitespace-nowrap" data-node-id="I1:22810;430:252448">
                                <p className="leading-[18px]">意向沟通</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="border-0 border-[#f3f3f7] border-solid content-stretch flex h-full items-center min-h-[48px] min-w-[100px] px-[12px] py-[8px] relative shrink-0 w-[168px]" data-node-id="1:22811" data-name="table-cell-body">
                          <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-node-id="I1:22811;2985:32163" data-name="Content">
                            <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I1:22811;1312:14702" data-name="Content">
                              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] min-w-px not-italic relative text-[#1e2436] text-[14px]" data-node-id="I1:22811;1312:14703">
                                <p className="leading-[20px]">2025-02-14 10:20:11</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="border-0 border-[#f3f3f7] border-solid content-stretch flex h-full items-center min-h-[48px] min-w-[100px] px-[12px] py-[8px] relative shrink-0 w-[168px]" data-node-id="1:22812" data-name="table-cell-body">
                          <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-node-id="I1:22812;2985:32163" data-name="Content">
                            <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I1:22812;1312:14702" data-name="Content">
                              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] min-w-px not-italic relative text-[#1e2436] text-[14px]" data-node-id="I1:22812;1312:14703">
                                <p className="leading-[20px]">2025-02-14 10:20:11</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="border-0 border-[#f3f3f7] border-solid content-stretch flex h-full items-center min-h-[48px] px-[12px] py-[8px] relative shrink-0" data-node-id="1:22817" data-name="table-cell-body">
                          <div className="content-stretch flex h-full items-center justify-end relative shrink-0" data-node-id="I1:22817;578:10532" data-name="button-group">
                            <div className="content-stretch flex gap-[12px] items-center justify-end relative shrink-0" data-node-id="I1:22817;578:10532;12640:3505" data-name="按钮布局插槽">
                              <div className="content-stretch flex items-center justify-center p-[6px] relative rounded-[6px] shrink-0" data-node-id="I1:22817;578:10532;12640:3505;1:22814" data-name="button">
                                <div className="relative shrink-0 size-[16px]" data-node-id="I1:22817;578:10532;12640:3505;1:22814;802:23041" data-name="common-linear-add">
                                  <MoreIcon />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Row>
                      <Row className="bg-white border-[#f3f3f7] border-b border-solid content-stretch flex items-start min-h-[44px] overflow-clip relative shrink-0 w-full">
                        <div className="border-[#f3f3f7] border-b border-solid content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-[48px] min-w-[240px] px-[12px] py-[8px] relative" data-node-id="1:22837" data-name="table-cell-body">
                          <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-node-id="I1:22837;2835:114404" data-name="内容插槽">
                            <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-node-id="I1:22837;2835:114404;1:22823" data-name="Content">
                              <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#1e2436] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="I1:22837;2835:114404;1:22824">
                                <p className="leading-[20px] overflow-hidden text-ellipsis">阿里巴巴网络技术有限公司</p>
                              </div>
                            </div>
                            <div className="content-center flex flex-wrap gap-[2px_6px] h-[20px] items-center relative shrink-0 w-full" data-node-id="I1:22837;2835:114404;1:22827" data-name="说明文字插槽">
                              <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#646e87] text-[12px] text-ellipsis whitespace-nowrap" data-node-id="I1:22837;2835:114404;1:22829">
                                <p className="leading-[18px] overflow-hidden text-ellipsis">客户数 4</p>
                              </div>
                              <div className="h-[10px] relative shrink-0 w-0" data-node-id="I1:22837;2835:114404;1:22830">
                                <div className="absolute inset-[0_-0.5px]">
                                  <img alt="" className="block max-w-none size-full" src={imgVector2} />
                                </div>
                              </div>
                              <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#646e87] text-[12px] text-ellipsis whitespace-nowrap" data-node-id="I1:22837;2835:114404;1:22833">
                                <p className="leading-[18px] overflow-hidden text-ellipsis">商户数 12</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="border-0 border-[#f3f3f7] border-solid content-stretch flex h-full items-center min-h-[48px] min-w-[90px] px-[12px] py-[8px] relative shrink-0 w-[90px]" data-node-id="1:22838" data-name="table-cell-body">
                          <div className="content-center flex flex-[1_0_0] flex-wrap gap-y-[4px] h-full items-center min-w-px relative" data-node-id="1:22839" data-name="标签插槽">
                            <Tag className="bg-[#eef2fe] border border-[#c7d6fe] border-solid content-stretch flex gap-[2px] items-center px-[6px] py-px relative rounded-[9999px] shrink-0" property1="Variant5" />
                          </div>
                        </div>
                        <div className="border-0 border-[#f3f3f7] border-solid content-stretch flex flex-[1_0_0] h-full items-center min-h-[48px] min-w-[80px] px-[12px] py-[8px] relative" data-node-id="1:22844" data-name="table-cell-body">
                          <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-node-id="I1:22844;2985:32162" data-name="Content">
                            <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I1:22844;574:4502" data-name="Content">
                              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#1e2436] text-[14px] text-ellipsis" data-node-id="I1:22844;574:4503">
                                <p className="leading-[20px]">9</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="border-0 border-[#f3f3f7] border-solid content-stretch flex flex-[1_0_0] h-full items-center min-h-[48px] min-w-[80px] px-[12px] py-[8px] relative" data-node-id="1:22845" data-name="table-cell-body">
                          <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-node-id="I1:22845;2985:32162" data-name="Content">
                            <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I1:22845;574:4502" data-name="Content">
                              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#1e2436] text-[14px] text-ellipsis" data-node-id="I1:22845;574:4503">
                                <p className="leading-[20px]">1</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="border-0 border-[#f3f3f7] border-solid content-stretch flex flex-[1_0_0] h-full items-center min-h-[48px] min-w-[120px] px-[12px] py-[8px] relative" data-node-id="1:22854" data-name="table-cell-body">
                          <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-node-id="I1:22854;2985:32162" data-name="Content">
                            <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I1:22854;574:4502" data-name="Content">
                              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#1e2436] text-[14px] text-ellipsis" data-node-id="I1:22854;574:4503">
                                <p className="leading-[20px]">蔡徐坤</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="border-0 border-[#f3f3f7] border-solid content-stretch flex flex-[1_0_0] h-full items-center min-h-[48px] min-w-[120px] px-[12px] py-[8px] relative" data-node-id="1:22855" data-name="table-cell-body">
                          <div className="content-center flex flex-[1_0_0] flex-wrap gap-y-[4px] h-full items-center min-w-px relative" data-node-id="I1:22855;366:246420" data-name="标签插槽">
                            <div className="bg-[#fff8e8] content-stretch flex gap-[4px] items-center px-[8px] py-px relative rounded-[9999px] shrink-0" data-node-id="I1:22855;430:252445" data-name="tag">
                              <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] not-italic relative shrink-0 text-[#805d26] text-[12px] whitespace-nowrap" data-node-id="I1:22855;430:252448">
                                <p className="leading-[18px]">意向沟通</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="border-0 border-[#f3f3f7] border-solid content-stretch flex h-full items-center min-h-[48px] min-w-[100px] px-[12px] py-[8px] relative shrink-0 w-[168px]" data-node-id="1:22856" data-name="table-cell-body">
                          <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-node-id="I1:22856;2985:32163" data-name="Content">
                            <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I1:22856;1312:14702" data-name="Content">
                              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] min-w-px not-italic relative text-[#1e2436] text-[14px]" data-node-id="I1:22856;1312:14703">
                                <p className="leading-[20px]">2025-02-14 10:20:11</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="border-0 border-[#f3f3f7] border-solid content-stretch flex h-full items-center min-h-[48px] min-w-[100px] px-[12px] py-[8px] relative shrink-0 w-[168px]" data-node-id="1:22857" data-name="table-cell-body">
                          <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-node-id="I1:22857;2985:32163" data-name="Content">
                            <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I1:22857;1312:14702" data-name="Content">
                              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] min-w-px not-italic relative text-[#1e2436] text-[14px]" data-node-id="I1:22857;1312:14703">
                                <p className="leading-[20px]">2025-02-14 10:20:11</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="border-0 border-[#f3f3f7] border-solid content-stretch flex h-full items-center min-h-[48px] px-[12px] py-[8px] relative shrink-0" data-node-id="1:22862" data-name="table-cell-body">
                          <div className="content-stretch flex h-full items-center justify-end relative shrink-0" data-node-id="I1:22862;578:10532" data-name="button-group">
                            <div className="content-stretch flex gap-[12px] items-center justify-end relative shrink-0" data-node-id="I1:22862;578:10532;12640:3505" data-name="按钮布局插槽">
                              <div className="content-stretch flex items-center justify-center p-[6px] relative rounded-[6px] shrink-0" data-node-id="I1:22862;578:10532;12640:3505;1:22859" data-name="button">
                                <div className="relative shrink-0 size-[16px]" data-node-id="I1:22862;578:10532;12640:3505;1:22859;802:23041" data-name="common-linear-add">
                                  <MoreIcon />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Row>
                    </div>
                  </div>
                  <div
                    className="simple-table-header-scroll"
                    data-node-id="1:22864"
                    onScroll={(event) => syncTableScroll("header", event.currentTarget.scrollLeft)}
                    ref={tableHeaderScrollRef}
                  >
                    <div className="bg-[#f8f8fb] border-[#f3f3f7] border-b border-solid content-stretch flex items-start overflow-clip pointer-events-auto rounded-[6px] sticky top-0" data-name="row">
                      <div className="content-stretch flex flex-[1_0_0] h-[40px] items-center min-h-[40px] min-w-[240px] px-[12px] py-[8px] relative" data-node-id="1:22867" data-name="table-cell-header">
                        <div className="content-stretch flex gap-[4px] h-full items-center relative shrink-0 w-[136px]" data-node-id="I1:22867;567:4277" data-name="Content">
                          <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#646e87] text-[12px] text-ellipsis whitespace-nowrap" data-node-id="I1:22867;566:12188">
                            <p className="leading-[18px]">集团信息</p>
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex gap-[8px] h-[40px] items-center min-h-[40px] min-w-[90px] px-[12px] py-[8px] relative shrink-0 w-[90px]" data-node-id="1:22869" data-name="table-cell-header">
                        <div className="content-stretch flex gap-[4px] h-full items-center relative shrink-0" data-node-id="I1:22869;567:4143" data-name="Content">
                          <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#646e87] text-[12px] text-ellipsis whitespace-nowrap" data-node-id="I1:22869;566:13639">
                            <p className="leading-[18px]">等级</p>
                          </div>
                          <div className="relative shrink-0 size-[12px]" data-node-id="I1:22869;566:13640" data-name="Icon">
                            <img alt="" className="design-icon-native" src={imgCommonLinearFilter} />
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-[1_0_0] h-[40px] items-center min-h-[40px] min-w-[80px] px-[12px] py-[8px] relative" data-node-id="1:22870" data-name="table-cell-header">
                        <div className="content-stretch flex gap-[4px] h-full items-center relative shrink-0 w-[136px]" data-node-id="I1:22870;567:4277" data-name="Content">
                          <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#646e87] text-[12px] text-ellipsis whitespace-nowrap" data-node-id="I1:22870;566:12188">
                            <p className="leading-[18px]">产品</p>
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-[1_0_0] h-[40px] items-center min-h-[40px] min-w-[80px] px-[12px] py-[8px] relative" data-node-id="1:22871" data-name="table-cell-header">
                        <div className="content-stretch flex gap-[4px] h-full items-center relative shrink-0 w-[136px]" data-node-id="I1:22871;567:4277" data-name="Content">
                          <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#646e87] text-[12px] text-ellipsis whitespace-nowrap" data-node-id="I1:22871;566:12188">
                            <p className="leading-[18px]">商机</p>
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-[1_0_0] gap-[8px] h-[40px] items-center min-h-[40px] min-w-[120px] px-[12px] py-[8px] relative" data-node-id="1:22872" data-name="table-cell-header">
                        <div className="content-stretch flex gap-[4px] h-full items-center relative shrink-0" data-node-id="I1:22872;567:4143" data-name="Content">
                          <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#646e87] text-[12px] text-ellipsis whitespace-nowrap" data-node-id="I1:22872;566:13639">
                            <p className="leading-[18px]">负责人</p>
                          </div>
                          <div className="relative shrink-0 size-[12px]" data-node-id="I1:22872;566:13640" data-name="Icon">
                            <img alt="" className="design-icon-native" src={imgCommonLinearFilter} />
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-[1_0_0] gap-[8px] h-[40px] items-center min-h-[40px] min-w-[120px] px-[12px] py-[8px] relative" data-node-id="1:22873" data-name="table-cell-header">
                        <div className="content-stretch flex gap-[4px] h-full items-center relative shrink-0" data-node-id="I1:22873;567:4143" data-name="Content">
                          <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#646e87] text-[12px] text-ellipsis whitespace-nowrap" data-node-id="I1:22873;566:13639">
                            <p className="leading-[18px]">生命周期</p>
                          </div>
                          <div className="relative shrink-0 size-[12px]" data-node-id="I1:22873;566:13640" data-name="Icon">
                            <img alt="" className="design-icon-native" src={imgCommonLinearFilter} />
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex gap-[8px] h-[40px] items-center min-h-[40px] px-[12px] py-[8px] relative shrink-0 w-[168px]" data-node-id="1:22874" data-name="table-cell-header">
                        <div className="content-stretch flex gap-[4px] h-full items-center relative shrink-0" data-node-id="I1:22874;567:4215" data-name="Content">
                          <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#646e87] text-[12px] text-ellipsis whitespace-nowrap" data-node-id="I1:22874;567:4216">
                            <p className="leading-[18px]">创建时间</p>
                          </div>
                          <div className="relative shrink-0 size-[12px]" data-node-id="I1:22874;567:4218" data-name="table-cell-sorter">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgTableCellSorter} />
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex gap-[8px] h-[40px] items-center min-h-[40px] px-[12px] py-[8px] relative shrink-0 w-[168px]" data-node-id="1:22875" data-name="table-cell-header">
                        <div className="content-stretch flex gap-[4px] h-full items-center relative shrink-0" data-node-id="I1:22875;567:4215" data-name="Content">
                          <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#646e87] text-[12px] text-ellipsis whitespace-nowrap" data-node-id="I1:22875;567:4216">
                            <p className="leading-[18px]">更新时间</p>
                          </div>
                          <div className="relative shrink-0 size-[12px]" data-node-id="I1:22875;567:4218" data-name="table-cell-sorter">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgTableCellSorter} />
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex h-[40px] items-center min-h-[40px] px-[12px] py-[8px] relative shrink-0 w-[52px]" data-node-id="1:22880" data-name="table-cell-header">
                        <div className="content-stretch flex gap-[4px] h-full items-center relative shrink-0" data-node-id="I1:22880;567:4275" data-name="Content">
                          <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#646e87] text-[12px] text-ellipsis whitespace-nowrap" data-node-id="I1:22880;566:13545">
                            <p className="leading-[18px]">操作</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              <div className="list-card-paginator bg-white border-[#f3f3f7] border-solid border-t content-stretch drop-shadow-[0px_-1px_0.5px_rgba(20,41,79,0.02),0px_-2px_2px_rgba(20,41,79,0.01)] flex gap-[8px] items-center justify-end p-[12px] shrink-0 w-full" data-node-id="1:22881" data-name="Paginator">
              <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-node-id="1:22882" data-name="showTotal">
                <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Source_Han_Sans_CN:Regular'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#646e87] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="1:22883">
                  <p className="leading-[20px] overflow-hidden text-ellipsis">共50条</p>
                </div>
              </div>
              <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-node-id="1:22884" data-name="paginator">
                <div className="content-stretch flex items-center justify-center p-[8px] relative rounded-[8px] shrink-0" data-node-id="1:22885" data-name="_paginator-iconbutton">
                  <div className="relative shrink-0 size-[12px]" data-node-id="I1:22885;884:9112" data-name="common-linear-location-left">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCommonLinearLocationLeft} />
                  </div>
                </div>
                <div className="content-stretch flex items-center justify-center p-[8px] relative rounded-[8px] shrink-0" data-node-id="1:22886" data-name="_paginator-iconbutton">
                  <div className="relative shrink-0 size-[12px]" data-node-id="I1:22886;884:9104" data-name="common-linear-arrow-left">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCommonLinearArrowLeft} />
                  </div>
                </div>
                <div className="bg-[#f3f3f7] content-stretch flex flex-col items-center justify-center relative rounded-[6px] shrink-0 size-[28px]" data-node-id="1:22887" data-name="_paginator-cell-text">
                  <div className="[word-break:break-word] flex flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#1e2436] text-[14px] whitespace-nowrap" data-node-id="I1:22887;884:9333">
                    <p className="leading-[20px]">1</p>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-center justify-center relative rounded-[8px] shrink-0 size-[28px]" data-node-id="1:22888" data-name="_paginator-cell-text">
                  <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#646e87] text-[14px] whitespace-nowrap" data-node-id="I1:22888;884:9339">
                    <p className="leading-[20px]">2</p>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-center justify-center relative rounded-[8px] shrink-0 size-[28px]" data-node-id="1:22889" data-name="_paginator-cell-text">
                  <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#646e87] text-[14px] whitespace-nowrap" data-node-id="I1:22889;884:9339">
                    <p className="leading-[20px]">3</p>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-center justify-center relative rounded-[8px] shrink-0 size-[28px]" data-node-id="1:22890" data-name="_paginator-cell-text">
                  <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#646e87] text-[14px] whitespace-nowrap" data-node-id="I1:22890;884:9339">
                    <p className="leading-[20px]">4</p>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-center justify-center relative rounded-[8px] shrink-0 size-[28px]" data-node-id="1:22891" data-name="_paginator-cell-text">
                  <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#646e87] text-[14px] whitespace-nowrap" data-node-id="I1:22891;884:9339">
                    <p className="leading-[20px]">5</p>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-center justify-center relative rounded-[8px] shrink-0 size-[28px]" data-node-id="1:22892" data-name="_paginator-cell-text">
                  <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#646e87] text-[14px] whitespace-nowrap" data-node-id="I1:22892;884:9339">
                    <p className="leading-[20px]">...</p>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-center justify-center relative rounded-[8px] shrink-0 size-[28px]" data-node-id="1:22893" data-name="_paginator-cell-text">
                  <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#646e87] text-[14px] whitespace-nowrap" data-node-id="I1:22893;884:9339">
                    <p className="leading-[20px]">20</p>
                  </div>
                </div>
                <div className="content-stretch flex items-center justify-center p-[8px] relative rounded-[8px] shrink-0" data-node-id="1:22894" data-name="_paginator-iconbutton">
                  <div className="relative shrink-0 size-[12px]" data-node-id="I1:22894;884:9120" data-name="common-linear-arrow-right">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCommonLinearArrowRight1} />
                  </div>
                </div>
                <div className="content-stretch flex items-center justify-center p-[8px] relative rounded-[8px] shrink-0" data-node-id="1:22895" data-name="_paginator-iconbutton">
                  <div className="relative shrink-0 size-[12px]" data-node-id="I1:22895;884:9128" data-name="common-linear-location-right">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCommonLinearLocationRight} />
                  </div>
                </div>
              </div>
              <div className="bg-white border border-[#e7e8ef] border-solid content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative rounded-[8px] shrink-0 w-[88px]" data-node-id="1:22896" data-name="sizeCanChange">
                <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-node-id="I1:22896;237:3950" data-name="Content">
                  <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Source_Han_Sans_CN:Regular'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#646e87] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="I1:22896;237:3952">
                    <p className="leading-[20px] overflow-hidden text-ellipsis">20条/页</p>
                  </div>
                </div>
                <div className="relative shrink-0 size-[12px]" data-node-id="I1:22896;237:3954" data-name="Icon">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon} />
                </div>
              </div>
            </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        </div>
      </DetailNavigationContext.Provider>
    </SearchContext.Provider>
  );
}
