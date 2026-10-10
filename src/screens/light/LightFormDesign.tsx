const assetPathPrefix = `${import.meta.env.BASE_URL}assets/light/form`;
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

export default function LightFormDesign() {
  return (
    <div className="bg-[#f4f5fb] border border-[#e5e8eb] border-solid content-stretch flex flex-col items-center relative size-full" data-node-id="626:21290" data-name="表单页-填写类-方案2">
      <div className="border-[#e5e8eb] border-b border-solid content-stretch flex h-[56px] items-center justify-between overflow-clip px-[32px] relative shrink-0 w-full" data-node-id="626:21291" data-name="01 顶部品牌栏">
        <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-node-id="626:21292" data-name="品牌与流程">
          <div className="h-[24px] relative shrink-0 w-[90px]" data-node-id="1254:124227" data-name="Logo">
            <div className="absolute contents inset-[8.33%_3.14%_8.33%_2.78%]" data-node-id="I1254:124227;4343:5333" data-name="Group">
              <div className="absolute inset-[8.33%_76.18%_8.33%_2.78%]" data-node-id="I1254:124227;4343:5334" data-name="Group">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup} />
              </div>
              <div className="absolute inset-[29.7%_3.14%_14.2%_28.64%]" data-node-id="I1254:124227;4343:5337" data-name="Group">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup1} />
              </div>
            </div>
          </div>
          <div className="bg-[#e5e8eb] h-[20px] relative shrink-0 w-px" data-node-id="626:21294" data-name="分隔线" />
          <p className="[word-break:break-word] font-['PingFang_SC:Medium'] leading-[22px] not-italic relative shrink-0 text-[#1e2436] text-[16px] whitespace-nowrap" data-node-id="626:21295">
            创建促销活动
          </p>
        </div>
        <a className="content-stretch cursor-pointer flex gap-[8px] items-center overflow-clip relative shrink-0" data-node-id="626:21296" data-name="退出创建">
          <div className="relative shrink-0 size-[16px]" data-node-id="626:21298" data-name="common-linear-close">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCommonLinearClose} />
          </div>
        </a>
      </div>
      <div className="content-stretch flex flex-[1_0_0] items-start justify-center min-h-px overflow-x-clip overflow-y-auto relative w-full" data-node-id="626:21299">
        <div className="content-stretch flex gap-[12px] items-start py-[20px] relative shrink-0 w-[960px]" data-node-id="1054:65319">
          <div className="bg-white border border-[#edeef3] border-solid content-stretch flex flex-col gap-[20px] items-start p-[20px] rounded-[8px] shadow-[0px_2px_4px_0px_rgba(18,50,108,0.01),0px_8px_16px_0px_rgba(18,50,108,0.02)] shrink-0 sticky top-0 w-[280px]" data-node-id="1054:65414">
            <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-node-id="1054:65425">
              <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-node-id="1054:65426">
                <div className="border-2 border-[#e3e6ed] border-solid content-stretch flex flex-col gap-[3.2px] items-center justify-center min-w-[14px] relative rounded-[7999.201px] shrink-0 size-[16px]" data-node-id="1054:65427" data-name="badge">
                  <div className="absolute h-[16px] left-[7px] top-[-1px] w-[8px]" data-node-id="1054:65429">
                    <div className="absolute inset-[-6.25%_-12.5%]">
                      <img alt="" className="block max-w-none size-full" src={imgEllipse857} />
                    </div>
                  </div>
                </div>
                <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Medium'] leading-[22px] min-w-px not-italic relative text-[#1e2436] text-[16px]" data-node-id="1054:65430">
                  入驻信息
                </p>
              </div>
              <div className="content-stretch flex flex-col items-start pl-[6px] relative shrink-0 w-full" data-node-id="1054:65431">
                <div className="border-[#e3e6ed] border-l border-solid content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-node-id="1054:65432">
                  <div className="content-stretch flex gap-[8px] items-center pl-[16px] relative shrink-0 w-full" data-node-id="1054:65433" data-name="导航文字">
                    <div className="relative shrink-0 size-[14px]" data-node-id="1054:65434" data-name="common-filled-tick-circle">
                      <div className="absolute inset-[8.33%]" data-node-id="I1054:65434;110:4089" data-name="tick-circle">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgTickCircle} />
                      </div>
                    </div>
                    <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Medium'] leading-[20px] min-w-px not-italic relative text-[#0036fe] text-[14px]" data-node-id="1054:65435">
                      企业详情
                    </p>
                  </div>
                  <div className="content-stretch flex gap-[8px] items-center pl-[16px] relative shrink-0 w-full" data-node-id="1054:65437" data-name="导航文字">
                    <div className="relative shrink-0 size-[14px]" data-node-id="1054:65438" data-name="common-filled-tick-circle">
                      <div className="absolute inset-[8.33%]" data-node-id="I1054:65438;110:4089" data-name="tick-circle">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgTickCircle} />
                      </div>
                    </div>
                    <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular'] leading-[20px] min-w-px not-italic relative text-[#3c455d] text-[14px]" data-node-id="1054:65439">
                      客户主体认证
                    </p>
                  </div>
                  <div className="content-stretch flex gap-[8px] items-center pl-[16px] relative shrink-0 w-full" data-node-id="1054:65440" data-name="导航文字">
                    <div className="relative shrink-0 size-[14px]" data-node-id="1054:65441" data-name="common-filled-tick-circle">
                      <div className="absolute inset-[8.33%]" data-node-id="1054:65442" data-name="tick-circle">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgTickCircle1} />
                      </div>
                    </div>
                    <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular'] leading-[20px] min-w-px not-italic relative text-[#3c455d] text-[14px]" data-node-id="1054:65445">
                      银行卡信息
                    </p>
                  </div>
                  <div className="content-stretch flex gap-[8px] items-center pl-[16px] relative shrink-0 w-full" data-node-id="1054:65451" data-name="导航文字">
                    <div className="relative shrink-0 size-[14px]" data-node-id="1054:65452" data-name="common-filled-tick-circle">
                      <div className="absolute inset-[8.33%]" data-node-id="1054:65453" data-name="tick-circle">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgTickCircle1} />
                      </div>
                    </div>
                    <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular'] leading-[20px] min-w-px not-italic relative text-[#3c455d] text-[14px]" data-node-id="1054:65456">
                      联系人
                    </p>
                  </div>
                  <div className="content-stretch flex gap-[8px] items-center pl-[16px] relative shrink-0 w-full" data-node-id="1054:65464" data-name="导航文字">
                    <div className="relative shrink-0 size-[14px]" data-node-id="1054:65465" data-name="common-filled-tick-circle">
                      <div className="absolute inset-[8.33%]" data-node-id="I1054:65465;110:4089" data-name="tick-circle">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgTickCircle} />
                      </div>
                    </div>
                    <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular'] leading-[20px] min-w-px not-italic relative text-[#3c455d] text-[14px]" data-node-id="1054:65466">
                      业务信息
                    </p>
                  </div>
                  <div className="content-stretch flex gap-[8px] items-center pl-[16px] relative shrink-0 w-full" data-node-id="1054:65472" data-name="导航文字">
                    <div className="relative shrink-0 size-[14px]" data-node-id="1054:65473" data-name="common-filled-tick-circle">
                      <div className="absolute inset-[8.33%]" data-node-id="I1054:65473;110:4089" data-name="tick-circle">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgTickCircle} />
                      </div>
                    </div>
                    <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Regular'] leading-[20px] min-w-px not-italic relative text-[#3c455d] text-[14px]" data-node-id="1054:65474">
                      展业调研
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-node-id="1054:65481">
              <div className="border-2 border-[#e3e6ed] border-solid content-stretch flex flex-col gap-[3.2px] items-center justify-center min-w-[14px] relative rounded-[7999.201px] shrink-0 size-[16px]" data-node-id="1054:65482" data-name="badge" />
              <p className="[word-break:break-word] flex-[1_0_0] font-['PingFang_SC:Medium'] leading-[22px] min-w-px not-italic relative text-[#1e2436] text-[16px]" data-node-id="1054:65485">
                补充信息
              </p>
            </div>
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-node-id="1054:65486">
              <div className="border-2 border-[#e3e6ed] border-solid content-stretch flex flex-col gap-[3.2px] items-center justify-center min-w-[14px] relative rounded-[7999.201px] shrink-0 size-[16px]" data-node-id="1054:65487" data-name="badge" />
              <p className="[word-break:break-word] font-['PingFang_SC:Medium'] leading-[22px] not-italic relative shrink-0 text-[#1e2436] text-[16px] whitespace-nowrap" data-node-id="1054:65490">
                产品能力开通材料
              </p>
              <div className="bg-[#f3f3f7] content-stretch flex gap-[2px] items-center px-[4px] py-px relative rounded-[4px] shrink-0" data-node-id="1054:65491" data-name="tag">
                <p className="[word-break:break-word] font-['PingFang_SC:Regular'] leading-[18px] not-italic relative shrink-0 text-[#3c455d] text-[12px] whitespace-nowrap" data-node-id="I1054:65491;510:8288">
                  选填
                </p>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px relative" data-node-id="1054:65492" data-name="表单">
            <div className="bg-white border border-[#edeef3] border-solid content-stretch flex flex-col gap-[8px] items-start px-[12px] py-[20px] relative rounded-[8px] shadow-[0px_2px_4px_0px_rgba(18,50,108,0.01),0px_8px_16px_0px_rgba(18,50,108,0.02)] shrink-0 w-full" data-node-id="1054:65493">
              <div className="content-stretch flex gap-[2px] items-start pb-[8px] px-[8px] relative rounded-[12px] shrink-0 w-full" data-node-id="1054:65494" data-name="表单标题">
                <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Semibold'] justify-center leading-[0] not-italic relative shrink-0 text-[#1e2436] text-[18px] whitespace-nowrap" data-node-id="I1054:65494;163:13056">
                  <p className="leading-[24px]">企业详情</p>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[8px] items-start p-[8px] relative rounded-[8px] shrink-0 w-full" data-node-id="1054:65495" data-name="form-item">
                <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-node-id="1054:65496" data-name="label">
                  <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-start min-w-px relative" data-node-id="1054:65497" data-name="label-item">
                    <div className="content-stretch flex items-center relative shrink-0" data-node-id="I1054:65497;1596:7980" data-name="Label">
                      <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#1e2436] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="I1054:65497;1596:7981">
                        <p className="leading-[20px] overflow-hidden text-ellipsis">公司注册证明书</p>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[4px] items-center justify-center px-[2px] relative rounded-[4px] shrink-0" data-node-id="1054:65498" data-name="link">
                    <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] not-italic relative shrink-0 text-[#0036fe] text-[12px] whitespace-nowrap" data-node-id="I1054:65498;1341:12598">
                      <p className="leading-[18px]">示例</p>
                    </div>
                  </div>
                </div>
                <div className="[word-break:break-word] flex flex-col font-['Source_Han_Sans_CN:Regular'] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#646e87] text-[12px] w-[min-content]" data-node-id="1054:65499">
                  <p className="leading-[18px] mb-0">请上传由香港特别行政区注册处办法的公司注册证明书（Certificate of Incorporation）</p>
                  <p className="leading-[18px]">格式：pdf、png、jpg；大小：不超过100MB</p>
                </div>
                <div className="border border-[#dadde7] border-dashed content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[20px] relative rounded-[6px] shrink-0 w-full" data-node-id="1054:65501" data-name="upload-trigger">
                  <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center justify-center min-w-px relative" data-node-id="1054:65502">
                    <div className="relative shrink-0 size-[16px]" data-node-id="1054:65503" data-name="common-linear-upload">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCommonLinearUpload} />
                    </div>
                    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-node-id="1054:65504" data-name="text-wrapper">
                      <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] not-italic relative shrink-0 text-[#1e2436] text-[14px] w-full" data-node-id="1054:65505">
                        <p className="leading-[20px]">点击或拖拽上传</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[8px] items-start p-[8px] relative rounded-[8px] shrink-0 w-full" data-node-id="1054:65509" data-name="form-item">
                <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-node-id="1054:65510" data-name="form-item">
                  <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-[136px]" data-node-id="I1054:65510;723:14730" data-name="label-item">
                    <div className="content-stretch flex items-center relative shrink-0" data-node-id="I1054:65510;723:14730;1596:7980" data-name="Label">
                      <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#1e2436] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="I1054:65510;723:14730;1596:7981">
                        <p className="leading-[20px] overflow-hidden text-ellipsis">营业地址</p>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full" data-node-id="I1054:65510;723:18900" data-name="radio-group">
                    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-node-id="I1054:65510;723:18900;723:15516" data-name="radio-item">
                      <div className="content-stretch flex items-center py-[2px] relative shrink-0" data-node-id="I1054:65510;723:18900;723:15516;2985:27923" data-name="radio">
                        <div className="relative shrink-0 size-[16px]" data-node-id="I1054:65510;723:18900;723:15516;175:2902" data-name="radio-item">
                          <div className="absolute bg-[#0036fe] inset-0 rounded-[8px]" data-node-id="I1054:65510;723:18900;723:15516;175:2902;654:9369" data-name="Radio" />
                          <div className="absolute bg-white inset-1/4 rounded-[8px]" data-node-id="I1054:65510;723:18900;723:15516;175:2902;654:9386" data-name="Radio" />
                        </div>
                      </div>
                      <div className="content-stretch flex gap-[2px] items-center justify-center relative shrink-0" data-node-id="I1054:65510;723:18900;723:15516;2985:28264" data-name="contents">
                        <div className="[word-break:break-word] flex flex-col font-['Source_Han_Sans_CN:Regular'] justify-center leading-[0] not-italic relative shrink-0 text-[#1e2436] text-[14px] whitespace-nowrap" data-node-id="I1054:65510;723:18900;723:15516;175:2903">
                          <p className="leading-[20px]">与注册地址一致</p>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-node-id="I1054:65510;723:18900;723:15521" data-name="radio-item">
                      <div className="content-stretch flex items-center py-[2px] relative shrink-0" data-node-id="I1054:65510;723:18900;723:15521;2985:27924" data-name="radio">
                        <div className="relative shrink-0 size-[16px]" data-node-id="I1054:65510;723:18900;723:15521;175:2881" data-name="radio-item">
                          <div className="absolute bg-white border border-[#e3e6ed] border-solid inset-0 rounded-[8px]" data-node-id="I1054:65510;723:18900;723:15521;175:2881;175:2857" data-name="Radio" />
                        </div>
                      </div>
                      <div className="content-stretch flex gap-[2px] items-center justify-center relative shrink-0" data-node-id="I1054:65510;723:18900;723:15521;2985:28265" data-name="contents">
                        <div className="[word-break:break-word] flex flex-col font-['Source_Han_Sans_CN:Regular'] justify-center leading-[0] not-italic relative shrink-0 text-[#1e2436] text-[14px] whitespace-nowrap" data-node-id="I1054:65510;723:18900;723:15521;175:2882">
                          <p className="leading-[20px]">与注册地址不一致</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-node-id="1054:65511">
                  <div className="bg-white border border-[#e3e6ed] border-solid content-stretch flex flex-[1_0_0] gap-[8px] h-[32px] items-center min-w-px px-[12px] py-[10px] relative rounded-[6px]" data-node-id="1054:65512" data-name="select">
                    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-node-id="I1054:65512;237:3908" data-name="Content">
                      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Source_Han_Sans_CN:Regular'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#9097ad] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="I1054:65512;237:3910">
                        <p className="leading-[20px] overflow-hidden text-ellipsis">国家/地区</p>
                      </div>
                    </div>
                    <div className="relative shrink-0 size-[16px]" data-node-id="I1054:65512;237:3912" data-name="Icon">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon} />
                    </div>
                  </div>
                  <div className="bg-white border border-[#e3e6ed] border-solid content-stretch flex flex-[1_0_0] gap-[8px] h-[32px] items-center min-w-px px-[12px] py-[10px] relative rounded-[6px]" data-node-id="1054:65513" data-name="select">
                    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-node-id="I1054:65513;237:3908" data-name="Content">
                      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Source_Han_Sans_CN:Regular'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#9097ad] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="I1054:65513;237:3910">
                        <p className="leading-[20px] overflow-hidden text-ellipsis">城市</p>
                      </div>
                    </div>
                    <div className="relative shrink-0 size-[16px]" data-node-id="I1054:65513;237:3912" data-name="Icon">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon} />
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-node-id="1054:65514">
                  <div className="bg-white border border-[#e3e6ed] border-solid content-stretch flex flex-[1_0_0] gap-[8px] h-[32px] items-center min-w-px px-[12px] py-[10px] relative rounded-[6px]" data-node-id="1054:65515" data-name="input">
                    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-node-id="I1054:65515;187:2486" data-name="Content">
                      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Source_Han_Sans_CN:Regular'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#9097ad] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="I1054:65515;187:2488">
                        <p className="leading-[20px] overflow-hidden text-ellipsis">街道地址</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white border border-[#e3e6ed] border-solid content-stretch flex flex-[1_0_0] gap-[8px] h-[32px] items-center min-w-px px-[12px] py-[10px] relative rounded-[6px]" data-node-id="1054:65516" data-name="input">
                    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-node-id="I1054:65516;187:2486" data-name="Content">
                      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Source_Han_Sans_CN:Regular'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#9097ad] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="I1054:65516;187:2488">
                        <p className="leading-[20px] overflow-hidden text-ellipsis">公寓、单元或其他</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[8px] items-start p-[8px] relative rounded-[8px] shrink-0 w-full" data-node-id="1054:65517" data-name="form-item">
                <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-node-id="1054:65518" data-name="label">
                  <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-start min-w-px relative" data-node-id="1054:65519" data-name="label-item">
                    <div className="content-stretch flex items-center relative shrink-0" data-node-id="I1054:65519;1596:7980" data-name="Label">
                      <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#1e2436] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="I1054:65519;1596:7981">
                        <p className="leading-[20px] overflow-hidden text-ellipsis">商业登记证</p>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[4px] items-center justify-center px-[2px] relative rounded-[4px] shrink-0" data-node-id="1054:65520" data-name="link">
                    <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] not-italic relative shrink-0 text-[#0036fe] text-[12px] whitespace-nowrap" data-node-id="I1054:65520;1341:12598">
                      <p className="leading-[18px]">示例</p>
                    </div>
                  </div>
                </div>
                <div className="[word-break:break-word] flex flex-col font-['Source_Han_Sans_CN:Regular'] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#646e87] text-[12px] w-[min-content]" data-node-id="1054:65521">
                  <p className="leading-[18px] mb-0">请上传香港特别行政区政府根据《商业登记条例》发放的商业登记证（Business Registration Certificate）</p>
                  <p className="leading-[18px]">格式：pdf、png、jpg；大小：不超过100MB</p>
                </div>
                <div className="border border-[#dadde7] border-dashed content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[20px] relative rounded-[6px] shrink-0 w-full" data-node-id="1054:65523" data-name="upload-trigger">
                  <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center justify-center min-w-px relative" data-node-id="1054:65524">
                    <div className="relative shrink-0 size-[16px]" data-node-id="1054:65525" data-name="common-linear-upload">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCommonLinearUpload} />
                    </div>
                    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-node-id="1054:65526" data-name="text-wrapper">
                      <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] not-italic relative shrink-0 text-[#1e2436] text-[14px] w-full" data-node-id="1054:65527">
                        <p className="leading-[20px]">点击或拖拽上传</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white border border-[#edeef3] border-solid content-stretch flex flex-col gap-[8px] items-start px-[12px] py-[20px] relative rounded-[8px] shadow-[0px_2px_4px_0px_rgba(18,50,108,0.01),0px_8px_16px_0px_rgba(18,50,108,0.02)] shrink-0 w-full" data-node-id="1054:65531">
              <div className="content-stretch flex gap-[2px] items-start pb-[8px] px-[8px] relative rounded-[12px] shrink-0 w-full" data-node-id="1054:65532" data-name="表单标题">
                <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Semibold'] justify-center leading-[0] not-italic relative shrink-0 text-[#1e2436] text-[18px] whitespace-nowrap" data-node-id="I1054:65532;163:13056">
                  <p className="leading-[24px]">商家详情</p>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[8px] items-start p-[8px] relative rounded-[8px] shrink-0 w-full" data-node-id="1054:65533" data-name="form-item">
                <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-node-id="1054:65534" data-name="label">
                  <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-start min-w-px relative" data-node-id="1054:65535" data-name="label-item">
                    <div className="content-stretch flex items-center relative shrink-0" data-node-id="I1054:65535;1596:7980" data-name="Label">
                      <div className="[word-break:break-word] flex flex-col font-['Source_Han_Sans_CN:Medium'] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#1e2436] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="I1054:65535;1596:7981">
                        <p className="leading-[20px] overflow-hidden text-ellipsis">NNC1法团成立文件/NAR1周年报</p>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[4px] items-center justify-center px-[4px] relative rounded-[4px] shrink-0" data-node-id="1054:65536" data-name="link">
                    <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] not-italic relative shrink-0 text-[#0036fe] text-[12px] whitespace-nowrap" data-node-id="I1054:65536;1341:12598">
                      <p className="leading-[18px]">示例</p>
                    </div>
                  </div>
                </div>
                <div className="[word-break:break-word] flex flex-col font-['Source_Han_Sans_CN:Regular'] justify-center leading-[0] not-italic relative shrink-0 text-[#646e87] text-[12px] w-full" data-node-id="1054:65537">
                  <p className="leading-[18px] mb-0">{`成立<1年的公司，请上传当地监管机构签发的法团成立文件NNCI`}</p>
                  <p className="leading-[18px]">格式：pdf、png、jpg；大小：不超过100MB</p>
                </div>
                <div className="border border-[#dadde7] border-dashed content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[20px] relative rounded-[6px] shrink-0 w-full" data-node-id="1054:65540" data-name="upload-trigger">
                  <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center justify-center min-w-px relative" data-node-id="1054:65541">
                    <div className="relative shrink-0 size-[16px]" data-node-id="1054:65542" data-name="common-linear-upload">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCommonLinearUpload} />
                    </div>
                    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-node-id="1054:65543" data-name="text-wrapper">
                      <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] not-italic relative shrink-0 text-[#1e2436] text-[14px] w-full" data-node-id="1054:65544">
                        <p className="leading-[20px]">点击或拖拽上传</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start p-[8px] relative rounded-[8px] shrink-0 w-full" data-node-id="1054:65546" data-name="form-item">
                <div className="content-stretch flex flex-col gap-[8px] items-start relative rounded-[8px] shrink-0 w-full" data-node-id="1054:65547" data-name="form-item">
                  <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-[136px]" data-node-id="I1054:65547;723:14730" data-name="label-item">
                    <div className="content-stretch flex items-center relative shrink-0" data-node-id="I1054:65547;723:14730;1596:7980" data-name="Label">
                      <div className="[word-break:break-word] flex flex-col font-['Source_Han_Sans_CN:Medium'] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#1e2436] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="I1054:65547;723:14730;1596:7981">
                        <p className="leading-[20px] overflow-hidden text-ellipsis">是否有别的企业持有您的企业至少25%以上的股份？</p>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full" data-node-id="I1054:65547;723:18900" data-name="radio-group">
                    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-node-id="I1054:65547;723:18900;723:15516" data-name="radio-item">
                      <div className="content-stretch flex items-center py-[2px] relative shrink-0" data-node-id="I1054:65547;723:18900;723:15516;2985:27923" data-name="radio">
                        <div className="relative shrink-0 size-[16px]" data-node-id="I1054:65547;723:18900;723:15516;175:2902" data-name="radio-item">
                          <div className="absolute bg-[#0036fe] inset-0 rounded-[8px]" data-node-id="I1054:65547;723:18900;723:15516;175:2902;654:9369" data-name="Radio" />
                          <div className="absolute bg-white inset-1/4 rounded-[8px]" data-node-id="I1054:65547;723:18900;723:15516;175:2902;654:9386" data-name="Radio" />
                        </div>
                      </div>
                      <div className="content-stretch flex gap-[2px] items-center justify-center relative shrink-0" data-node-id="I1054:65547;723:18900;723:15516;2985:28264" data-name="contents">
                        <div className="[word-break:break-word] flex flex-col font-['Source_Han_Sans_CN:Regular'] justify-center leading-[0] not-italic relative shrink-0 text-[#1e2436] text-[14px] whitespace-nowrap" data-node-id="I1054:65547;723:18900;723:15516;175:2903">
                          <p className="leading-[20px]">是</p>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-node-id="I1054:65547;723:18900;723:15521" data-name="radio-item">
                      <div className="content-stretch flex items-center py-[2px] relative shrink-0" data-node-id="I1054:65547;723:18900;723:15521;2985:27924" data-name="radio">
                        <div className="relative shrink-0 size-[16px]" data-node-id="I1054:65547;723:18900;723:15521;175:2881" data-name="radio-item">
                          <div className="absolute bg-white border border-[#e3e6ed] border-solid inset-0 rounded-[8px]" data-node-id="I1054:65547;723:18900;723:15521;175:2881;175:2857" data-name="Radio" />
                        </div>
                      </div>
                      <div className="content-stretch flex gap-[2px] items-center justify-center relative shrink-0" data-node-id="I1054:65547;723:18900;723:15521;2985:28265" data-name="contents">
                        <div className="[word-break:break-word] flex flex-col font-['Source_Han_Sans_CN:Regular'] justify-center leading-[0] not-italic relative shrink-0 text-[#1e2436] text-[14px] whitespace-nowrap" data-node-id="I1054:65547;723:18900;723:15521;175:2882">
                          <p className="leading-[20px]">否</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[8px] items-start p-[8px] relative rounded-[8px] shrink-0 w-full" data-node-id="1054:65548" data-name="form-item">
                <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-node-id="1054:65549" data-name="label">
                  <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-start min-w-px relative" data-node-id="1054:65550" data-name="label-item">
                    <div className="content-stretch flex items-center relative shrink-0" data-node-id="I1054:65550;1596:7980" data-name="Label">
                      <div className="[word-break:break-word] flex flex-col font-['Source_Han_Sans_CN:Medium'] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#1e2436] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="I1054:65550;1596:7981">
                        <p className="leading-[20px] overflow-hidden text-ellipsis">股权架构图</p>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[4px] items-center justify-center px-[4px] relative rounded-[4px] shrink-0" data-node-id="1054:65551" data-name="link">
                    <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] not-italic relative shrink-0 text-[#0036fe] text-[12px] whitespace-nowrap" data-node-id="I1054:65551;1341:12598">
                      <p className="leading-[18px]">示例</p>
                    </div>
                  </div>
                </div>
                <div className="[word-break:break-word] flex flex-col font-['Source_Han_Sans_CN:Regular'] justify-center leading-[0] not-italic relative shrink-0 text-[#646e87] text-[12px] w-full" data-node-id="1054:65552">
                  <p className="leading-[18px] mb-0">请上传香港特别行政区政府根据《商业登记条例》发放的商业登记证（Business Registration Certificate）</p>
                  <p className="leading-[18px]">格式：pdf、png、jpg；大小：不超过100MB</p>
                </div>
                <div className="border border-[#dadde7] border-dashed content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[20px] relative rounded-[6px] shrink-0 w-full" data-node-id="1054:65555" data-name="upload-trigger">
                  <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center justify-center min-w-px relative" data-node-id="1054:65556">
                    <div className="relative shrink-0 size-[16px]" data-node-id="1054:65557" data-name="common-linear-upload">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCommonLinearUpload} />
                    </div>
                    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-node-id="1054:65558" data-name="text-wrapper">
                      <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] not-italic relative shrink-0 text-[#1e2436] text-[14px] w-full" data-node-id="1054:65559">
                        <p className="leading-[20px]">点击或拖拽上传</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white border border-[#edeef3] border-solid content-stretch flex flex-col gap-[8px] items-start px-[12px] py-[20px] relative rounded-[8px] shadow-[0px_2px_4px_0px_rgba(18,50,108,0.01),0px_8px_16px_0px_rgba(18,50,108,0.02)] shrink-0 w-full" data-node-id="1054:65561">
              <div className="content-stretch flex gap-[2px] items-start pb-[8px] px-[8px] relative rounded-[12px] shrink-0 w-[616px]" data-node-id="1054:65562" data-name="表单标题">
                <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Semibold'] justify-center leading-[0] not-italic relative shrink-0 text-[#1e2436] text-[18px] whitespace-nowrap" data-node-id="I1054:65562;163:13056">
                  <p className="leading-[24px]">产品基础信息</p>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start p-[8px] relative rounded-[8px] shrink-0 w-full" data-node-id="1054:65563" data-name="form-item">
                <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-node-id="1054:65564" data-name="form-item">
                  <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-[136px]" data-node-id="I1054:65564;723:11612" data-name="label-item">
                    <div className="content-stretch flex items-center relative shrink-0" data-node-id="I1054:65564;723:11612;1596:7980" data-name="Label">
                      <div className="[word-break:break-word] flex flex-col font-['Source_Han_Sans_CN:Medium'] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#1e2436] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="I1054:65564;723:11612;1596:7981">
                        <p className="leading-[20px] overflow-hidden text-ellipsis">所属行业</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white border border-[#e3e6ed] border-solid content-stretch flex gap-[4px] items-center px-[12px] py-[6px] relative rounded-[6px] shrink-0 w-full" data-node-id="I1054:65564;723:11613" data-name="select">
                    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-node-id="I1054:65564;723:11613;237:3920" data-name="Content">
                      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Source_Han_Sans_CN:Regular'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#9097ad] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="I1054:65564;723:11613;237:3922">
                        <p className="leading-[20px] overflow-hidden text-ellipsis">请输入</p>
                      </div>
                    </div>
                    <div className="relative shrink-0 size-[16px]" data-node-id="I1054:65564;723:11613;237:3924" data-name="Icon">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start p-[8px] relative rounded-[8px] shrink-0 w-full" data-node-id="1054:65565" data-name="form-item">
                <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-node-id="1054:65566" data-name="form-item">
                  <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-[136px]" data-node-id="I1054:65566;723:18944" data-name="label-item">
                    <div className="content-stretch flex items-center relative shrink-0" data-node-id="I1054:65566;723:18944;1596:7980" data-name="Label">
                      <div className="[word-break:break-word] flex flex-col font-['Source_Han_Sans_CN:Medium'] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#1e2436] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="I1054:65566;723:18944;1596:7981">
                        <p className="leading-[20px] overflow-hidden text-ellipsis">产品类型 (选填)</p>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full" data-node-id="I1054:65566;723:18945" data-name="checkbox-group">
                    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-node-id="I1054:65566;723:18945;723:18158" data-name="checkbox-item">
                      <div className="content-stretch flex items-center py-[2px] relative shrink-0" data-node-id="I1054:65566;723:18945;723:18158;2985:26948" data-name="Checkbox">
                        <div className="relative shrink-0 size-[16px]" data-node-id="I1054:65566;723:18945;723:18158;174:373" data-name="checkbox-item">
                          <div className="absolute bg-white border border-[#e3e6ed] border-solid inset-0 rounded-[4px]" data-node-id="I1054:65566;723:18945;723:18158;174:373;170:2053" data-name="Checkbox" />
                        </div>
                      </div>
                      <div className="content-stretch flex gap-[2px] items-center justify-center relative shrink-0" data-node-id="I1054:65566;723:18945;723:18158;2985:27478" data-name="contents">
                        <div className="[word-break:break-word] flex flex-col font-['Source_Han_Sans_CN:Regular'] justify-center leading-[0] not-italic relative shrink-0 text-[#1e2436] text-[14px] whitespace-nowrap" data-node-id="I1054:65566;723:18945;723:18158;174:380">
                          <p className="leading-[20px]">App</p>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-node-id="I1054:65566;723:18945;2985:26397" data-name="checkbox-item">
                      <div className="content-stretch flex items-center py-[2px] relative shrink-0" data-node-id="I1054:65566;723:18945;2985:26397;2985:26948" data-name="Checkbox">
                        <div className="relative shrink-0 size-[16px]" data-node-id="I1054:65566;723:18945;2985:26397;174:373" data-name="checkbox-item">
                          <div className="absolute bg-white border border-[#e3e6ed] border-solid inset-0 rounded-[4px]" data-node-id="I1054:65566;723:18945;2985:26397;174:373;170:2053" data-name="Checkbox" />
                        </div>
                      </div>
                      <div className="content-stretch flex gap-[2px] items-center justify-center relative shrink-0" data-node-id="I1054:65566;723:18945;2985:26397;2985:27478" data-name="contents">
                        <div className="[word-break:break-word] flex flex-col font-['Source_Han_Sans_CN:Regular'] justify-center leading-[0] not-italic relative shrink-0 text-[#1e2436] text-[14px] whitespace-nowrap" data-node-id="I1054:65566;723:18945;2985:26397;174:380">
                          <p className="leading-[20px]">Website</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[8px] items-start p-[8px] relative rounded-[8px] shrink-0 w-full" data-node-id="1054:65567" data-name="form-item">
                <div className="content-stretch flex items-center relative shrink-0 w-full" data-node-id="1054:65568" data-name="label">
                  <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-[136px]" data-node-id="1054:65569" data-name="label-item">
                    <div className="content-stretch flex items-center relative shrink-0" data-node-id="I1054:65569;1596:7980" data-name="Label">
                      <div className="[word-break:break-word] flex flex-col font-['Source_Han_Sans_CN:Medium'] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#1e2436] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="I1054:65569;1596:7981">
                        <p className="leading-[20px] overflow-hidden text-ellipsis">产品链接</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="[word-break:break-word] flex flex-col font-['Noto_Sans_SC:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#646e87] text-[12px] w-[520px]" data-node-id="1054:65570">
                  <p className="leading-[18px]">您可以提供应用商店下载链接、电商平台店铺或独立站店铺链接。</p>
                </div>
                <div className="bg-white border border-[#e3e6ed] border-solid content-stretch flex gap-[8px] h-[32px] items-center px-[12px] py-[10px] relative rounded-[6px] shrink-0 w-full" data-node-id="1054:65571" data-name="input">
                  <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-node-id="I1054:65571;187:2486" data-name="Content">
                    <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Source_Han_Sans_CN:Regular'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#9097ad] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="I1054:65571;187:2488">
                      <p className="leading-[20px] overflow-hidden text-ellipsis">请输入</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[8px] items-start p-[8px] relative rounded-[8px] shrink-0 w-full" data-node-id="1054:65573" data-name="form-item">
                <div className="content-stretch flex items-center relative shrink-0 w-full" data-node-id="1054:65574" data-name="label">
                  <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-[136px]" data-node-id="1054:65575" data-name="label-item">
                    <div className="content-stretch flex items-center relative shrink-0" data-node-id="I1054:65575;1596:7980" data-name="Label">
                      <div className="[word-break:break-word] flex flex-col font-['Source_Han_Sans_CN:Medium'] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#1e2436] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="I1054:65575;1596:7981">
                        <p className="leading-[20px] overflow-hidden text-ellipsis">产品名称</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="[word-break:break-word] flex flex-col font-['Noto_Sans_SC:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#646e87] text-[12px] w-[520px]" data-node-id="1054:65576">
                  <p className="leading-[18px]">请填写产品的官方全称，与实际运营名称一致</p>
                </div>
                <div className="bg-white border border-[#e3e6ed] border-solid content-stretch flex gap-[8px] h-[32px] items-center px-[12px] py-[10px] relative rounded-[6px] shrink-0 w-full" data-node-id="1054:65577" data-name="input">
                  <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-node-id="I1054:65577;187:2486" data-name="Content">
                    <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Source_Han_Sans_CN:Regular'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#9097ad] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="I1054:65577;187:2488">
                      <p className="leading-[20px] overflow-hidden text-ellipsis">请输入</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[8px] items-start p-[8px] relative rounded-[8px] shrink-0 w-full" data-node-id="1054:65579" data-name="form-item">
                <div className="content-stretch flex items-center relative shrink-0 w-full" data-node-id="1054:65580" data-name="label">
                  <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-[136px]" data-node-id="1054:65581" data-name="label-item">
                    <div className="content-stretch flex items-center relative shrink-0" data-node-id="I1054:65581;1596:7980" data-name="Label">
                      <div className="[word-break:break-word] flex flex-col font-['Source_Han_Sans_CN:Medium'] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#1e2436] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="I1054:65581;1596:7981">
                        <p className="overflow-hidden text-ellipsis">
                          <span className="leading-[20px]">请描述企业所提供的产品或服务</span>
                          <span className="leading-[20px] text-[#9097ad]">{` (选填)`}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="[word-break:break-word] flex flex-col font-['Noto_Sans_SC:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#646e87] text-[12px] w-[520px]" data-node-id="1054:65582">
                  <p className="leading-[18px]">请描述您提供的所有产品 — 这可以是您在电商平台上销售的产品品类，您在线下渠道销售的商品，或是您为客户提供的服务内容。</p>
                </div>
                <div className="bg-white border border-[#e3e6ed] border-solid content-stretch flex flex-col h-[72px] items-start min-h-[48px] px-[12px] py-[6px] relative rounded-[6px] shrink-0 w-full" data-node-id="1054:65583" data-name="textarea">
                  <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px overflow-clip relative w-full" data-node-id="I1054:65583;3016:16107" data-name="Content">
                    <div className="[word-break:break-word] flex flex-col font-['Source_Han_Sans_CN:Regular'] justify-center leading-[0] not-italic relative shrink-0 text-[#9097ad] text-[14px] w-full" data-node-id="I1054:65583;3016:16108">
                      <p className="leading-[20px]">请输入</p>
                    </div>
                  </div>
                  <div className="absolute bottom-[5px] h-0 left-[11px] right-[11px]" data-node-id="I1054:65583;3016:16109" data-name="Resizer">
                    <div className="absolute bottom-[-2px] h-[8px] right-[-8.94px] w-[7.936px]" data-node-id="I1054:65583;3016:16111" data-name="Resizer">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgResizer} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start p-[8px] relative rounded-[8px] shrink-0 w-full" data-node-id="1054:65585" data-name="form-item">
                <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-node-id="1054:65586" data-name="form-item">
                  <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-[136px]" data-node-id="I1054:65586;723:14730" data-name="label-item">
                    <div className="content-stretch flex items-center relative shrink-0" data-node-id="I1054:65586;723:14730;1596:7980" data-name="Label">
                      <div className="[word-break:break-word] flex flex-col font-['Source_Han_Sans_CN:Medium'] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#1e2436] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="I1054:65586;723:14730;1596:7981">
                        <p className="leading-[20px] overflow-hidden text-ellipsis">产品的开发者是否为贵司</p>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full" data-node-id="I1054:65586;723:18900" data-name="radio-group">
                    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-node-id="I1054:65586;723:18900;723:15516" data-name="radio-item">
                      <div className="content-stretch flex items-center py-[2px] relative shrink-0" data-node-id="I1054:65586;723:18900;723:15516;2985:27923" data-name="radio">
                        <div className="relative shrink-0 size-[16px]" data-node-id="I1054:65586;723:18900;723:15516;175:2902" data-name="radio-item">
                          <div className="absolute bg-[#0036fe] inset-0 rounded-[8px]" data-node-id="I1054:65586;723:18900;723:15516;175:2902;654:9369" data-name="Radio" />
                          <div className="absolute bg-white inset-1/4 rounded-[8px]" data-node-id="I1054:65586;723:18900;723:15516;175:2902;654:9386" data-name="Radio" />
                        </div>
                      </div>
                      <div className="content-stretch flex gap-[2px] items-center justify-center relative shrink-0" data-node-id="I1054:65586;723:18900;723:15516;2985:28264" data-name="contents">
                        <div className="[word-break:break-word] flex flex-col font-['Source_Han_Sans_CN:Regular'] justify-center leading-[0] not-italic relative shrink-0 text-[#1e2436] text-[14px] whitespace-nowrap" data-node-id="I1054:65586;723:18900;723:15516;175:2903">
                          <p className="leading-[20px]">是</p>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-node-id="I1054:65586;723:18900;723:15521" data-name="radio-item">
                      <div className="content-stretch flex items-center py-[2px] relative shrink-0" data-node-id="I1054:65586;723:18900;723:15521;2985:27924" data-name="radio">
                        <div className="relative shrink-0 size-[16px]" data-node-id="I1054:65586;723:18900;723:15521;175:2881" data-name="radio-item">
                          <div className="absolute bg-white border border-[#e3e6ed] border-solid inset-0 rounded-[8px]" data-node-id="I1054:65586;723:18900;723:15521;175:2881;175:2857" data-name="Radio" />
                        </div>
                      </div>
                      <div className="content-stretch flex gap-[2px] items-center justify-center relative shrink-0" data-node-id="I1054:65586;723:18900;723:15521;2985:28265" data-name="contents">
                        <div className="[word-break:break-word] flex flex-col font-['Source_Han_Sans_CN:Regular'] justify-center leading-[0] not-italic relative shrink-0 text-[#1e2436] text-[14px] whitespace-nowrap" data-node-id="I1054:65586;723:18900;723:15521;175:2882">
                          <p className="leading-[20px]">否</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start p-[8px] relative rounded-[8px] shrink-0 w-full" data-node-id="1054:65587">
                <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-node-id="1054:65588">
                  <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-node-id="1054:65589" data-name="label">
                    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-start min-w-px relative" data-node-id="1054:65590" data-name="label-item">
                      <div className="content-stretch flex items-center relative shrink-0" data-node-id="I1054:65590;1596:7980" data-name="Label">
                        <div className="[word-break:break-word] flex flex-col font-['Source_Han_Sans_CN:Medium'] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#1e2436] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="I1054:65590;1596:7981">
                          <p className="leading-[20px] overflow-hidden text-ellipsis">产品开发者和贵司关联证明</p>
                        </div>
                      </div>
                      <div className="[word-break:break-word] flex flex-col font-['Source_Han_Sans_CN:Medium'] justify-center leading-[0] not-italic relative shrink-0 text-[#f43e3e] text-[14px] whitespace-nowrap" data-node-id="I1054:65590;1596:7982">
                        <p className="leading-[20px]">*</p>
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[4px] items-center justify-center px-[2px] relative rounded-[4px] shrink-0" data-node-id="1054:65591" data-name="link">
                      <div className="[word-break:break-word] flex flex-col font-['Source_Han_Sans_CN:Medium'] justify-center leading-[0] not-italic relative shrink-0 text-[#0036fe] text-[12px] whitespace-nowrap" data-node-id="I1054:65591;1341:12598">
                        <p className="leading-[18px]">示例</p>
                      </div>
                    </div>
                  </div>
                  <div className="[word-break:break-word] flex flex-col font-['Noto_Sans_SC:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#646e87] text-[12px] w-full" data-node-id="1054:65592">
                    <p className="leading-[18px]">需提供能够证明产品开发商与贵公司存在关联关系的文件,如:合作协议、授权书、股权证明、关联公司证明等。文件需清晰显示双方公司名称及关联关系。</p>
                  </div>
                  <div className="border border-[#dadde7] border-dashed content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[20px] relative rounded-[6px] shrink-0 w-full" data-node-id="1054:65593" data-name="upload-trigger">
                    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center justify-center min-w-px relative" data-node-id="1054:65594">
                      <div className="relative shrink-0 size-[16px]" data-node-id="1054:65595" data-name="common-linear-upload">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCommonLinearUpload} />
                      </div>
                      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-node-id="1054:65596" data-name="text-wrapper">
                        <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] not-italic relative shrink-0 text-[#1e2436] text-[14px] w-full" data-node-id="1054:65597">
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
      <div className="absolute bg-white border-[#edeef3] border-solid border-t bottom-0 content-stretch drop-shadow-[0px_-3px_3px_rgba(30,36,54,0.03)] flex items-center justify-center left-0 px-[32px] py-[16px] right-0" data-node-id="1043:49273" data-name="按钮区">
        <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0 w-[900px]" data-node-id="1043:49274" data-name="Action">
          <ButtonGroup className="content-stretch flex items-center justify-end relative shrink-0">
            <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0" data-node-id="1043:49279" data-name="按钮组">
              <div className="bg-[#0036fe] content-stretch flex gap-[6px] h-[32px] items-center justify-center min-w-[56px] px-[10px] py-[6px] relative rounded-[6px] shrink-0" data-node-id="1043:49283" data-name="button">
                <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap" data-node-id="I1043:49283;150:1168">
                  <p className="leading-[20px]">下一步</p>
                </div>
              </div>
            </div>
          </ButtonGroup>
        </div>
      </div>
    </div>
  );
}