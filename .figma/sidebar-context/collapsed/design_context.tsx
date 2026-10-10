const assetPathPrefix = "./assets";
const imgGroup = `${assetPathPrefix}/5b3de.svg`;
const imgVideoCircle = `${assetPathPrefix}/56994.svg`;
const imgGrid6 = `${assetPathPrefix}/17aa3.svg`;
const imgTaskSquare = `${assetPathPrefix}/bc535.svg`;

type MenuProps = {
  className?: string;
  propValue?: "收起";
};

function Menu({ className, propValue = "收起" }: MenuProps) {
  return (
    <div className={className || "content-stretch flex flex-col h-[747px] items-start px-[12px] relative"} data-node-id="1833:44545">
      <div className="content-stretch flex gap-[8px] items-center pb-[12px] pt-[16px] px-[8px] relative shrink-0 w-[40px]" data-node-id="1833:44546" data-name="logo">
        <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="1833:44547">
          <div className="relative shrink-0 size-[24px]" data-node-id="1833:44548" data-name="Logo">
            <div className="absolute inset-[8.33%_10.68%_8.33%_10.42%]" data-node-id="I1833:44548;107:715" data-name="Group">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup} />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px overflow-x-clip overflow-y-auto pt-[8px] relative" data-node-id="1833:44554" data-name="Navigation">
        <div className="bg-[rgba(60,69,93,0.3)] content-stretch flex gap-[8px] h-[40px] items-center relative rounded-[6px] shrink-0" data-node-id="1833:44555" data-name="navigation-item-1st-level">
          <div className="content-stretch flex items-center relative shrink-0 w-[192px]" data-node-id="I1833:44555;908:27495" data-name="Content">
            <div className="content-stretch flex items-center px-[12px] py-[8px] relative shrink-0" data-node-id="I1833:44555;908:27496" data-name="Icon">
              <div className="content-stretch flex items-center justify-center relative shrink-0" data-node-id="I1833:44555;908:27497" data-name="尺寸=md">
                <div className="overflow-clip relative shrink-0 size-[16px]" data-node-id="I1833:44555;908:27497;114:779" data-name="sidebar-filled-home">
                  <div className="absolute contents inset-[5.43%_5.37%_5.42%_5.37%]" data-node-id="I1833:44555;908:27497;114:779;110:4683" data-name="home">
                    <div className="absolute inset-[5.43%_5.37%_5.42%_5.37%]" data-node-id="I1833:44555;908:27497;114:779;110:4684" data-name="video-circle">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVideoCircle} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a className="content-stretch cursor-pointer flex gap-[8px] h-[40px] items-center relative rounded-[8px] shrink-0" data-node-id="1833:44556" data-name="navigation-item-1st-level">
          <div className="content-stretch flex items-center relative shrink-0 w-[192px]" data-node-id="I1833:44556;908:27469" data-name="Content">
            <div className="content-stretch flex items-center justify-center px-[12px] py-[8px] relative shrink-0" data-node-id="I1833:44556;908:27470" data-name="Icon">
              <div className="content-stretch flex items-center justify-center relative shrink-0" data-node-id="I1833:44556;908:27471" data-name="尺寸=md">
                <div className="relative shrink-0 size-[16px]" data-node-id="I1833:44556;908:27471;114:779" data-name="common-linear-grid">
                  <div className="absolute contents inset-[8.33%]" data-node-id="I1833:44556;908:27471;114:779;14415:35668" data-name="vuesax/linear/grid-6">
                    <div className="absolute inset-[8.33%]" data-node-id="I1833:44556;908:27471;114:779;14415:35669" data-name="grid-6">
                      <div className="absolute inset-[-5%]">
                        <img alt="" className="block max-w-none size-full" src={imgGrid6} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </a>
        <a className="content-stretch cursor-pointer flex gap-[8px] h-[40px] items-center relative rounded-[8px] shrink-0" data-node-id="1833:44557" data-name="navigation-item-1st-level">
          <div className="content-stretch flex items-center relative shrink-0 w-[192px]" data-node-id="I1833:44557;908:27469" data-name="Content">
            <div className="content-stretch flex items-center justify-center px-[12px] py-[8px] relative shrink-0" data-node-id="I1833:44557;908:27470" data-name="Icon">
              <div className="content-stretch flex items-center justify-center relative shrink-0" data-node-id="I1833:44557;908:27471" data-name="尺寸=md">
                <div className="relative shrink-0 size-[16px]" data-node-id="I1833:44557;908:27471;114:779" data-name="common-linear-file" />
              </div>
            </div>
          </div>
        </a>
        <a className="content-stretch cursor-pointer flex gap-[8px] h-[40px] items-center relative rounded-[8px] shrink-0" data-node-id="1833:44558" data-name="navigation-item-1st-level">
          <div className="content-stretch flex items-center relative shrink-0 w-[192px]" data-node-id="I1833:44558;908:27469" data-name="Content">
            <div className="content-stretch flex items-center justify-center px-[12px] py-[8px] relative shrink-0" data-node-id="I1833:44558;908:27470" data-name="Icon">
              <div className="content-stretch flex items-center justify-center relative shrink-0" data-node-id="I1833:44558;908:27471" data-name="尺寸=md">
                <div className="relative shrink-0 size-[16px]" data-node-id="I1833:44558;908:27471;114:779" data-name="common-linear-todo">
                  <div className="absolute inset-[4.17%]" data-node-id="I1833:44558;908:27471;114:779;1290:14543" data-name="task-square">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgTaskSquare} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
      <div className="content-stretch flex flex-col items-start pb-[16px] pt-[12px] relative shrink-0 w-full" data-node-id="1833:44567">
        <div className="content-stretch flex h-[28px] items-center relative shrink-0 w-full" data-node-id="1833:44568" data-name="tabs-capsule">
          <div className="bg-[rgba(60,69,93,0.3)] content-stretch flex flex-[1_0_0] gap-[2px] items-center min-w-px overflow-clip p-[2px] relative rounded-[6px]" data-node-id="I1833:44568;1220:72564" data-name="tabs水平插槽">
            <div className="flex flex-[1_0_0] flex-row items-center self-stretch" data-node-id="I1833:44568;1220:72564;1833:44570">
              <div className="bg-[#15171e] content-stretch flex flex-[1_0_0] gap-[4px] h-full items-center justify-center min-w-px px-[2px] py-[3px] relative rounded-[4px] shadow-[0px_2px_4px_0px_rgba(18,50,108,0.01),0px_8px_16px_0px_rgba(18,50,108,0.02)]" data-name="tabs-capsule-cell">
                <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[12px] text-center text-ellipsis text-white whitespace-nowrap" data-node-id="I1833:44568;1220:72564;1833:44570;1220:72548">
                  <p className="leading-[18px] overflow-hidden text-ellipsis">暗</p>
                </div>
              </div>
            </div>
            <div className="flex flex-[1_0_0] flex-row items-center self-stretch" data-node-id="I1833:44568;1220:72564;1833:44571">
              <a className="content-stretch cursor-pointer flex flex-[1_0_0] gap-[4px] h-full items-center justify-center min-w-px px-[2px] py-[4px] relative rounded-[4px]" data-name="tabs-capsule-cell">
                <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#bdc2d1] text-[12px] text-center text-ellipsis whitespace-nowrap" data-node-id="I1833:44568;1220:72564;1833:44571;1220:72538">
                  <p className="leading-[18px] overflow-hidden text-ellipsis">亮</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}