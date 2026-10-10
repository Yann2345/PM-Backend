const assetPathPrefix = `${import.meta.env.BASE_URL}assets/form`;
const imgGroup = `${assetPathPrefix}/282f0.svg`;
const imgGroup1 = `${assetPathPrefix}/35434.svg`;
const imgCommonLinearClose = `${assetPathPrefix}/fe26f.svg`;
const imgEllipse857 = `${assetPathPrefix}/62d82.svg`;
const imgTickCircle = `${assetPathPrefix}/dba32.svg`;
const imgTickCircle1 = `${assetPathPrefix}/ca5f4.svg`;
const imgCommonLinearUpload = `${assetPathPrefix}/9dde4.svg`;
const imgIcon = `${assetPathPrefix}/0f66b.svg`;
const imgResizer = `${assetPathPrefix}/5c333.svg`;

type ButtonGroupProps = {
  className?: string;
  children?: React.ReactNode | null;
  more?: "False";
  prop2?: boolean;
  prop3?: boolean;
  prop4?: "False";
  prop5?: "False";
  prop6?: "False";
  propValue1?: "sm";
  propValue2?: "长方形";
};

function ButtonGroup({ className, children = null, more = "False", prop2 = false, prop3 = true, prop4 = "False", prop5 = "False", prop6 = "False", propValue1 = "sm", propValue2 = "长方形" }: ButtonGroupProps) {
  return (
    <div className={className || "content-stretch flex items-center justify-end relative"} data-node-id="120:11547">
      <div className="content-stretch flex items-center justify-end relative shrink-0" data-node-id="120:11548" data-name="按钮布局插槽">
        {children || (
          <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0" data-node-id="120:11549" data-name="按钮组">
            <div className="bg-white border border-[#d3d8de] border-solid content-stretch flex gap-[6px] items-center justify-center min-w-[56px] px-[8px] py-[6px] relative rounded-[8px] shrink-0" data-node-id="120:11550" data-name="button">
              <div className="[word-break:break-word] flex flex-col font-['Source_Han_Sans_CN:SemiBold'] justify-center leading-[0] not-italic relative shrink-0 text-[#3d4652] text-[14px] text-center whitespace-nowrap" data-node-id="I120:11550;150:1172">
                <p className="leading-[20px]">Button Text</p>
              </div>
            </div>
            <div className="bg-white border border-[#d3d8de] border-solid content-stretch flex gap-[6px] items-center justify-center min-w-[56px] px-[8px] py-[6px] relative rounded-[8px] shrink-0" data-node-id="120:11551" data-name="button">
              <div className="[word-break:break-word] flex flex-col font-['Source_Han_Sans_CN:SemiBold'] justify-center leading-[0] not-italic relative shrink-0 text-[#3d4652] text-[14px] text-center whitespace-nowrap" data-node-id="I120:11551;150:1172">
                <p className="leading-[20px]">Button Text</p>
              </div>
            </div>
            <div className="bg-[#0c71ff] content-stretch flex gap-[6px] items-center justify-center min-w-[56px] px-[8px] py-[6px] relative rounded-[8px] shrink-0" data-node-id="120:11552" data-name="button">
              <div className="[word-break:break-word] flex flex-col font-['Source_Han_Sans_CN:SemiBold'] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap" data-node-id="I120:11552;150:1168">
                <p className="leading-[20px]">Button Text</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

type FormScreenProps = {
  onClose: () => void;
};

export default function Component2({ onClose }: FormScreenProps) {
  return (
    <div className="bg-[#f0f1f7] border border-[#e5e8eb] border-solid relative size-full" data-node-id="1054:58281" data-name="表单页-填写类-方案2">
      <div className="absolute content-stretch flex flex-col inset-0 items-start" data-node-id="1054:66748">
        <div className="border-[#e5e8eb] border-b border-solid content-stretch flex h-[56px] items-center justify-between overflow-clip px-[32px] relative shrink-0 w-full" data-node-id="1054:58282" data-name="01 顶部品牌栏">
          <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-node-id="1054:58283" data-name="品牌与流程">
            <div className="h-[24px] relative shrink-0 w-[90px]" data-node-id="1054:58284" data-name="Logo">
              <div className="absolute contents inset-[8.33%_3.14%_8.33%_2.78%]" data-node-id="I1054:58284;4343:5333" data-name="Group">
                <div className="absolute inset-[8.33%_76.18%_8.33%_2.78%]" data-node-id="I1054:58284;4343:5334" data-name="Group">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup} />
                </div>
                <div className="absolute inset-[29.7%_3.14%_14.2%_28.64%]" data-node-id="I1054:58284;4343:5337" data-name="Group">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup1} />
                </div>
              </div>
            </div>
            <div className="bg-[#e5e8eb] h-[20px] relative shrink-0 w-px" data-node-id="1054:58285" data-name="分隔线" />
            <p className="[word-break:break-word] font-['PingFang_SC:Medium'] leading-[22px] not-italic relative shrink-0 text-[#1e2436] text-[16px] whitespace-nowrap" data-node-id="1054:58286">
              创建促销活动
            </p>
          </div>
          <button aria-label="关闭并返回上一页" className="content-stretch cursor-pointer flex gap-[8px] items-center overflow-clip relative shrink-0" data-node-id="1054:58287" data-name="退出创建" onClick={onClose} type="button">
            <div className="relative shrink-0 size-[16px]" data-node-id="1054:58289" data-name="common-linear-close">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCommonLinearClose} />
            </div>
          </button>
        </div>
        <div className="content-stretch flex flex-[1_0_0] items-start justify-center min-h-px overflow-x-clip overflow-y-auto relative w-full" data-node-id="1054:58290">
          <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-start min-w-px px-[32px] pb-[96px] pt-[20px] relative" data-node-id="1054:58292">
            <div className="bg-white border border-[#edeef3] border-solid content-stretch drop-shadow-[0px_1px_1px_rgba(20,41,79,0.03)] flex flex-col gap-[20px] items-start p-[20px] rounded-[8px] shrink-0 sticky top-0 w-[280px]" data-node-id="1054:58387">
              <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-node-id="1054:58393">
                <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-node-id="1054:58394">
                  <div className="border-2 border-[#e3e6ed] border-solid content-stretch flex flex-col gap-[3.2px] items-center justify-center min-w-[14px] relative rounded-[7999.201px] shrink-0 size-[16px]" data-node-id="1054:58395" data-name="badge">
                    <div className="absolute h-[16px] left-[7px] top-[-1px] w-[8px]" data-node-id="1054:58397">
                      <div className="absolute inset-[-6.25%_-12.5%]">
                        <img alt="" className="block max-w-none size-full" src={imgEllipse857} />
                      </div>
                    </div>
                  </div>
                  <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Medium'] leading-[22px] min-w-px not-italic relative text-[#1e2436] text-[16px]" data-node-id="1054:58398">
                    入驻信息
                  </p>
                </div>
                <div className="content-stretch flex flex-col items-start pl-[6px] relative shrink-0 w-full" data-node-id="1054:58399">
                  <div className="border-[#e3e6ed] border-l border-solid content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-node-id="1054:58400">
                    <div className="content-stretch flex gap-[8px] items-center pl-[16px] relative shrink-0 w-full" data-node-id="1054:58401" data-name="导航文字">
                      <div className="relative shrink-0 size-[14px]" data-node-id="1054:58402" data-name="common-filled-tick-circle">
                        <div className="absolute inset-[8.33%]" data-node-id="I1054:58402;110:4089" data-name="tick-circle">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgTickCircle} />
                        </div>
                      </div>
                      <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Medium'] leading-[20px] min-w-px not-italic relative text-[#0036fe] text-[14px]" data-node-id="1054:58403">
                        企业详情
                      </p>
                    </div>
                    <div className="content-stretch flex gap-[8px] items-center pl-[16px] relative shrink-0 w-full" data-node-id="1054:58405" data-name="导航文字">
                      <div className="relative shrink-0 size-[14px]" data-node-id="1054:58406" data-name="common-filled-tick-circle">
                        <div className="absolute inset-[8.33%]" data-node-id="I1054:58406;110:4089" data-name="tick-circle">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgTickCircle} />
                        </div>
                      </div>
                      <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular'] leading-[20px] min-w-px not-italic relative text-[#3c455d] text-[14px]" data-node-id="1054:58407">
                        客户主体认证
                      </p>
                    </div>
                    <div className="content-stretch flex gap-[8px] items-center pl-[16px] relative shrink-0 w-full" data-node-id="1054:58408" data-name="导航文字">
                      <div className="relative shrink-0 size-[14px]" data-node-id="1054:58409" data-name="common-filled-tick-circle">
                        <div className="absolute inset-[8.33%]" data-node-id="1054:58410" data-name="tick-circle">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgTickCircle1} />
                        </div>
                      </div>
                      <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular'] leading-[20px] min-w-px not-italic relative text-[#3c455d] text-[14px]" data-node-id="1054:58413">
                        银行卡信息
                      </p>
                    </div>
                    <div className="content-stretch flex gap-[8px] items-center pl-[16px] relative shrink-0 w-full" data-node-id="1054:58419" data-name="导航文字">
                      <div className="relative shrink-0 size-[14px]" data-node-id="1054:58420" data-name="common-filled-tick-circle">
                        <div className="absolute inset-[8.33%]" data-node-id="1054:58421" data-name="tick-circle">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgTickCircle1} />
                        </div>
                      </div>
                      <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular'] leading-[20px] min-w-px not-italic relative text-[#3c455d] text-[14px]" data-node-id="1054:58424">
                        联系人
                      </p>
                    </div>
                    <div className="content-stretch flex gap-[8px] items-center pl-[16px] relative shrink-0 w-full" data-node-id="1054:58432" data-name="导航文字">
                      <div className="relative shrink-0 size-[14px]" data-node-id="1054:58433" data-name="common-filled-tick-circle">
                        <div className="absolute inset-[8.33%]" data-node-id="I1054:58433;110:4089" data-name="tick-circle">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgTickCircle} />
                        </div>
                      </div>
                      <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular'] leading-[20px] min-w-px not-italic relative text-[#3c455d] text-[14px]" data-node-id="1054:58434">
                        业务信息
                      </p>
                    </div>
                    <div className="content-stretch flex gap-[8px] items-center pl-[16px] relative shrink-0 w-full" data-node-id="1054:58440" data-name="导航文字">
                      <div className="relative shrink-0 size-[14px]" data-node-id="1054:58441" data-name="common-filled-tick-circle">
                        <div className="absolute inset-[8.33%]" data-node-id="I1054:58441;110:4089" data-name="tick-circle">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgTickCircle} />
                        </div>
                      </div>
                      <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular'] leading-[20px] min-w-px not-italic relative text-[#3c455d] text-[14px]" data-node-id="1054:58442">
                        展业调研
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-node-id="1054:58449">
                <div className="border-2 border-[#e3e6ed] border-solid content-stretch flex flex-col gap-[3.2px] items-center justify-center min-w-[14px] relative rounded-[7999.201px] shrink-0 size-[16px]" data-node-id="1054:58450" data-name="badge" />
                <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Medium'] leading-[22px] min-w-px not-italic relative text-[#1e2436] text-[16px]" data-node-id="1054:58453">
                  补充信息
                </p>
              </div>
              <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-node-id="1054:58454">
                <div className="border-2 border-[#e3e6ed] border-solid content-stretch flex flex-col gap-[3.2px] items-center justify-center min-w-[14px] relative rounded-[7999.201px] shrink-0 size-[16px]" data-node-id="1054:58455" data-name="badge" />
                <p className="[word-break:break-word] font-['PingFang_SC:Medium'] leading-[22px] not-italic relative shrink-0 text-[#1e2436] text-[16px] whitespace-nowrap" data-node-id="1054:58458">
                  产品能力开通材料
                </p>
                <div className="bg-[#f3f3f7] content-stretch flex gap-[2px] items-center px-[4px] py-px relative rounded-[4px] shrink-0" data-node-id="1054:58459" data-name="tag">
                  <p className="[word-break:break-word] font-['PingFang_SC:Regular'] leading-[18px] not-italic relative shrink-0 text-[#3c455d] text-[12px] whitespace-nowrap" data-node-id="I1054:58459;510:8288">
                    选填
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white border border-[#edeef3] border-solid content-stretch drop-shadow-[0px_1px_0.5px_rgba(20,41,79,0.02),0px_2px_2px_rgba(20,41,79,0.01)] flex flex-[1_0_0] flex-col gap-[32px] items-start min-w-px p-[21px] relative rounded-[8px]" data-node-id="1054:59175" data-name="表单">
              <div className="relative rounded-[8px] shrink-0 w-full" data-node-id="1054:59176">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-start relative size-full">
                  <div className="content-stretch flex gap-[2px] items-start p-[8px] relative rounded-[12px] shrink-0 w-[160px]" data-node-id="1054:59177" data-name="表单标题">
                    <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Semibold'] justify-center leading-[0] not-italic relative shrink-0 text-[#1e2436] text-[18px] whitespace-nowrap" data-node-id="I1054:59177;163:13056">
                      <p className="leading-[24px]">企业详情</p>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start max-w-[640px] min-w-px relative" data-node-id="1054:66323">
                    <div className="content-stretch flex flex-col gap-[8px] items-start p-[8px] relative rounded-[8px] shrink-0 w-full" data-node-id="1054:62423" data-name="form-item">
                      <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-node-id="1054:62424" data-name="label">
                        <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-start min-w-px relative" data-node-id="1054:62425" data-name="label-item">
                          <div className="content-stretch flex items-center relative shrink-0" data-node-id="I1054:62425;1596:7980" data-name="Label">
                            <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#1e2436] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="I1054:62425;1596:7981">
                              <p className="leading-[20px] overflow-hidden text-ellipsis">公司注册证明书</p>
                            </div>
                          </div>
                        </div>
                        <div className="content-stretch flex gap-[4px] items-center justify-center px-[2px] relative rounded-[4px] shrink-0" data-node-id="1054:62426" data-name="link">
                          <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] not-italic relative shrink-0 text-[#0036fe] text-[12px] whitespace-nowrap" data-node-id="I1054:62426;1341:12598">
                            <p className="leading-[18px]">示例</p>
                          </div>
                        </div>
                      </div>
                      <div className="[word-break:break-word] flex flex-col font-['Source_Han_Sans_CN:Regular'] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#646e87] text-[12px] w-[min-content]" data-node-id="1054:62427">
                        <p className="leading-[18px] mb-0">请上传由香港特别行政区注册处办法的公司注册证明书（Certificate of Incorporation）</p>
                        <p className="leading-[18px]">格式：pdf、png、jpg；大小：不超过100MB</p>
                      </div>
                      <div className="border border-[#dadde7] border-dashed content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[20px] relative rounded-[6px] shrink-0 w-full" data-node-id="1054:62518" data-name="upload-trigger">
                        <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center justify-center min-w-px relative" data-node-id="1054:62519">
                          <div className="relative shrink-0 size-[16px]" data-node-id="1054:62537" data-name="common-linear-upload">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCommonLinearUpload} />
                          </div>
                          <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-node-id="1054:62521" data-name="text-wrapper">
                            <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] not-italic relative shrink-0 text-[#1e2436] text-[14px] w-full" data-node-id="1054:62522">
                              <p className="leading-[20px]">点击或拖拽上传</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col gap-[8px] items-start p-[8px] relative rounded-[8px] shrink-0 w-full" data-node-id="1054:59179" data-name="form-item">
                      <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-node-id="1054:59180" data-name="form-item">
                        <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-[136px]" data-node-id="I1054:59180;723:14730" data-name="label-item">
                          <div className="content-stretch flex items-center relative shrink-0" data-node-id="I1054:59180;723:14730;1596:7980" data-name="Label">
                            <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#1e2436] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="I1054:59180;723:14730;1596:7981">
                              <p className="leading-[20px] overflow-hidden text-ellipsis">营业地址</p>
                            </div>
                          </div>
                        </div>
                        <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full" data-node-id="I1054:59180;723:18900" data-name="radio-group">
                          <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-node-id="I1054:59180;723:18900;723:15516" data-name="radio-item">
                            <div className="content-stretch flex items-center py-[2px] relative shrink-0" data-node-id="I1054:59180;723:18900;723:15516;2985:27923" data-name="radio">
                              <div className="relative shrink-0 size-[16px]" data-node-id="I1054:59180;723:18900;723:15516;175:2902" data-name="radio-item">
                                <div className="absolute bg-[#0036fe] inset-0 rounded-[8px]" data-node-id="I1054:59180;723:18900;723:15516;175:2902;654:9369" data-name="Radio" />
                                <div className="absolute bg-white inset-1/4 rounded-[8px]" data-node-id="I1054:59180;723:18900;723:15516;175:2902;654:9386" data-name="Radio" />
                              </div>
                            </div>
                            <div className="content-stretch flex gap-[2px] items-center justify-center relative shrink-0" data-node-id="I1054:59180;723:18900;723:15516;2985:28264" data-name="contents">
                              <div className="[word-break:break-word] flex flex-col font-['Source_Han_Sans_CN:Regular'] justify-center leading-[0] not-italic relative shrink-0 text-[#1e2436] text-[14px] whitespace-nowrap" data-node-id="I1054:59180;723:18900;723:15516;175:2903">
                                <p className="leading-[20px]">与注册地址一致</p>
                              </div>
                            </div>
                          </div>
                          <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-node-id="I1054:59180;723:18900;723:15521" data-name="radio-item">
                            <div className="content-stretch flex items-center py-[2px] relative shrink-0" data-node-id="I1054:59180;723:18900;723:15521;2985:27924" data-name="radio">
                              <div className="relative shrink-0 size-[16px]" data-node-id="I1054:59180;723:18900;723:15521;175:2881" data-name="radio-item">
                                <div className="absolute bg-white border border-[#e3e6ed] border-solid inset-0 rounded-[8px]" data-node-id="I1054:59180;723:18900;723:15521;175:2881;175:2857" data-name="Radio" />
                              </div>
                            </div>
                            <div className="content-stretch flex gap-[2px] items-center justify-center relative shrink-0" data-node-id="I1054:59180;723:18900;723:15521;2985:28265" data-name="contents">
                              <div className="[word-break:break-word] flex flex-col font-['Source_Han_Sans_CN:Regular'] justify-center leading-[0] not-italic relative shrink-0 text-[#1e2436] text-[14px] whitespace-nowrap" data-node-id="I1054:59180;723:18900;723:15521;175:2882">
                                <p className="leading-[20px]">与注册地址不一致</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-node-id="1054:59181">
                        <div className="bg-white border border-[#e3e6ed] border-solid content-stretch flex flex-[1_0_0] gap-[8px] h-[32px] items-center min-w-px px-[12px] py-[10px] relative rounded-[6px]" data-node-id="1054:59182" data-name="select">
                          <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-node-id="I1054:59182;237:3908" data-name="Content">
                            <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Source_Han_Sans_CN:Regular'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#9097ad] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="I1054:59182;237:3910">
                              <p className="leading-[20px] overflow-hidden text-ellipsis">国家/地区</p>
                            </div>
                          </div>
                          <div className="relative shrink-0 size-[16px]" data-node-id="I1054:59182;237:3912" data-name="Icon">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon} />
                          </div>
                        </div>
                        <div className="bg-white border border-[#e3e6ed] border-solid content-stretch flex flex-[1_0_0] gap-[8px] h-[32px] items-center min-w-px px-[12px] py-[10px] relative rounded-[6px]" data-node-id="1054:59183" data-name="select">
                          <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-node-id="I1054:59183;237:3908" data-name="Content">
                            <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Source_Han_Sans_CN:Regular'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#9097ad] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="I1054:59183;237:3910">
                              <p className="leading-[20px] overflow-hidden text-ellipsis">城市</p>
                            </div>
                          </div>
                          <div className="relative shrink-0 size-[16px]" data-node-id="I1054:59183;237:3912" data-name="Icon">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon} />
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-node-id="1054:62231">
                        <div className="bg-white border border-[#e3e6ed] border-solid content-stretch flex flex-[1_0_0] gap-[8px] h-[32px] items-center min-w-px px-[12px] py-[10px] relative rounded-[6px]" data-node-id="1054:59184" data-name="input">
                          <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-node-id="I1054:59184;187:2486" data-name="Content">
                            <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Source_Han_Sans_CN:Regular'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#9097ad] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="I1054:59184;187:2488">
                              <p className="leading-[20px] overflow-hidden text-ellipsis">街道地址</p>
                            </div>
                          </div>
                        </div>
                        <div className="bg-white border border-[#e3e6ed] border-solid content-stretch flex flex-[1_0_0] gap-[8px] h-[32px] items-center min-w-px px-[12px] py-[10px] relative rounded-[6px]" data-node-id="1054:59185" data-name="input">
                          <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-node-id="I1054:59185;187:2486" data-name="Content">
                            <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Source_Han_Sans_CN:Regular'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#9097ad] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="I1054:59185;187:2488">
                              <p className="leading-[20px] overflow-hidden text-ellipsis">公寓、单元或其他</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col gap-[8px] items-start p-[8px] relative rounded-[8px] shrink-0 w-full" data-node-id="1054:62547" data-name="form-item">
                      <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-node-id="1054:62548" data-name="label">
                        <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-start min-w-px relative" data-node-id="1054:62549" data-name="label-item">
                          <div className="content-stretch flex items-center relative shrink-0" data-node-id="I1054:62549;1596:7980" data-name="Label">
                            <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#1e2436] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="I1054:62549;1596:7981">
                              <p className="leading-[20px] overflow-hidden text-ellipsis">商业登记证</p>
                            </div>
                          </div>
                        </div>
                        <div className="content-stretch flex gap-[4px] items-center justify-center px-[2px] relative rounded-[4px] shrink-0" data-node-id="1054:62550" data-name="link">
                          <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] not-italic relative shrink-0 text-[#0036fe] text-[12px] whitespace-nowrap" data-node-id="I1054:62550;1341:12598">
                            <p className="leading-[18px]">示例</p>
                          </div>
                        </div>
                      </div>
                      <div className="[word-break:break-word] flex flex-col font-['Source_Han_Sans_CN:Regular'] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#646e87] text-[12px] w-[min-content]" data-node-id="1054:62551">
                        <p className="leading-[18px] mb-0">请上传香港特别行政区政府根据《商业登记条例》发放的商业登记证（Business Registration Certificate）</p>
                        <p className="leading-[18px]">格式：pdf、png、jpg；大小：不超过100MB</p>
                      </div>
                      <div className="border border-[#dadde7] border-dashed content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[20px] relative rounded-[6px] shrink-0 w-full" data-node-id="1054:62553" data-name="upload-trigger">
                        <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center justify-center min-w-px relative" data-node-id="1054:62554">
                          <div className="relative shrink-0 size-[16px]" data-node-id="1054:62555" data-name="common-linear-upload">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCommonLinearUpload} />
                          </div>
                          <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-node-id="1054:62556" data-name="text-wrapper">
                            <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] not-italic relative shrink-0 text-[#1e2436] text-[14px] w-full" data-node-id="1054:62557">
                              <p className="leading-[20px]">点击或拖拽上传</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative rounded-[8px] shrink-0 w-full" data-node-id="1054:61470">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-start relative size-full">
                  <div className="content-stretch flex gap-[2px] items-start p-[8px] relative rounded-[12px] shrink-0 w-[160px]" data-node-id="1054:61471" data-name="表单标题">
                    <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Semibold'] justify-center leading-[0] not-italic relative shrink-0 text-[#1e2436] text-[18px] whitespace-nowrap" data-node-id="I1054:61471;163:13056">
                      <p className="leading-[24px]">商家详情</p>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start max-w-[640px] min-w-px relative" data-node-id="1054:66324">
                    <div className="content-stretch flex flex-col gap-[8px] items-start p-[8px] relative rounded-[8px] shrink-0 w-full" data-node-id="1054:64471" data-name="form-item">
                      <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-node-id="1054:64472" data-name="label">
                        <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-start min-w-px relative" data-node-id="1054:64473" data-name="label-item">
                          <div className="content-stretch flex items-center relative shrink-0" data-node-id="I1054:64473;1596:7980" data-name="Label">
                            <div className="[word-break:break-word] flex flex-col font-['Source_Han_Sans_CN:Medium'] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#1e2436] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="I1054:64473;1596:7981">
                              <p className="leading-[20px] overflow-hidden text-ellipsis">NNC1法团成立文件/NAR1周年报</p>
                            </div>
                          </div>
                        </div>
                        <div className="content-stretch flex gap-[4px] items-center justify-center px-[4px] relative rounded-[4px] shrink-0" data-node-id="1054:64474" data-name="link">
                          <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] not-italic relative shrink-0 text-[#0036fe] text-[12px] whitespace-nowrap" data-node-id="I1054:64474;1341:12598">
                            <p className="leading-[18px]">示例</p>
                          </div>
                        </div>
                      </div>
                      <div className="[word-break:break-word] flex flex-col font-['Source_Han_Sans_CN:Regular'] justify-center leading-[0] not-italic relative shrink-0 text-[#646e87] text-[12px] w-full" data-node-id="1054:64475">
                        <p className="leading-[18px] mb-0">{`成立<1年的公司，请上传当地监管机构签发的法团成立文件NNCI`}</p>
                        <p className="leading-[18px]">格式：pdf、png、jpg；大小：不超过100MB</p>
                      </div>
                      <div className="border border-[#dadde7] border-dashed content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[20px] relative rounded-[6px] shrink-0 w-full" data-node-id="1054:64550" data-name="upload-trigger">
                        <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center justify-center min-w-px relative" data-node-id="1054:64551">
                          <div className="relative shrink-0 size-[16px]" data-node-id="1054:64552" data-name="common-linear-upload">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCommonLinearUpload} />
                          </div>
                          <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-node-id="1054:64553" data-name="text-wrapper">
                            <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] not-italic relative shrink-0 text-[#1e2436] text-[14px] w-full" data-node-id="1054:64554">
                              <p className="leading-[20px]">点击或拖拽上传</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start p-[8px] relative rounded-[8px] shrink-0 w-full" data-node-id="1054:61484" data-name="form-item">
                      <div className="content-stretch flex flex-col gap-[8px] items-start relative rounded-[8px] shrink-0 w-full" data-node-id="1054:61485" data-name="form-item">
                        <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-[136px]" data-node-id="I1054:61485;723:14730" data-name="label-item">
                          <div className="content-stretch flex items-center relative shrink-0" data-node-id="I1054:61485;723:14730;1596:7980" data-name="Label">
                            <div className="[word-break:break-word] flex flex-col font-['Source_Han_Sans_CN:Medium'] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#1e2436] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="I1054:61485;723:14730;1596:7981">
                              <p className="leading-[20px] overflow-hidden text-ellipsis">是否有别的企业持有您的企业至少25%以上的股份？</p>
                            </div>
                          </div>
                        </div>
                        <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full" data-node-id="I1054:61485;723:18900" data-name="radio-group">
                          <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-node-id="I1054:61485;723:18900;723:15516" data-name="radio-item">
                            <div className="content-stretch flex items-center py-[2px] relative shrink-0" data-node-id="I1054:61485;723:18900;723:15516;2985:27923" data-name="radio">
                              <div className="relative shrink-0 size-[16px]" data-node-id="I1054:61485;723:18900;723:15516;175:2902" data-name="radio-item">
                                <div className="absolute bg-[#0036fe] inset-0 rounded-[8px]" data-node-id="I1054:61485;723:18900;723:15516;175:2902;654:9369" data-name="Radio" />
                                <div className="absolute bg-white inset-1/4 rounded-[8px]" data-node-id="I1054:61485;723:18900;723:15516;175:2902;654:9386" data-name="Radio" />
                              </div>
                            </div>
                            <div className="content-stretch flex gap-[2px] items-center justify-center relative shrink-0" data-node-id="I1054:61485;723:18900;723:15516;2985:28264" data-name="contents">
                              <div className="[word-break:break-word] flex flex-col font-['Source_Han_Sans_CN:Regular'] justify-center leading-[0] not-italic relative shrink-0 text-[#1e2436] text-[14px] whitespace-nowrap" data-node-id="I1054:61485;723:18900;723:15516;175:2903">
                                <p className="leading-[20px]">是</p>
                              </div>
                            </div>
                          </div>
                          <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-node-id="I1054:61485;723:18900;723:15521" data-name="radio-item">
                            <div className="content-stretch flex items-center py-[2px] relative shrink-0" data-node-id="I1054:61485;723:18900;723:15521;2985:27924" data-name="radio">
                              <div className="relative shrink-0 size-[16px]" data-node-id="I1054:61485;723:18900;723:15521;175:2881" data-name="radio-item">
                                <div className="absolute bg-white border border-[#e3e6ed] border-solid inset-0 rounded-[8px]" data-node-id="I1054:61485;723:18900;723:15521;175:2881;175:2857" data-name="Radio" />
                              </div>
                            </div>
                            <div className="content-stretch flex gap-[2px] items-center justify-center relative shrink-0" data-node-id="I1054:61485;723:18900;723:15521;2985:28265" data-name="contents">
                              <div className="[word-break:break-word] flex flex-col font-['Source_Han_Sans_CN:Regular'] justify-center leading-[0] not-italic relative shrink-0 text-[#1e2436] text-[14px] whitespace-nowrap" data-node-id="I1054:61485;723:18900;723:15521;175:2882">
                                <p className="leading-[20px]">否</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col gap-[8px] items-start p-[8px] relative rounded-[8px] shrink-0 w-full" data-node-id="1054:64660" data-name="form-item">
                      <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-node-id="1054:64661" data-name="label">
                        <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-start min-w-px relative" data-node-id="1054:64662" data-name="label-item">
                          <div className="content-stretch flex items-center relative shrink-0" data-node-id="I1054:64662;1596:7980" data-name="Label">
                            <div className="[word-break:break-word] flex flex-col font-['Source_Han_Sans_CN:Medium'] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#1e2436] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="I1054:64662;1596:7981">
                              <p className="leading-[20px] overflow-hidden text-ellipsis">股权架构图</p>
                            </div>
                          </div>
                        </div>
                        <div className="content-stretch flex gap-[4px] items-center justify-center px-[4px] relative rounded-[4px] shrink-0" data-node-id="1054:64663" data-name="link">
                          <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] not-italic relative shrink-0 text-[#0036fe] text-[12px] whitespace-nowrap" data-node-id="I1054:64663;1341:12598">
                            <p className="leading-[18px]">示例</p>
                          </div>
                        </div>
                      </div>
                      <div className="[word-break:break-word] flex flex-col font-['Source_Han_Sans_CN:Regular'] justify-center leading-[0] not-italic relative shrink-0 text-[#646e87] text-[12px] w-full" data-node-id="1054:64664">
                        <p className="leading-[18px] mb-0">请上传香港特别行政区政府根据《商业登记条例》发放的商业登记证（Business Registration Certificate）</p>
                        <p className="leading-[18px]">格式：pdf、png、jpg；大小：不超过100MB</p>
                      </div>
                      <div className="border border-[#dadde7] border-dashed content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[20px] relative rounded-[6px] shrink-0 w-full" data-node-id="1054:64739" data-name="upload-trigger">
                        <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center justify-center min-w-px relative" data-node-id="1054:64740">
                          <div className="relative shrink-0 size-[16px]" data-node-id="1054:64741" data-name="common-linear-upload">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCommonLinearUpload} />
                          </div>
                          <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-node-id="1054:64742" data-name="text-wrapper">
                            <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] not-italic relative shrink-0 text-[#1e2436] text-[14px] w-full" data-node-id="1054:64743">
                              <p className="leading-[20px]">点击或拖拽上传</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative rounded-[8px] shrink-0 w-full" data-node-id="1054:59209">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-start relative size-full">
                  <div className="content-stretch flex gap-[2px] items-start p-[8px] relative rounded-[12px] shrink-0 w-[160px]" data-node-id="1054:59210" data-name="表单标题">
                    <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Semibold'] justify-center leading-[0] not-italic relative shrink-0 text-[#1e2436] text-[18px] whitespace-nowrap" data-node-id="I1054:59210;163:13056">
                      <p className="leading-[24px]">产品基础信息</p>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start max-w-[640px] min-w-px relative" data-node-id="1054:66325">
                    <div className="content-stretch flex flex-col items-start p-[8px] relative rounded-[8px] shrink-0 w-full" data-node-id="1054:59211" data-name="form-item">
                      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-node-id="1054:59212" data-name="form-item">
                        <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-[136px]" data-node-id="I1054:59212;723:11612" data-name="label-item">
                          <div className="content-stretch flex items-center relative shrink-0" data-node-id="I1054:59212;723:11612;1596:7980" data-name="Label">
                            <div className="[word-break:break-word] flex flex-col font-['Source_Han_Sans_CN:Medium'] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#1e2436] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="I1054:59212;723:11612;1596:7981">
                              <p className="leading-[20px] overflow-hidden text-ellipsis">所属行业</p>
                            </div>
                          </div>
                        </div>
                        <div className="bg-white border border-[#e3e6ed] border-solid content-stretch flex gap-[4px] items-center px-[12px] py-[6px] relative rounded-[6px] shrink-0 w-full" data-node-id="I1054:59212;723:11613" data-name="select">
                          <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-node-id="I1054:59212;723:11613;237:3920" data-name="Content">
                            <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Source_Han_Sans_CN:Regular'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#9097ad] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="I1054:59212;723:11613;237:3922">
                              <p className="leading-[20px] overflow-hidden text-ellipsis">请输入</p>
                            </div>
                          </div>
                          <div className="relative shrink-0 size-[16px]" data-node-id="I1054:59212;723:11613;237:3924" data-name="Icon">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon} />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start p-[8px] relative rounded-[8px] shrink-0 w-full" data-node-id="1054:59213" data-name="form-item">
                      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-node-id="1054:59214" data-name="form-item">
                        <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-[136px]" data-node-id="I1054:59214;723:18944" data-name="label-item">
                          <div className="content-stretch flex items-center relative shrink-0" data-node-id="I1054:59214;723:18944;1596:7980" data-name="Label">
                            <div className="[word-break:break-word] flex flex-col font-['Source_Han_Sans_CN:Medium'] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#1e2436] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="I1054:59214;723:18944;1596:7981">
                              <p className="leading-[20px] overflow-hidden text-ellipsis whitespace-pre">{`产品类型  (选填)`}</p>
                            </div>
                          </div>
                        </div>
                        <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full" data-node-id="I1054:59214;723:18945" data-name="checkbox-group">
                          <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-node-id="I1054:59214;723:18945;723:18158" data-name="checkbox-item">
                            <div className="content-stretch flex items-center py-[2px] relative shrink-0" data-node-id="I1054:59214;723:18945;723:18158;2985:26948" data-name="Checkbox">
                              <div className="relative shrink-0 size-[16px]" data-node-id="I1054:59214;723:18945;723:18158;174:373" data-name="checkbox-item">
                                <div className="absolute bg-white border border-[#e3e6ed] border-solid inset-0 rounded-[4px]" data-node-id="I1054:59214;723:18945;723:18158;174:373;170:2053" data-name="Checkbox" />
                              </div>
                            </div>
                            <div className="content-stretch flex gap-[2px] items-center justify-center relative shrink-0" data-node-id="I1054:59214;723:18945;723:18158;2985:27478" data-name="contents">
                              <div className="[word-break:break-word] flex flex-col font-['Source_Han_Sans_CN:Regular'] justify-center leading-[0] not-italic relative shrink-0 text-[#1e2436] text-[14px] whitespace-nowrap" data-node-id="I1054:59214;723:18945;723:18158;174:380">
                                <p className="leading-[20px]">App</p>
                              </div>
                            </div>
                          </div>
                          <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-node-id="I1054:59214;723:18945;2985:26397" data-name="checkbox-item">
                            <div className="content-stretch flex items-center py-[2px] relative shrink-0" data-node-id="I1054:59214;723:18945;2985:26397;2985:26948" data-name="Checkbox">
                              <div className="relative shrink-0 size-[16px]" data-node-id="I1054:59214;723:18945;2985:26397;174:373" data-name="checkbox-item">
                                <div className="absolute bg-white border border-[#e3e6ed] border-solid inset-0 rounded-[4px]" data-node-id="I1054:59214;723:18945;2985:26397;174:373;170:2053" data-name="Checkbox" />
                              </div>
                            </div>
                            <div className="content-stretch flex gap-[2px] items-center justify-center relative shrink-0" data-node-id="I1054:59214;723:18945;2985:26397;2985:27478" data-name="contents">
                              <div className="[word-break:break-word] flex flex-col font-['Source_Han_Sans_CN:Regular'] justify-center leading-[0] not-italic relative shrink-0 text-[#1e2436] text-[14px] whitespace-nowrap" data-node-id="I1054:59214;723:18945;2985:26397;174:380">
                                <p className="leading-[20px]">Website</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col gap-[8px] items-start p-[8px] relative rounded-[8px] shrink-0 w-full" data-node-id="1054:59215" data-name="form-item">
                      <div className="content-stretch flex items-center relative shrink-0 w-full" data-node-id="1054:59216" data-name="label">
                        <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-[136px]" data-node-id="1054:59217" data-name="label-item">
                          <div className="content-stretch flex items-center relative shrink-0" data-node-id="I1054:59217;1596:7980" data-name="Label">
                            <div className="[word-break:break-word] flex flex-col font-['Source_Han_Sans_CN:Medium'] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#1e2436] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="I1054:59217;1596:7981">
                              <p className="leading-[20px] overflow-hidden text-ellipsis">产品链接</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans_SC:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#646e87] text-[12px] w-[520px]" data-node-id="1054:59218">
                        <p className="leading-[18px]">您可以提供应用商店下载链接、电商平台店铺或独立站店铺链接。</p>
                      </div>
                      <div className="bg-white border border-[#e3e6ed] border-solid content-stretch flex gap-[8px] h-[32px] items-center px-[12px] py-[10px] relative rounded-[6px] shrink-0 w-full" data-node-id="1054:59219" data-name="input">
                        <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-node-id="I1054:59219;187:2486" data-name="Content">
                          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Source_Han_Sans_CN:Regular'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#9097ad] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="I1054:59219;187:2488">
                            <p className="leading-[20px] overflow-hidden text-ellipsis">请输入</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col gap-[8px] items-start p-[8px] relative rounded-[8px] shrink-0 w-full" data-node-id="1054:59221" data-name="form-item">
                      <div className="content-stretch flex items-center relative shrink-0 w-full" data-node-id="1054:59222" data-name="label">
                        <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-[136px]" data-node-id="1054:59223" data-name="label-item">
                          <div className="content-stretch flex items-center relative shrink-0" data-node-id="I1054:59223;1596:7980" data-name="Label">
                            <div className="[word-break:break-word] flex flex-col font-['Source_Han_Sans_CN:Medium'] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#1e2436] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="I1054:59223;1596:7981">
                              <p className="leading-[20px] overflow-hidden text-ellipsis">产品名称</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans_SC:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#646e87] text-[12px] w-[520px]" data-node-id="1054:59224">
                        <p className="leading-[18px]">请填写产品的官方全称，与实际运营名称一致</p>
                      </div>
                      <div className="bg-white border border-[#e3e6ed] border-solid content-stretch flex gap-[8px] h-[32px] items-center px-[12px] py-[10px] relative rounded-[6px] shrink-0 w-full" data-node-id="1054:59225" data-name="input">
                        <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-node-id="I1054:59225;187:2486" data-name="Content">
                          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Source_Han_Sans_CN:Regular'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#9097ad] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="I1054:59225;187:2488">
                            <p className="leading-[20px] overflow-hidden text-ellipsis">请输入</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col gap-[8px] items-start p-[8px] relative rounded-[8px] shrink-0 w-full" data-node-id="1054:59227" data-name="form-item">
                      <div className="content-stretch flex items-center relative shrink-0 w-full" data-node-id="1054:59228" data-name="label">
                        <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-[136px]" data-node-id="1054:59229" data-name="label-item">
                          <div className="content-stretch flex items-center relative shrink-0" data-node-id="I1054:59229;1596:7980" data-name="Label">
                            <div className="[word-break:break-word] flex flex-col font-['Source_Han_Sans_CN:Medium'] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#1e2436] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="I1054:59229;1596:7981">
                              <p className="overflow-hidden text-ellipsis whitespace-pre">
                                <span className="leading-[20px]">请描述企业所提供的产品或服务</span>
                                <span className="leading-[20px] text-[#9097ad]">{`  (选填)`}</span>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans_SC:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#646e87] text-[12px] w-full" data-node-id="1054:59230">
                        <p className="leading-[18px]">请描述您提供的所有产品 — 这可以是您在电商平台上销售的产品品类，您在线下渠道销售的商品，或是您为客户提供的服务内容。</p>
                      </div>
                      <div className="bg-white border border-[#e3e6ed] border-solid content-stretch flex flex-col h-[72px] items-start min-h-[48px] px-[12px] py-[6px] relative rounded-[6px] shrink-0 w-full" data-node-id="1054:59231" data-name="textarea">
                        <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px overflow-clip relative w-full" data-node-id="I1054:59231;3016:16107" data-name="Content">
                          <div className="[word-break:break-word] flex flex-col font-['Source_Han_Sans_CN:Regular'] justify-center leading-[0] not-italic relative shrink-0 text-[#9097ad] text-[14px] w-full" data-node-id="I1054:59231;3016:16108">
                            <p className="leading-[20px]">请输入</p>
                          </div>
                        </div>
                        <div className="absolute bottom-[5px] h-0 left-[11px] right-[11px]" data-node-id="I1054:59231;3016:16109" data-name="Resizer">
                          <div className="absolute bottom-[-2px] h-[8px] right-[-8.94px] w-[7.936px]" data-node-id="I1054:59231;3016:16111" data-name="Resizer">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgResizer} />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start p-[8px] relative rounded-[8px] shrink-0 w-full" data-node-id="1054:59233" data-name="form-item">
                      <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-node-id="1054:59234" data-name="form-item">
                        <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-[136px]" data-node-id="I1054:59234;723:14730" data-name="label-item">
                          <div className="content-stretch flex items-center relative shrink-0" data-node-id="I1054:59234;723:14730;1596:7980" data-name="Label">
                            <div className="[word-break:break-word] flex flex-col font-['Source_Han_Sans_CN:Medium'] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#1e2436] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="I1054:59234;723:14730;1596:7981">
                              <p className="leading-[20px] overflow-hidden text-ellipsis">产品的开发者是否为贵司</p>
                            </div>
                          </div>
                        </div>
                        <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full" data-node-id="I1054:59234;723:18900" data-name="radio-group">
                          <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-node-id="I1054:59234;723:18900;723:15516" data-name="radio-item">
                            <div className="content-stretch flex items-center py-[2px] relative shrink-0" data-node-id="I1054:59234;723:18900;723:15516;2985:27923" data-name="radio">
                              <div className="relative shrink-0 size-[16px]" data-node-id="I1054:59234;723:18900;723:15516;175:2902" data-name="radio-item">
                                <div className="absolute bg-[#0036fe] inset-0 rounded-[8px]" data-node-id="I1054:59234;723:18900;723:15516;175:2902;654:9369" data-name="Radio" />
                                <div className="absolute bg-white inset-1/4 rounded-[8px]" data-node-id="I1054:59234;723:18900;723:15516;175:2902;654:9386" data-name="Radio" />
                              </div>
                            </div>
                            <div className="content-stretch flex gap-[2px] items-center justify-center relative shrink-0" data-node-id="I1054:59234;723:18900;723:15516;2985:28264" data-name="contents">
                              <div className="[word-break:break-word] flex flex-col font-['Source_Han_Sans_CN:Regular'] justify-center leading-[0] not-italic relative shrink-0 text-[#1e2436] text-[14px] whitespace-nowrap" data-node-id="I1054:59234;723:18900;723:15516;175:2903">
                                <p className="leading-[20px]">是</p>
                              </div>
                            </div>
                          </div>
                          <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-node-id="I1054:59234;723:18900;723:15521" data-name="radio-item">
                            <div className="content-stretch flex items-center py-[2px] relative shrink-0" data-node-id="I1054:59234;723:18900;723:15521;2985:27924" data-name="radio">
                              <div className="relative shrink-0 size-[16px]" data-node-id="I1054:59234;723:18900;723:15521;175:2881" data-name="radio-item">
                                <div className="absolute bg-white border border-[#e3e6ed] border-solid inset-0 rounded-[8px]" data-node-id="I1054:59234;723:18900;723:15521;175:2881;175:2857" data-name="Radio" />
                              </div>
                            </div>
                            <div className="content-stretch flex gap-[2px] items-center justify-center relative shrink-0" data-node-id="I1054:59234;723:18900;723:15521;2985:28265" data-name="contents">
                              <div className="[word-break:break-word] flex flex-col font-['Source_Han_Sans_CN:Regular'] justify-center leading-[0] not-italic relative shrink-0 text-[#1e2436] text-[14px] whitespace-nowrap" data-node-id="I1054:59234;723:18900;723:15521;175:2882">
                                <p className="leading-[20px]">否</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start p-[8px] relative rounded-[8px] shrink-0 w-full" data-node-id="1054:59235">
                      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-node-id="1054:59236">
                        <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-node-id="1054:59237" data-name="label">
                          <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-start min-w-px relative" data-node-id="1054:59238" data-name="label-item">
                            <div className="content-stretch flex items-center relative shrink-0" data-node-id="I1054:59238;1596:7980" data-name="Label">
                              <div className="[word-break:break-word] flex flex-col font-['Source_Han_Sans_CN:Medium'] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#1e2436] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="I1054:59238;1596:7981">
                                <p className="leading-[20px] overflow-hidden text-ellipsis">产品开发者和贵司关联证明</p>
                              </div>
                            </div>
                          </div>
                          <div className="content-stretch flex gap-[4px] items-center justify-center px-[2px] relative rounded-[4px] shrink-0" data-node-id="1054:59239" data-name="link">
                            <div className="[word-break:break-word] flex flex-col font-['Source_Han_Sans_CN:Medium'] justify-center leading-[0] not-italic relative shrink-0 text-[#0036fe] text-[12px] whitespace-nowrap" data-node-id="I1054:59239;1341:12598">
                              <p className="leading-[18px]">示例</p>
                            </div>
                          </div>
                        </div>
                        <div className="[word-break:break-word] flex flex-col font-['Noto_Sans_SC:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#646e87] text-[12px] w-full" data-node-id="1054:59240">
                          <p className="leading-[18px]">需提供能够证明产品开发商与贵公司存在关联关系的文件,如:合作协议、授权书、股权证明、关联公司证明等。文件需清晰显示双方公司名称及关联关系。</p>
                        </div>
                        <div className="border border-[#dadde7] border-dashed content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[20px] relative rounded-[6px] shrink-0 w-full" data-node-id="1054:64911" data-name="upload-trigger">
                          <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center justify-center min-w-px relative" data-node-id="1054:64912">
                            <div className="relative shrink-0 size-[16px]" data-node-id="1054:64913" data-name="common-linear-upload">
                              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCommonLinearUpload} />
                            </div>
                            <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-node-id="1054:64914" data-name="text-wrapper">
                              <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] not-italic relative shrink-0 text-[#1e2436] text-[14px] w-full" data-node-id="1054:64915">
                                <p className="leading-[20px]">点击或拖拽上传</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bg-white border-[#f3f3f7] border-solid border-t bottom-0 content-stretch drop-shadow-[0px_-1px_0.5px_rgba(20,41,79,0.02),0px_-2px_2px_rgba(20,41,79,0.01)] flex items-center justify-end left-0 px-[32px] py-[16px] right-0" data-node-id="1054:65849" data-name="按钮区">
          <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0 w-[1376px]" data-node-id="1054:65850" data-name="Action">
            <ButtonGroup className="content-stretch flex items-center justify-end relative shrink-0">
              <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0" data-node-id="1054:65855" data-name="按钮组">
                <div className="bg-[#0036fe] content-stretch flex gap-[6px] h-[32px] items-center justify-center min-w-[56px] px-[10px] py-[6px] relative rounded-[6px] shrink-0" data-node-id="1054:65859" data-name="button">
                  <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap" data-node-id="I1054:65859;150:1168">
                    <p className="leading-[20px]">下一步</p>
                  </div>
                </div>
              </div>
            </ButtonGroup>
          </div>
        </div>
      </div>
    </div>
  );
}
