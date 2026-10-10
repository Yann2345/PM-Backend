const assetPathPrefix = `${import.meta.env.BASE_URL}assets/light/detail`;
const imgTableCellSorter = `${assetPathPrefix}/7b8c0.svg`;
const imgClock = `${assetPathPrefix}/20386.svg`;
const imgStar = `${assetPathPrefix}/ea6d7.svg`;
const imgClock1 = `${assetPathPrefix}/3a60d.svg`;
const imgCommonFilledDownloading = `${assetPathPrefix}/2f649.svg`;
const imgTickCircle = `${assetPathPrefix}/178f0.svg`;
const imgCloseCircle = `${assetPathPrefix}/26f30.svg`;
const imgCommonLinearLocationLeft = `${assetPathPrefix}/c62bc.svg`;
const imgCommonLinearArrowLeft = `${assetPathPrefix}/4d62b.svg`;
const imgCommonLinearArrowRight = `${assetPathPrefix}/8ee97.svg`;
const imgCommonLinearLocationRight = `${assetPathPrefix}/638b1.svg`;
const imgIcon = `${assetPathPrefix}/406fd.svg`;
const imgAvatar = `${assetPathPrefix}/aace2.png`;
const imgGroup = `${assetPathPrefix}/282f0.svg`;
const imgGroup1 = `${assetPathPrefix}/99fd5.svg`;
const imgCommonLinearMenu = `${assetPathPrefix}/c43e8.svg`;
const imgHome = `${assetPathPrefix}/ef38f.svg`;
const imgGrid6 = `${import.meta.env.BASE_URL}assets/detail/17aa3.svg`;
const imgCommonFilledFile = `${import.meta.env.BASE_URL}assets/detail/a5489.svg`;
const imgTaskSquare = `${import.meta.env.BASE_URL}assets/detail/bc535.svg`;
const imgCommonLinearArrowRight1 = `${assetPathPrefix}/34335.svg`;
const imgSearchNormal = `${assetPathPrefix}/c7403.svg`;
const imgNotification = `${assetPathPrefix}/4d75d.svg`;
const imgCommonLinearMessageQuestion = `${assetPathPrefix}/36c6c.svg`;
const imgSidebarLinearSettings = `${assetPathPrefix}/ea483.svg`;
const imgCommonLinearArrowDown = `${assetPathPrefix}/e4899.svg`;
const imgStar1 = `${assetPathPrefix}/cd2d9.svg`;
const imgVector = `${import.meta.env.BASE_URL}assets/detail/082f6.svg`;
const imgCommonLinearArchiveAdd = `${assetPathPrefix}/5f239.svg`;
const imgCopy = `${assetPathPrefix}/e2de1.svg`;
const imgVector9 = `${assetPathPrefix}/dc749.svg`;
const imgCommonLinearCloseCircle = `${assetPathPrefix}/304a9.svg`;
const imgCommonLinearTickCircle = `${assetPathPrefix}/65e07.svg`;

type TableProps = {
  className?: string;
  children?: React.ReactNode | null;
  property1?: "双行";
  propValue1?: "紧凑";
};

function Table({ className, children = null, property1 = "双行", propValue1 = "紧凑" }: TableProps) {
  return (
    <div className={className || "bg-white content-stretch flex flex-col items-start relative w-[1120px]"} data-node-id="138:27656">
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="138:27657" data-name="水平布局插槽">
        {children || (
          <>
            <div className="bg-[#f7f9fc] border-[#edeff2] border-b border-solid content-stretch flex items-start overflow-clip relative rounded-[8px] shrink-0 w-full" data-node-id="138:27658" data-name="row">
              <div className="content-stretch flex items-center min-h-[40px] px-[12px] py-[10px] relative shrink-0" data-node-id="138:27660" data-name="table-cell-header">
                <div className="flex flex-row items-center self-stretch" data-node-id="I138:27660;1382:11072">
                  <div className="content-stretch flex h-full items-center relative shrink-0" data-name="Content">
                    <div className="relative shrink-0 size-[16px]" data-node-id="I138:27660;1382:11073" data-name="checkbox-item">
                      <div className="absolute bg-white border border-[#d4dee9] border-solid inset-0 rounded-[4px]" data-node-id="I138:27660;1382:11073;170:2053" data-name="Checkbox" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-[1_0_0] items-center min-h-[40px] min-w-[240px] px-[12px] py-[10px] relative" data-node-id="138:27661" data-name="table-cell-header">
                <div className="flex flex-row items-center self-stretch" data-node-id="I138:27661;567:4277">
                  <div className="content-stretch flex gap-[4px] h-full items-center relative shrink-0 w-[136px]" data-name="Content">
                    <div className="[word-break:break-word] flex flex-col font-['Noto_Sans_SC:Medium'] font-medium justify-center leading-[0] overflow-hidden relative shrink-0 text-[#667691] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="I138:27661;566:12188">
                      <p className="leading-[20px]">主文本</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-[1_0_0] items-center min-h-[40px] min-w-[120px] px-[12px] py-[10px] relative" data-node-id="138:27662" data-name="table-cell-header">
                <div className="flex flex-row items-center self-stretch" data-node-id="I138:27662;567:4277">
                  <div className="content-stretch flex gap-[4px] h-full items-center relative shrink-0 w-[136px]" data-name="Content">
                    <div className="[word-break:break-word] flex flex-col font-['Noto_Sans_SC:Medium'] font-medium justify-center leading-[0] overflow-hidden relative shrink-0 text-[#667691] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="I138:27662;566:12188">
                      <p className="leading-[20px]">业务标签</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-[1_0_0] items-center min-h-[40px] min-w-[120px] px-[12px] py-[10px] relative" data-node-id="138:27663" data-name="table-cell-header">
                <div className="flex flex-row items-center self-stretch" data-node-id="I138:27663;567:4277">
                  <div className="content-stretch flex gap-[4px] h-full items-center relative shrink-0 w-[136px]" data-name="Content">
                    <div className="[word-break:break-word] flex flex-col font-['Noto_Sans_SC:Medium'] font-medium justify-center leading-[0] overflow-hidden relative shrink-0 text-[#667691] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="I138:27663;566:12188">
                      <p className="leading-[20px]">负责人</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-[1_0_0] items-center min-h-[40px] min-w-[120px] px-[12px] py-[10px] relative" data-node-id="138:27664" data-name="table-cell-header">
                <div className="flex flex-row items-center self-stretch" data-node-id="I138:27664;567:4277">
                  <div className="content-stretch flex gap-[4px] h-full items-center relative shrink-0 w-[136px]" data-name="Content">
                    <div className="[word-break:break-word] flex flex-col font-['Noto_Sans_SC:Medium'] font-medium justify-center leading-[0] overflow-hidden relative shrink-0 text-[#667691] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="I138:27664;566:12188">
                      <p className="leading-[20px]">产品</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-[1_0_0] items-center min-h-[40px] min-w-[160px] px-[12px] py-[10px] relative" data-node-id="138:27665" data-name="table-cell-header">
                <div className="flex flex-row items-center self-stretch" data-node-id="I138:27665;567:4277">
                  <div className="content-stretch flex gap-[4px] h-full items-center relative shrink-0 w-[136px]" data-name="Content">
                    <div className="[word-break:break-word] flex flex-col font-['Noto_Sans_SC:Medium'] font-medium justify-center leading-[0] overflow-hidden relative shrink-0 text-[#667691] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="I138:27665;566:12188">
                      <p className="leading-[20px]">进度标签</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex items-center min-h-[40px] px-[12px] py-[10px] relative shrink-0 w-[160px]" data-node-id="138:27666" data-name="table-cell-header">
                <div className="flex flex-row items-center self-stretch" data-node-id="I138:27666;567:4275">
                  <div className="content-stretch flex gap-[4px] h-full items-center relative shrink-0 w-[136px]" data-name="Content">
                    <div className="[word-break:break-word] flex flex-col font-['Noto_Sans_SC:Medium'] font-medium justify-center leading-[0] overflow-hidden relative shrink-0 text-[#667691] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="I138:27666;566:13545">
                      <p className="leading-[20px]">时间</p>
                    </div>
                    <div className="relative shrink-0 size-[12px]" data-node-id="I138:27666;566:13593" data-name="table-cell-sorter">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgTableCellSorter} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex items-center min-h-[40px] px-[12px] py-[10px] relative shrink-0 w-[80px]" data-node-id="155:36611" data-name="table-cell-header">
                <div className="flex flex-row items-center self-stretch" data-node-id="I155:36611;567:4275">
                  <div className="content-stretch flex gap-[4px] h-full items-center relative shrink-0" data-name="Content">
                    <div className="[word-break:break-word] flex flex-col font-['Noto_Sans_SC:Medium'] font-medium justify-center leading-[0] overflow-hidden relative shrink-0 text-[#667691] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="I155:36611;566:13545">
                      <p className="leading-[20px]">操作</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-[#edeff2] border-b border-solid content-stretch flex items-start min-h-[40px] relative shrink-0 w-full" data-node-id="138:27671" data-name="row">
              <div className="border-0 border-[#edeff2] border-solid content-stretch flex items-center px-[12px] py-[10px] relative self-stretch shrink-0" data-node-id="138:27673" data-name="table-cell-body">
                <div className="content-stretch flex h-full items-center relative shrink-0" data-node-id="I138:27673;578:10663" data-name="Content">
                  <div className="relative shrink-0 size-[16px]" data-node-id="I138:27673;578:10871" data-name="checkbox-item">
                    <div className="absolute bg-white border border-[#d4dee9] border-solid inset-0 rounded-[4px]" data-node-id="I138:27673;578:10871;170:2053" data-name="Checkbox" />
                  </div>
                </div>
              </div>
              <div className="border-0 border-[#edeff2] border-solid content-stretch flex flex-[1_0_0] items-center min-w-[240px] px-[12px] py-[10px] relative" data-node-id="138:27674" data-name="table-cell-body">
                <div className="flex flex-[1_0_0] flex-row items-center self-stretch" data-node-id="I138:27674;2985:32162">
                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] h-full items-start justify-center min-w-px relative" data-name="Content">
                    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I138:27674;574:4502" data-name="Content">
                      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Noto_Sans_SC:SemiBold'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#1a2c44] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="I138:27674;574:4503">
                        <p className="leading-[20px] overflow-hidden text-ellipsis">阿里巴巴网络技术有限公司</p>
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I138:27674;2985:32766" data-name="caption">
                      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Noto_Sans_SC:Regular'] font-normal justify-center leading-[0] min-w-px relative text-[#667691] text-[14px]" data-node-id="I138:27674;2985:32768">
                        <p className="leading-[20px]">说明文字说明文字说明文字</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-0 border-[#edeff2] border-solid content-stretch flex flex-[1_0_0] items-center min-w-[120px] px-[12px] py-[10px] relative self-stretch" data-node-id="138:27675" data-name="table-cell-body">
                <div className="content-center flex flex-[1_0_0] flex-wrap gap-y-[4px] h-full items-center min-w-px relative" data-node-id="I138:27675;574:4925" data-name="标签插槽">
                  <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="I138:27675;574:4925;138:27752" data-name="会员等级">
                    <div className="bg-[#def2ff] content-stretch flex gap-[4px] items-center px-[6px] py-px relative rounded-[4px] shrink-0" data-node-id="I138:27675;574:4925;138:27752;2835:111866" data-name="tag">
                      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans_SC:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#005ad6] text-[14px] whitespace-nowrap" data-node-id="I138:27675;574:4925;138:27752;2835:111866;510:8448">
                        <p className="leading-[20px]">普通</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-0 border-[#edeff2] border-solid content-stretch flex flex-[1_0_0] items-center min-w-[120px] px-[12px] py-[10px] relative self-stretch" data-node-id="138:27676" data-name="table-cell-body">
                <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-node-id="I138:27676;2985:32162" data-name="Content">
                  <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I138:27676;574:4502" data-name="Content">
                    <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Noto_Sans_SC:Regular'] font-normal justify-center leading-[0] min-w-px overflow-hidden relative text-[#1a2c44] text-[14px] text-ellipsis" data-node-id="I138:27676;574:4503">
                      <p className="leading-[20px]">张三</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-0 border-[#edeff2] border-solid content-stretch flex flex-[1_0_0] items-center min-w-[120px] px-[12px] py-[10px] relative self-stretch" data-node-id="138:27677" data-name="table-cell-body">
                <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-node-id="I138:27677;2985:32162" data-name="Content">
                  <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I138:27677;574:4502" data-name="Content">
                    <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Noto_Sans_SC:Regular'] font-normal justify-center leading-[0] min-w-px overflow-hidden relative text-[#1a2c44] text-[14px] text-ellipsis" data-node-id="I138:27677;574:4503">
                      <p className="leading-[20px]">23</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-0 border-[#edeff2] border-solid content-stretch flex flex-[1_0_0] items-center min-w-[160px] px-[12px] py-[10px] relative self-stretch" data-node-id="138:27678" data-name="table-cell-body">
                <div className="content-center flex flex-[1_0_0] flex-wrap gap-[4px] h-full items-center min-w-px relative" data-node-id="I138:27678;138:22235" data-name="标签插槽">
                  <div className="relative shrink-0 size-[12px]" data-node-id="I138:27678;138:22655" data-name="common-filled-clock">
                    <div className="absolute inset-[8.33%]" data-node-id="I138:27678;138:22655;110:4551" data-name="clock">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgClock} />
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-node-id="I138:27678;138:22236" data-name="tag">
                    <div className="[word-break:break-word] flex flex-col font-['Noto_Sans_SC:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#1a2c44] text-[14px] whitespace-nowrap" data-node-id="I138:27678;138:22236;12616:46156">
                      <p className="leading-[20px]">初步接触</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-0 border-[#edeff2] border-solid content-stretch flex items-center min-w-[100px] px-[12px] py-[10px] relative self-stretch shrink-0 w-[160px]" data-node-id="138:27679" data-name="table-cell-body">
                <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-node-id="I138:27679;2985:32163" data-name="Content">
                  <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I138:27679;1312:14702" data-name="Content">
                    <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Noto_Sans_SC:Regular'] font-normal justify-center leading-[0] min-w-px relative text-[#1a2c44] text-[14px]" data-node-id="I138:27679;1312:14703">
                      <p className="leading-[20px]">2025-02-14 10:20:11</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-0 border-[#edeff2] border-solid content-stretch flex items-center px-[12px] py-[10px] relative self-stretch shrink-0" data-node-id="138:27680" data-name="table-cell-body">
                <div className="content-stretch flex items-center justify-end relative shrink-0" data-node-id="I138:27680;578:10532" data-name="button-group">
                  <div className="content-stretch flex gap-[12px] items-center justify-end relative shrink-0" data-node-id="I138:27680;578:10532;12640:3505" data-name="按钮布局插槽">
                    <div className="[word-break:break-word] flex flex-col font-['Noto_Sans_SC:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#0c71ff] text-[14px] text-center whitespace-nowrap" data-node-id="I138:27680;578:10532;12640:3505;138:27754">
                      <p className="leading-[20px]">详情</p>
                    </div>
                    <div className="relative shrink-0 size-[16px]" data-node-id="I138:27680;578:10532;12640:3505;138:27755" data-name="common-filled-more">
                      <div className="-translate-y-1/2 absolute h-[3.333px] left-[6.25%] right-[6.25%] top-1/2" data-node-id="I138:27680;578:10532;12640:3505;138:27755;110:4468" data-name="star">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgStar} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#f7f9fc] border-[#edeff2] border-b border-solid content-stretch flex items-start min-h-[40px] relative rounded-[8px] shrink-0 w-full" data-node-id="138:27681" data-name="row">
              <div className="border-0 border-[#edeff2] border-solid content-stretch flex items-center px-[12px] py-[10px] relative self-stretch shrink-0" data-node-id="138:27683" data-name="table-cell-body">
                <div className="content-stretch flex h-full items-center relative shrink-0" data-node-id="I138:27683;578:10663" data-name="Content">
                  <div className="relative shrink-0 size-[16px]" data-node-id="I138:27683;578:10871" data-name="checkbox-item">
                    <div className="absolute bg-white border border-[#d4dee9] border-solid inset-0 rounded-[4px]" data-node-id="I138:27683;578:10871;170:2053" data-name="Checkbox" />
                  </div>
                </div>
              </div>
              <div className="border-0 border-[#edeff2] border-solid content-stretch flex flex-[1_0_0] items-center min-w-[240px] px-[12px] py-[10px] relative" data-node-id="138:27684" data-name="table-cell-body">
                <div className="flex flex-[1_0_0] flex-row items-center self-stretch" data-node-id="I138:27684;2985:32162">
                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] h-full items-start justify-center min-w-px relative" data-name="Content">
                    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I138:27684;574:4502" data-name="Content">
                      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Noto_Sans_SC:SemiBold'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#1a2c44] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="I138:27684;574:4503">
                        <p className="leading-[20px] overflow-hidden text-ellipsis">鼠标悬浮效果</p>
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I138:27684;2985:32766" data-name="caption">
                      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Noto_Sans_SC:Regular'] font-normal justify-center leading-[0] min-w-px relative text-[#667691] text-[14px]" data-node-id="I138:27684;2985:32768">
                        <p className="leading-[20px]">说明文字说明文字说明文字</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-0 border-[#edeff2] border-solid content-stretch flex flex-[1_0_0] items-center min-w-[120px] px-[12px] py-[10px] relative self-stretch" data-node-id="138:27685" data-name="table-cell-body">
                <div className="content-center flex flex-[1_0_0] flex-wrap gap-y-[4px] h-full items-center min-w-px relative" data-node-id="I138:27685;574:4925" data-name="标签插槽">
                  <div className="content-stretch flex flex-col items-center justify-center relative rounded-[4px] shrink-0" data-node-id="I138:27685;574:4925;138:27757" data-name="会员等级">
                    <div className="bg-[#dbf7eb] content-stretch flex gap-[4px] items-center px-[6px] py-px relative rounded-[4px] shrink-0" data-node-id="I138:27685;574:4925;138:27757;2835:111945" data-name="tag">
                      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans_SC:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#30b57c] text-[14px] whitespace-nowrap" data-node-id="I138:27685;574:4925;138:27757;2835:111945;510:8950">
                        <p className="leading-[20px]">SMA</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-0 border-[#edeff2] border-solid content-stretch flex flex-[1_0_0] items-center min-w-[120px] px-[12px] py-[10px] relative self-stretch" data-node-id="138:27686" data-name="table-cell-body">
                <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-node-id="I138:27686;2985:32162" data-name="Content">
                  <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I138:27686;574:4502" data-name="Content">
                    <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Noto_Sans_SC:Regular'] font-normal justify-center leading-[0] min-w-px overflow-hidden relative text-[#1a2c44] text-[14px] text-ellipsis" data-node-id="I138:27686;574:4503">
                      <p className="leading-[20px]">张三</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-0 border-[#edeff2] border-solid content-stretch flex flex-[1_0_0] items-center min-w-[120px] px-[12px] py-[10px] relative self-stretch" data-node-id="138:27687" data-name="table-cell-body">
                <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-node-id="I138:27687;2985:32162" data-name="Content">
                  <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I138:27687;574:4502" data-name="Content">
                    <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Noto_Sans_SC:Regular'] font-normal justify-center leading-[0] min-w-px overflow-hidden relative text-[#1a2c44] text-[14px] text-ellipsis" data-node-id="I138:27687;574:4503">
                      <p className="leading-[20px]">2</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-0 border-[#edeff2] border-solid content-stretch flex flex-[1_0_0] items-center min-w-[160px] px-[12px] py-[10px] relative self-stretch" data-node-id="138:27688" data-name="table-cell-body">
                <div className="content-center flex flex-[1_0_0] flex-wrap gap-[4px] h-full items-center min-w-px relative" data-node-id="I138:27688;138:22678" data-name="标签插槽">
                  <div className="relative shrink-0 size-[12px]" data-node-id="I138:27688;138:22679" data-name="common-filled-clock">
                    <div className="absolute inset-[8.33%]" data-node-id="I138:27688;138:22679;110:4551" data-name="clock">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgClock1} />
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-node-id="I138:27688;138:22680" data-name="tag">
                    <div className="[word-break:break-word] flex flex-col font-['Noto_Sans_SC:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#1a2c44] text-[14px] whitespace-nowrap" data-node-id="I138:27688;138:22680;12616:46156">
                      <p className="leading-[20px]">意向沟通</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-0 border-[#edeff2] border-solid content-stretch flex items-center min-w-[100px] px-[12px] py-[10px] relative self-stretch shrink-0 w-[160px]" data-node-id="138:27689" data-name="table-cell-body">
                <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-node-id="I138:27689;2985:32163" data-name="Content">
                  <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I138:27689;1312:14702" data-name="Content">
                    <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Noto_Sans_SC:Regular'] font-normal justify-center leading-[0] min-w-px relative text-[#1a2c44] text-[14px]" data-node-id="I138:27689;1312:14703">
                      <p className="leading-[20px]">2025-02-14 10:20:11</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-0 border-[#edeff2] border-solid content-stretch flex items-center px-[12px] py-[10px] relative self-stretch shrink-0" data-node-id="138:27690" data-name="table-cell-body">
                <div className="content-stretch flex items-center justify-end relative shrink-0" data-node-id="I138:27690;578:10532" data-name="button-group">
                  <div className="content-stretch flex gap-[12px] items-center justify-end relative shrink-0" data-node-id="I138:27690;578:10532;12640:3505" data-name="按钮布局插槽">
                    <div className="[word-break:break-word] flex flex-col font-['Noto_Sans_SC:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#0c71ff] text-[14px] text-center whitespace-nowrap" data-node-id="I138:27690;578:10532;12640:3505;138:27759">
                      <p className="leading-[20px]">详情</p>
                    </div>
                    <div className="relative shrink-0 size-[16px]" data-node-id="I138:27690;578:10532;12640:3505;138:27760" data-name="common-filled-more">
                      <div className="-translate-y-1/2 absolute h-[3.333px] left-[6.25%] right-[6.25%] top-1/2" data-node-id="I138:27690;578:10532;12640:3505;138:27760;110:4468" data-name="star">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgStar} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-[#edeff2] border-b border-solid content-stretch flex items-start min-h-[40px] relative shrink-0 w-full" data-node-id="138:27691" data-name="row">
              <div className="border-0 border-[#edeff2] border-solid content-stretch flex items-center px-[12px] py-[10px] relative self-stretch shrink-0" data-node-id="138:27693" data-name="table-cell-body">
                <div className="content-stretch flex h-full items-center relative shrink-0" data-node-id="I138:27693;578:10663" data-name="Content">
                  <div className="relative shrink-0 size-[16px]" data-node-id="I138:27693;578:10871" data-name="checkbox-item">
                    <div className="absolute bg-white border border-[#d4dee9] border-solid inset-0 rounded-[4px]" data-node-id="I138:27693;578:10871;170:2053" data-name="Checkbox" />
                  </div>
                </div>
              </div>
              <div className="border-0 border-[#edeff2] border-solid content-stretch flex flex-[1_0_0] items-center min-w-[240px] px-[12px] py-[10px] relative" data-node-id="138:27694" data-name="table-cell-body">
                <div className="flex flex-[1_0_0] flex-row items-center self-stretch" data-node-id="I138:27694;2985:32162">
                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] h-full items-start justify-center min-w-px relative" data-name="Content">
                    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I138:27694;574:4502" data-name="Content">
                      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Noto_Sans_SC:SemiBold'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#1a2c44] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="I138:27694;574:4503">
                        <p className="leading-[20px] overflow-hidden text-ellipsis">阿里巴巴网络技术有限公司</p>
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I138:27694;2985:32766" data-name="caption">
                      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Noto_Sans_SC:Regular'] font-normal justify-center leading-[0] min-w-px relative text-[#667691] text-[14px]" data-node-id="I138:27694;2985:32768">
                        <p className="leading-[20px]">说明文字说明文字说明文字</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-0 border-[#edeff2] border-solid content-stretch flex flex-[1_0_0] items-center min-w-[120px] px-[12px] py-[10px] relative self-stretch" data-node-id="138:27695" data-name="table-cell-body">
                <div className="content-center flex flex-[1_0_0] flex-wrap gap-y-[4px] h-full items-center min-w-px relative" data-node-id="I138:27695;574:4925" data-name="标签插槽">
                  <div className="content-stretch flex flex-col items-center justify-center relative rounded-[4px] shrink-0" data-node-id="I138:27695;574:4925;138:27762" data-name="会员等级">
                    <div className="bg-[#ece5ff] content-stretch flex gap-[4px] items-center px-[6px] py-px relative rounded-[4px] shrink-0" data-node-id="I138:27695;574:4925;138:27762;2835:112001" data-name="tag">
                      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans_SC:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#7949fa] text-[14px] whitespace-nowrap" data-node-id="I138:27695;574:4925;138:27762;2835:112001;510:8448">
                        <p className="leading-[20px]">KA</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-0 border-[#edeff2] border-solid content-stretch flex flex-[1_0_0] items-center min-w-[120px] px-[12px] py-[10px] relative self-stretch" data-node-id="138:27696" data-name="table-cell-body">
                <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-node-id="I138:27696;2985:32162" data-name="Content">
                  <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I138:27696;574:4502" data-name="Content">
                    <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Noto_Sans_SC:Regular'] font-normal justify-center leading-[0] min-w-px overflow-hidden relative text-[#1a2c44] text-[14px] text-ellipsis" data-node-id="I138:27696;574:4503">
                      <p className="leading-[20px]">张三</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-0 border-[#edeff2] border-solid content-stretch flex flex-[1_0_0] items-center min-w-[120px] px-[12px] py-[10px] relative self-stretch" data-node-id="138:27697" data-name="table-cell-body">
                <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-node-id="I138:27697;2985:32162" data-name="Content">
                  <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I138:27697;574:4502" data-name="Content">
                    <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Noto_Sans_SC:Regular'] font-normal justify-center leading-[0] min-w-px overflow-hidden relative text-[#1a2c44] text-[14px] text-ellipsis" data-node-id="I138:27697;574:4503">
                      <p className="leading-[20px]">3</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-0 border-[#edeff2] border-solid content-stretch flex flex-[1_0_0] items-center min-w-[160px] px-[12px] py-[10px] relative self-stretch" data-node-id="138:27698" data-name="table-cell-body">
                <div className="content-center flex flex-[1_0_0] flex-wrap gap-[4px] h-full items-center min-w-px relative" data-node-id="I138:27698;138:22701" data-name="标签插槽">
                  <div className="relative shrink-0 size-[12px]" data-node-id="I138:27698;138:22710" data-name="common-filled-downloading">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCommonFilledDownloading} />
                  </div>
                  <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-node-id="I138:27698;138:22703" data-name="tag">
                    <div className="[word-break:break-word] flex flex-col font-['Noto_Sans_SC:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#1a2c44] text-[14px] whitespace-nowrap" data-node-id="I138:27698;138:22703;12616:46156">
                      <p className="leading-[20px]">入驻签约</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-0 border-[#edeff2] border-solid content-stretch flex items-center min-w-[100px] px-[12px] py-[10px] relative self-stretch shrink-0 w-[160px]" data-node-id="138:27699" data-name="table-cell-body">
                <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-node-id="I138:27699;2985:32163" data-name="Content">
                  <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I138:27699;1312:14702" data-name="Content">
                    <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Noto_Sans_SC:Regular'] font-normal justify-center leading-[0] min-w-px relative text-[#1a2c44] text-[14px]" data-node-id="I138:27699;1312:14703">
                      <p className="leading-[20px]">2025-02-14 10:20:11</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-0 border-[#edeff2] border-solid content-stretch flex items-center px-[12px] py-[10px] relative self-stretch shrink-0" data-node-id="138:27700" data-name="table-cell-body">
                <div className="content-stretch flex items-center justify-end relative shrink-0" data-node-id="I138:27700;578:10532" data-name="button-group">
                  <div className="content-stretch flex gap-[12px] items-center justify-end relative shrink-0" data-node-id="I138:27700;578:10532;12640:3505" data-name="按钮布局插槽">
                    <div className="[word-break:break-word] flex flex-col font-['Noto_Sans_SC:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#0c71ff] text-[14px] text-center whitespace-nowrap" data-node-id="I138:27700;578:10532;12640:3505;138:27764">
                      <p className="leading-[20px]">详情</p>
                    </div>
                    <div className="relative shrink-0 size-[16px]" data-node-id="I138:27700;578:10532;12640:3505;138:27765" data-name="common-filled-more">
                      <div className="-translate-y-1/2 absolute h-[3.333px] left-[6.25%] right-[6.25%] top-1/2" data-node-id="I138:27700;578:10532;12640:3505;138:27765;110:4468" data-name="star">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgStar} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-[#edeff2] border-b border-solid content-stretch flex items-start min-h-[40px] relative shrink-0 w-full" data-node-id="138:27701" data-name="row">
              <div className="border-0 border-[#edeff2] border-solid content-stretch flex items-center px-[12px] py-[10px] relative self-stretch shrink-0" data-node-id="138:27703" data-name="table-cell-body">
                <div className="content-stretch flex h-full items-center relative shrink-0" data-node-id="I138:27703;578:10663" data-name="Content">
                  <div className="relative shrink-0 size-[16px]" data-node-id="I138:27703;578:10871" data-name="checkbox-item">
                    <div className="absolute bg-white border border-[#d4dee9] border-solid inset-0 rounded-[4px]" data-node-id="I138:27703;578:10871;170:2053" data-name="Checkbox" />
                  </div>
                </div>
              </div>
              <div className="border-0 border-[#edeff2] border-solid content-stretch flex flex-[1_0_0] items-center min-w-[240px] px-[12px] py-[10px] relative" data-node-id="138:27704" data-name="table-cell-body">
                <div className="flex flex-[1_0_0] flex-row items-center self-stretch" data-node-id="I138:27704;2985:32162">
                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] h-full items-start justify-center min-w-px relative" data-name="Content">
                    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I138:27704;574:4502" data-name="Content">
                      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Noto_Sans_SC:SemiBold'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#1a2c44] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="I138:27704;574:4503">
                        <p className="leading-[20px] overflow-hidden text-ellipsis">阿里巴巴网络技术有限公司</p>
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I138:27704;2985:32766" data-name="caption">
                      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Noto_Sans_SC:Regular'] font-normal justify-center leading-[0] min-w-px relative text-[#667691] text-[14px]" data-node-id="I138:27704;2985:32768">
                        <p className="leading-[20px]">说明文字说明文字说明文字</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-0 border-[#edeff2] border-solid content-stretch flex flex-[1_0_0] items-center min-w-[120px] px-[12px] py-[10px] relative self-stretch" data-node-id="138:27705" data-name="table-cell-body">
                <div className="content-center flex flex-[1_0_0] flex-wrap gap-y-[4px] h-full items-center min-w-px relative" data-node-id="I138:27705;574:4925" data-name="标签插槽">
                  <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="I138:27705;574:4925;138:27767" data-name="会员等级">
                    <div className="bg-[#def2ff] content-stretch flex gap-[4px] items-center px-[6px] py-px relative rounded-[4px] shrink-0" data-node-id="I138:27705;574:4925;138:27767;2835:111866" data-name="tag">
                      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans_SC:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#005ad6] text-[14px] whitespace-nowrap" data-node-id="I138:27705;574:4925;138:27767;2835:111866;510:8448">
                        <p className="leading-[20px]">普通</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-0 border-[#edeff2] border-solid content-stretch flex flex-[1_0_0] items-center min-w-[120px] px-[12px] py-[10px] relative self-stretch" data-node-id="138:27706" data-name="table-cell-body">
                <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-node-id="I138:27706;2985:32162" data-name="Content">
                  <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I138:27706;574:4502" data-name="Content">
                    <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Noto_Sans_SC:Regular'] font-normal justify-center leading-[0] min-w-px overflow-hidden relative text-[#1a2c44] text-[14px] text-ellipsis" data-node-id="I138:27706;574:4503">
                      <p className="leading-[20px]">张三</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-0 border-[#edeff2] border-solid content-stretch flex flex-[1_0_0] items-center min-w-[120px] px-[12px] py-[10px] relative self-stretch" data-node-id="138:27707" data-name="table-cell-body">
                <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-node-id="I138:27707;2985:32162" data-name="Content">
                  <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I138:27707;574:4502" data-name="Content">
                    <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Noto_Sans_SC:Regular'] font-normal justify-center leading-[0] min-w-px overflow-hidden relative text-[#1a2c44] text-[14px] text-ellipsis" data-node-id="I138:27707;574:4503">
                      <p className="leading-[20px]">1</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-0 border-[#edeff2] border-solid content-stretch flex flex-[1_0_0] items-center min-w-[160px] px-[12px] py-[10px] relative self-stretch" data-node-id="138:27708" data-name="table-cell-body">
                <div className="content-center flex flex-[1_0_0] flex-wrap gap-[4px] h-full items-center min-w-px relative" data-node-id="I138:27708;138:22720" data-name="标签插槽">
                  <div className="relative shrink-0 size-[12px]" data-node-id="I138:27708;138:22728" data-name="common-filled-tick-circle">
                    <div className="absolute inset-[8.33%]" data-node-id="I138:27708;138:22728;110:4089" data-name="tick-circle">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgTickCircle} />
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-node-id="I138:27708;138:22722" data-name="tag">
                    <div className="[word-break:break-word] flex flex-col font-['Noto_Sans_SC:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#1a2c44] text-[14px] whitespace-nowrap" data-node-id="I138:27708;138:22722;12616:46156">
                      <p className="leading-[20px]">运营/增长</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-0 border-[#edeff2] border-solid content-stretch flex items-center min-w-[100px] px-[12px] py-[10px] relative self-stretch shrink-0 w-[160px]" data-node-id="138:27709" data-name="table-cell-body">
                <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-node-id="I138:27709;2985:32163" data-name="Content">
                  <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I138:27709;1312:14702" data-name="Content">
                    <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Noto_Sans_SC:Regular'] font-normal justify-center leading-[0] min-w-px relative text-[#1a2c44] text-[14px]" data-node-id="I138:27709;1312:14703">
                      <p className="leading-[20px]">2025-02-14 10:20:11</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-0 border-[#edeff2] border-solid content-stretch flex items-center px-[12px] py-[10px] relative self-stretch shrink-0" data-node-id="138:27710" data-name="table-cell-body">
                <div className="content-stretch flex items-center justify-end relative shrink-0" data-node-id="I138:27710;578:10532" data-name="button-group">
                  <div className="content-stretch flex gap-[12px] items-center justify-end relative shrink-0" data-node-id="I138:27710;578:10532;12640:3505" data-name="按钮布局插槽">
                    <div className="[word-break:break-word] flex flex-col font-['Noto_Sans_SC:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#0c71ff] text-[14px] text-center whitespace-nowrap" data-node-id="I138:27710;578:10532;12640:3505;138:27769">
                      <p className="leading-[20px]">详情</p>
                    </div>
                    <div className="relative shrink-0 size-[16px]" data-node-id="I138:27710;578:10532;12640:3505;138:27770" data-name="common-filled-more">
                      <div className="-translate-y-1/2 absolute h-[3.333px] left-[6.25%] right-[6.25%] top-1/2" data-node-id="I138:27710;578:10532;12640:3505;138:27770;110:4468" data-name="star">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgStar} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-[#edeff2] border-b border-solid content-stretch flex items-start min-h-[40px] relative shrink-0 w-full" data-node-id="138:27711" data-name="row">
              <div className="border-0 border-[#edeff2] border-solid content-stretch flex items-center px-[12px] py-[10px] relative self-stretch shrink-0" data-node-id="138:27713" data-name="table-cell-body">
                <div className="content-stretch flex h-full items-center relative shrink-0" data-node-id="I138:27713;578:10663" data-name="Content">
                  <div className="relative shrink-0 size-[16px]" data-node-id="I138:27713;578:10871" data-name="checkbox-item">
                    <div className="absolute bg-white border border-[#d4dee9] border-solid inset-0 rounded-[4px]" data-node-id="I138:27713;578:10871;170:2053" data-name="Checkbox" />
                  </div>
                </div>
              </div>
              <div className="border-0 border-[#edeff2] border-solid content-stretch flex flex-[1_0_0] items-center min-w-[240px] px-[12px] py-[10px] relative" data-node-id="138:27714" data-name="table-cell-body">
                <div className="flex flex-[1_0_0] flex-row items-center self-stretch" data-node-id="I138:27714;2985:32162">
                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] h-full items-start justify-center min-w-px relative" data-name="Content">
                    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I138:27714;574:4502" data-name="Content">
                      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Noto_Sans_SC:SemiBold'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#1a2c44] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="I138:27714;574:4503">
                        <p className="leading-[20px] overflow-hidden text-ellipsis">阿里巴巴网络技术有限公司</p>
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I138:27714;2985:32766" data-name="caption">
                      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Noto_Sans_SC:Regular'] font-normal justify-center leading-[0] min-w-px relative text-[#667691] text-[14px]" data-node-id="I138:27714;2985:32768">
                        <p className="leading-[20px]">说明文字说明文字说明文字</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-0 border-[#edeff2] border-solid content-stretch flex flex-[1_0_0] items-center min-w-[120px] px-[12px] py-[10px] relative self-stretch" data-node-id="138:27715" data-name="table-cell-body">
                <div className="content-center flex flex-[1_0_0] flex-wrap gap-y-[4px] h-full items-center min-w-px relative" data-node-id="I138:27715;574:4925" data-name="标签插槽">
                  <div className="bg-[#ffec9d] content-stretch flex flex-col items-center justify-center relative rounded-[4px] shrink-0" data-node-id="I138:27715;574:4925;138:27772" data-name="会员等级">
                    <div className="bg-[#ffead0] content-stretch flex gap-[4px] items-center px-[6px] py-px relative rounded-[4px] shrink-0" data-node-id="I138:27715;574:4925;138:27772;2835:112011" data-name="tag">
                      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans_SC:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#e27d00] text-[14px] whitespace-nowrap" data-node-id="I138:27715;574:4925;138:27772;2835:112011;510:8448">
                        <p className="leading-[20px]">SKA</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-0 border-[#edeff2] border-solid content-stretch flex flex-[1_0_0] items-center min-w-[120px] px-[12px] py-[10px] relative self-stretch" data-node-id="138:27716" data-name="table-cell-body">
                <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-node-id="I138:27716;2985:32162" data-name="Content">
                  <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I138:27716;574:4502" data-name="Content">
                    <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Noto_Sans_SC:Regular'] font-normal justify-center leading-[0] min-w-px overflow-hidden relative text-[#1a2c44] text-[14px] text-ellipsis" data-node-id="I138:27716;574:4503">
                      <p className="leading-[20px]">张三</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-0 border-[#edeff2] border-solid content-stretch flex flex-[1_0_0] items-center min-w-[120px] px-[12px] py-[10px] relative self-stretch" data-node-id="138:27717" data-name="table-cell-body">
                <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-node-id="I138:27717;2985:32162" data-name="Content">
                  <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I138:27717;574:4502" data-name="Content">
                    <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Noto_Sans_SC:Regular'] font-normal justify-center leading-[0] min-w-px overflow-hidden relative text-[#1a2c44] text-[14px] text-ellipsis" data-node-id="I138:27717;574:4503">
                      <p className="leading-[20px]">6</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-0 border-[#edeff2] border-solid content-stretch flex flex-[1_0_0] items-center min-w-[160px] px-[12px] py-[10px] relative self-stretch" data-node-id="138:27718" data-name="table-cell-body">
                <div className="content-center flex flex-[1_0_0] flex-wrap gap-[4px] h-full items-center min-w-px relative" data-node-id="I138:27718;138:22734" data-name="标签插槽">
                  <div className="relative shrink-0 size-[12px]" data-node-id="I138:27718;138:22742" data-name="common-filled-close-circle">
                    <div className="absolute inset-[8.33%]" data-node-id="I138:27718;138:22742;110:4128" data-name="close-circle">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCloseCircle} />
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-node-id="I138:27718;138:22736" data-name="tag">
                    <div className="[word-break:break-word] flex flex-col font-['Noto_Sans_SC:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#1a2c44] text-[14px] whitespace-nowrap" data-node-id="I138:27718;138:22736;12616:46156">
                      <p className="leading-[20px]">沉睡/流失</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-0 border-[#edeff2] border-solid content-stretch flex items-center min-w-[100px] px-[12px] py-[10px] relative self-stretch shrink-0 w-[160px]" data-node-id="138:27719" data-name="table-cell-body">
                <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-node-id="I138:27719;2985:32163" data-name="Content">
                  <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I138:27719;1312:14702" data-name="Content">
                    <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Noto_Sans_SC:Regular'] font-normal justify-center leading-[0] min-w-px relative text-[#1a2c44] text-[14px]" data-node-id="I138:27719;1312:14703">
                      <p className="leading-[20px]">2025-02-14 10:20:11</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-0 border-[#edeff2] border-solid content-stretch flex items-center px-[12px] py-[10px] relative self-stretch shrink-0" data-node-id="138:27720" data-name="table-cell-body">
                <div className="content-stretch flex items-center justify-end relative shrink-0" data-node-id="I138:27720;578:10532" data-name="button-group">
                  <div className="content-stretch flex gap-[12px] items-center justify-end relative shrink-0" data-node-id="I138:27720;578:10532;12640:3505" data-name="按钮布局插槽">
                    <div className="[word-break:break-word] flex flex-col font-['Noto_Sans_SC:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#0c71ff] text-[14px] text-center whitespace-nowrap" data-node-id="I138:27720;578:10532;12640:3505;138:27774">
                      <p className="leading-[20px]">详情</p>
                    </div>
                    <div className="relative shrink-0 size-[16px]" data-node-id="I138:27720;578:10532;12640:3505;138:27775" data-name="common-filled-more">
                      <div className="-translate-y-1/2 absolute h-[3.333px] left-[6.25%] right-[6.25%] top-1/2" data-node-id="I138:27720;578:10532;12640:3505;138:27775;110:4468" data-name="star">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgStar} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-[#edeff2] border-b border-solid content-stretch flex items-start min-h-[40px] relative shrink-0 w-full" data-node-id="138:27721" data-name="row">
              <div className="border-0 border-[#edeff2] border-solid content-stretch flex items-center px-[12px] py-[10px] relative self-stretch shrink-0" data-node-id="138:27723" data-name="table-cell-body">
                <div className="content-stretch flex h-full items-center relative shrink-0" data-node-id="I138:27723;578:10663" data-name="Content">
                  <div className="relative shrink-0 size-[16px]" data-node-id="I138:27723;578:10871" data-name="checkbox-item">
                    <div className="absolute bg-white border border-[#d4dee9] border-solid inset-0 rounded-[4px]" data-node-id="I138:27723;578:10871;170:2053" data-name="Checkbox" />
                  </div>
                </div>
              </div>
              <div className="border-0 border-[#edeff2] border-solid content-stretch flex flex-[1_0_0] items-center min-w-[240px] px-[12px] py-[10px] relative" data-node-id="138:27724" data-name="table-cell-body">
                <div className="flex flex-[1_0_0] flex-row items-center self-stretch" data-node-id="I138:27724;2985:32162">
                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] h-full items-start justify-center min-w-px relative" data-name="Content">
                    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I138:27724;574:4502" data-name="Content">
                      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Noto_Sans_SC:SemiBold'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#1a2c44] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="I138:27724;574:4503">
                        <p className="leading-[20px] overflow-hidden text-ellipsis">阿里巴巴网络技术有限公司</p>
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I138:27724;2985:32766" data-name="caption">
                      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Noto_Sans_SC:Regular'] font-normal justify-center leading-[0] min-w-px relative text-[#667691] text-[14px]" data-node-id="I138:27724;2985:32768">
                        <p className="leading-[20px]">说明文字说明文字说明文字</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-0 border-[#edeff2] border-solid content-stretch flex flex-[1_0_0] items-center min-w-[120px] px-[12px] py-[10px] relative self-stretch" data-node-id="138:27725" data-name="table-cell-body">
                <div className="content-center flex flex-[1_0_0] flex-wrap gap-y-[4px] h-full items-center min-w-px relative" data-node-id="I138:27725;574:4925" data-name="标签插槽">
                  <div className="bg-[#ffec9d] content-stretch flex flex-col items-center justify-center relative rounded-[4px] shrink-0" data-node-id="I138:27725;574:4925;138:27777" data-name="会员等级">
                    <div className="bg-[#ffead0] content-stretch flex gap-[4px] items-center px-[6px] py-px relative rounded-[4px] shrink-0" data-node-id="I138:27725;574:4925;138:27777;2835:112011" data-name="tag">
                      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans_SC:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#e27d00] text-[14px] whitespace-nowrap" data-node-id="I138:27725;574:4925;138:27777;2835:112011;510:8448">
                        <p className="leading-[20px]">SKA</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-0 border-[#edeff2] border-solid content-stretch flex flex-[1_0_0] items-center min-w-[120px] px-[12px] py-[10px] relative self-stretch" data-node-id="138:27726" data-name="table-cell-body">
                <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-node-id="I138:27726;2985:32162" data-name="Content">
                  <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I138:27726;574:4502" data-name="Content">
                    <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Noto_Sans_SC:Regular'] font-normal justify-center leading-[0] min-w-px overflow-hidden relative text-[#1a2c44] text-[14px] text-ellipsis" data-node-id="I138:27726;574:4503">
                      <p className="leading-[20px]">张三</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-0 border-[#edeff2] border-solid content-stretch flex flex-[1_0_0] items-center min-w-[120px] px-[12px] py-[10px] relative self-stretch" data-node-id="138:27727" data-name="table-cell-body">
                <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-node-id="I138:27727;2985:32162" data-name="Content">
                  <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I138:27727;574:4502" data-name="Content">
                    <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Noto_Sans_SC:Regular'] font-normal justify-center leading-[0] min-w-px overflow-hidden relative text-[#1a2c44] text-[14px] text-ellipsis" data-node-id="I138:27727;574:4503">
                      <p className="leading-[20px]">12</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-0 border-[#edeff2] border-solid content-stretch flex flex-[1_0_0] items-center min-w-[160px] px-[12px] py-[10px] relative self-stretch" data-node-id="138:27728" data-name="table-cell-body">
                <div className="content-center flex flex-[1_0_0] flex-wrap gap-[4px] h-full items-center min-w-px relative" data-node-id="I138:27728;138:22678" data-name="标签插槽">
                  <div className="relative shrink-0 size-[12px]" data-node-id="I138:27728;138:22679" data-name="common-filled-clock">
                    <div className="absolute inset-[8.33%]" data-node-id="I138:27728;138:22679;110:4551" data-name="clock">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgClock1} />
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-node-id="I138:27728;138:22680" data-name="tag">
                    <div className="[word-break:break-word] flex flex-col font-['Noto_Sans_SC:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#1a2c44] text-[14px] whitespace-nowrap" data-node-id="I138:27728;138:22680;12616:46156">
                      <p className="leading-[20px]">意向沟通</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-0 border-[#edeff2] border-solid content-stretch flex items-center min-w-[100px] px-[12px] py-[10px] relative self-stretch shrink-0 w-[160px]" data-node-id="138:27729" data-name="table-cell-body">
                <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-node-id="I138:27729;2985:32163" data-name="Content">
                  <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I138:27729;1312:14702" data-name="Content">
                    <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Noto_Sans_SC:Regular'] font-normal justify-center leading-[0] min-w-px relative text-[#1a2c44] text-[14px]" data-node-id="I138:27729;1312:14703">
                      <p className="leading-[20px]">2025-02-14 10:20:11</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-0 border-[#edeff2] border-solid content-stretch flex items-center px-[12px] py-[10px] relative self-stretch shrink-0" data-node-id="138:27730" data-name="table-cell-body">
                <div className="content-stretch flex items-center justify-end relative shrink-0" data-node-id="I138:27730;578:10532" data-name="button-group">
                  <div className="content-stretch flex gap-[12px] items-center justify-end relative shrink-0" data-node-id="I138:27730;578:10532;12640:3505" data-name="按钮布局插槽">
                    <div className="[word-break:break-word] flex flex-col font-['Noto_Sans_SC:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#0c71ff] text-[14px] text-center whitespace-nowrap" data-node-id="I138:27730;578:10532;12640:3505;138:27779">
                      <p className="leading-[20px]">详情</p>
                    </div>
                    <div className="relative shrink-0 size-[16px]" data-node-id="I138:27730;578:10532;12640:3505;138:27780" data-name="common-filled-more">
                      <div className="-translate-y-1/2 absolute h-[3.333px] left-[6.25%] right-[6.25%] top-1/2" data-node-id="I138:27730;578:10532;12640:3505;138:27780;110:4468" data-name="star">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgStar} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white border-[#edeff2] border-solid border-t content-stretch flex gap-[8px] items-center p-[12px] relative shrink-0 w-[1120px]" data-node-id="138:27731" data-name="Paginator">
              <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-node-id="138:27732" data-name="showTotal">
                <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Source_Han_Sans_CN:Regular'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#667691] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="138:27733">
                  <p className="leading-[20px] overflow-hidden text-ellipsis">共50条</p>
                </div>
              </div>
              <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-node-id="138:27734" data-name="paginator">
                <div className="content-stretch flex items-center justify-center p-[8px] relative rounded-[8px] shrink-0" data-node-id="138:27735" data-name="_paginator-iconbutton">
                  <div className="relative shrink-0 size-[12px]" data-node-id="I138:27735;884:9112" data-name="common-linear-location-left">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCommonLinearLocationLeft} />
                  </div>
                </div>
                <div className="content-stretch flex items-center justify-center p-[8px] relative rounded-[8px] shrink-0" data-node-id="138:27736" data-name="_paginator-iconbutton">
                  <div className="relative shrink-0 size-[12px]" data-node-id="I138:27736;884:9104" data-name="common-linear-arrow-left">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCommonLinearArrowLeft} />
                  </div>
                </div>
                <div className="border border-[#0c71ff] border-solid content-stretch flex flex-col items-center justify-center relative rounded-[8px] shrink-0 size-[28px]" data-node-id="138:27737" data-name="_paginator-cell-text">
                  <div className="[word-break:break-word] flex flex-col font-['Source_Han_Sans_CN:Regular'] justify-center leading-[0] not-italic relative shrink-0 text-[#0c71ff] text-[14px] whitespace-nowrap" data-node-id="I138:27737;884:9333">
                    <p className="leading-[20px]">1</p>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-center justify-center relative rounded-[8px] shrink-0 size-[28px]" data-node-id="138:27738" data-name="_paginator-cell-text">
                  <div className="[word-break:break-word] flex flex-col font-['Source_Han_Sans_CN:Regular'] justify-center leading-[0] not-italic relative shrink-0 text-[#667691] text-[14px] whitespace-nowrap" data-node-id="I138:27738;884:9339">
                    <p className="leading-[20px]">2</p>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-center justify-center relative rounded-[8px] shrink-0 size-[28px]" data-node-id="138:27739" data-name="_paginator-cell-text">
                  <div className="[word-break:break-word] flex flex-col font-['Source_Han_Sans_CN:Regular'] justify-center leading-[0] not-italic relative shrink-0 text-[#667691] text-[14px] whitespace-nowrap" data-node-id="I138:27739;884:9339">
                    <p className="leading-[20px]">3</p>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-center justify-center relative rounded-[8px] shrink-0 size-[28px]" data-node-id="138:27740" data-name="_paginator-cell-text">
                  <div className="[word-break:break-word] flex flex-col font-['Source_Han_Sans_CN:Regular'] justify-center leading-[0] not-italic relative shrink-0 text-[#667691] text-[14px] whitespace-nowrap" data-node-id="I138:27740;884:9339">
                    <p className="leading-[20px]">4</p>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-center justify-center relative rounded-[8px] shrink-0 size-[28px]" data-node-id="138:27741" data-name="_paginator-cell-text">
                  <div className="[word-break:break-word] flex flex-col font-['Source_Han_Sans_CN:Regular'] justify-center leading-[0] not-italic relative shrink-0 text-[#667691] text-[14px] whitespace-nowrap" data-node-id="I138:27741;884:9339">
                    <p className="leading-[20px]">5</p>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-center justify-center relative rounded-[8px] shrink-0 size-[28px]" data-node-id="138:27742" data-name="_paginator-cell-text">
                  <div className="[word-break:break-word] flex flex-col font-['Source_Han_Sans_CN:Regular'] justify-center leading-[0] not-italic relative shrink-0 text-[#667691] text-[14px] whitespace-nowrap" data-node-id="I138:27742;884:9339">
                    <p className="leading-[20px]">...</p>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-center justify-center relative rounded-[8px] shrink-0 size-[28px]" data-node-id="138:27743" data-name="_paginator-cell-text">
                  <div className="[word-break:break-word] flex flex-col font-['Source_Han_Sans_CN:Regular'] justify-center leading-[0] not-italic relative shrink-0 text-[#667691] text-[14px] whitespace-nowrap" data-node-id="I138:27743;884:9339">
                    <p className="leading-[20px]">20</p>
                  </div>
                </div>
                <div className="content-stretch flex items-center justify-center p-[8px] relative rounded-[8px] shrink-0" data-node-id="138:27744" data-name="_paginator-iconbutton">
                  <div className="relative shrink-0 size-[12px]" data-node-id="I138:27744;884:9120" data-name="common-linear-arrow-right">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCommonLinearArrowRight} />
                  </div>
                </div>
                <div className="content-stretch flex items-center justify-center p-[8px] relative rounded-[8px] shrink-0" data-node-id="138:27745" data-name="_paginator-iconbutton">
                  <div className="relative shrink-0 size-[12px]" data-node-id="I138:27745;884:9128" data-name="common-linear-location-right">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCommonLinearLocationRight} />
                  </div>
                </div>
              </div>
              <div className="bg-white border border-[#d4dee9] border-solid content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative rounded-[8px] shrink-0 w-[88px]" data-node-id="138:27746" data-name="sizeCanChange">
                <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-node-id="I138:27746;237:3950" data-name="Content">
                  <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Source_Han_Sans_CN:Regular'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#667691] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="I138:27746;237:3952">
                    <p className="leading-[20px] overflow-hidden text-ellipsis">20条/页</p>
                  </div>
                </div>
                <div className="relative shrink-0 size-[12px]" data-node-id="I138:27746;237:3954" data-name="Icon">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon} />
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

type TabsCapsuleProps = {
  className?: string;
  children?: React.ReactNode | null;
  propValue?: "sm";
  propValue1?: "1" | "2";
};

function TabsCapsule({ className, children = null, propValue = "sm", propValue1 = "1" }: TabsCapsuleProps) {
  const isSmAnd2 = propValue === "sm" && propValue1 === "2";
  return (
    <div className={className || "content-stretch flex h-[32px] items-center relative"} id={isSmAnd2 ? "node-1220_73190" : "node-1220_72563"}>
      {propValue === "sm" && propValue1 === "1" && (
        <div className="bg-[#eaebf1] border-0 border-[#eaebf1] border-solid content-stretch flex gap-[2px] h-full items-center overflow-clip p-[2px] relative rounded-[8px] shrink-0" data-node-id="1220:72564" data-name="tabs水平插槽">
          {children || (
            <>
              <div className="bg-white content-stretch drop-shadow-[0px_1px_0.5px_rgba(20,41,79,0.02),0px_2px_2px_rgba(20,41,79,0.01)] flex gap-[4px] h-full items-center justify-center max-w-[160px] min-w-[48px] px-[12px] py-[3px] relative rounded-[6px] shrink-0" data-node-id="1220:72565" data-name="tabs-capsule-cell">
                <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#1e2436] text-[14px] text-center text-ellipsis whitespace-nowrap" data-node-id="I1220:72565;1220:72548">
                  <p className="leading-[24px] overflow-hidden text-ellipsis">简约表格</p>
                </div>
              </div>
              <button className="content-stretch cursor-pointer flex gap-[4px] h-full items-center justify-center max-w-[160px] min-w-[48px] px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-node-id="1220:72566" data-name="tabs-capsule-cell">
                <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#646e87] text-[14px] text-center text-ellipsis whitespace-nowrap" data-node-id="I1220:72566;1220:72538">
                  <p className="leading-[20px] overflow-hidden text-ellipsis">传统表格</p>
                </div>
              </button>
              <button className="content-stretch cursor-pointer flex gap-[4px] h-full items-center justify-center max-w-[160px] min-w-[48px] px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-node-id="1220:72567" data-name="tabs-capsule-cell">
                <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#646e87] text-[14px] text-center text-ellipsis whitespace-nowrap" data-node-id="I1220:72567;1220:72538">
                  <p className="leading-[20px] overflow-hidden text-ellipsis">Tabs栏</p>
                </div>
              </button>
            </>
          )}
        </div>
      )}
      {isSmAnd2 && (
        <div className="bg-[#eaebf1] border-0 border-[#eaebf1] border-solid content-stretch flex gap-[2px] h-full items-center overflow-clip p-[2px] relative rounded-[8px] shrink-0" data-node-id="1220:73191" data-name="tabs水平插槽">
          {children || (
            <>
              <button className="content-stretch cursor-pointer flex gap-[4px] h-full items-center justify-center max-w-[160px] min-w-[48px] px-[12px] py-[6px] relative rounded-[6px] shrink-0" data-node-id="1220:73192" data-name="tabs-capsule-cell">
                <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#646e87] text-[14px] text-center text-ellipsis whitespace-nowrap" data-node-id="I1220:73192;1220:72538">
                  <p className="leading-[20px] overflow-hidden text-ellipsis">简约表格</p>
                </div>
              </button>
              <div className="bg-white content-stretch drop-shadow-[0px_1px_0.5px_rgba(20,41,79,0.02),0px_2px_2px_rgba(20,41,79,0.01)] flex gap-[4px] h-full items-center justify-center max-w-[160px] min-w-[48px] px-[12px] py-[3px] relative rounded-[6px] shrink-0" data-node-id="1220:73193" data-name="tabs-capsule-cell">
                <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#1e2436] text-[14px] text-center text-ellipsis whitespace-nowrap" data-node-id="I1220:73193;1220:72548">
                  <p className="leading-[24px] overflow-hidden text-ellipsis">传统表格</p>
                </div>
              </div>
              <button className="content-stretch cursor-pointer flex gap-[4px] h-full items-center justify-center max-w-[160px] min-w-[48px] px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-node-id="1220:73194" data-name="tabs-capsule-cell">
                <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#646e87] text-[14px] text-center text-ellipsis whitespace-nowrap" data-node-id="I1220:73194;1220:72538">
                  <p className="leading-[20px] overflow-hidden text-ellipsis">Tabs栏</p>
                </div>
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default function LightDetailDesign() {
  return (
    <div className="bg-[#f4f5fb] content-stretch flex flex-col items-start relative size-full" data-node-id="806:43867" data-name="详情页">
      <div className="content-stretch flex flex-[1_0_0] items-start min-h-px relative w-full" data-node-id="806:43868">
        <div className="bg-white border-[#e3e6ed] border-r border-solid content-stretch flex flex-col h-full items-start px-[12px] relative shrink-0 w-[216px]" data-node-id="806:43891" data-name="Menu">
          <div className="content-stretch flex gap-[8px] items-center pb-[12px] pl-[6px] pr-[12px] pt-[16px] relative shrink-0 w-full" data-node-id="806:43892" data-name="logo">
            <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-node-id="806:43893">
              <div className="h-[24px] relative shrink-0 w-[90px]" data-node-id="806:43894" data-name="Logo">
                <div className="absolute contents inset-[8.33%_3.14%_8.33%_2.78%]" data-node-id="I806:43894;4343:5333" data-name="Group">
                  <div className="absolute inset-[8.33%_76.18%_8.33%_2.78%]" data-node-id="I806:43894;4343:5334" data-name="Group">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup} />
                  </div>
                  <div className="absolute inset-[29.7%_3.14%_14.2%_28.64%]" data-node-id="I806:43894;4343:5337" data-name="Group">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup1} />
                  </div>
                </div>
              </div>
            </div>
            <div className="relative shrink-0 size-[14px]" data-node-id="1053:55194" data-name="common-linear-menu">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCommonLinearMenu} />
            </div>
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px overflow-x-clip overflow-y-auto pt-[8px] relative w-full" data-node-id="806:43899" data-name="Navigation">
            <a className="content-stretch cursor-pointer flex gap-[8px] h-[40px] items-center pr-[8px] relative rounded-[8px] shrink-0 w-full" data-node-id="806:43900" data-name="navigation-item-1st-level">
              <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-node-id="I806:43900;908:27495" data-name="Content">
                <div className="content-stretch flex items-center pl-[12px] pr-[8px] py-[8px] relative shrink-0" data-node-id="I806:43900;908:27496" data-name="Icon">
                  <div className="content-stretch flex items-center justify-center relative shrink-0" data-node-id="I806:43900;908:27497" data-name="尺寸=md">
                    <div className="relative shrink-0 size-[16px]" data-node-id="I806:43900;908:27497;114:779" data-name="sidebar-linear-home">
                      <div className="absolute inset-[4.17%_4.17%_4.28%_4.17%]" data-node-id="I806:43900;908:27497;114:779;864:19437" data-name="home">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgHome} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#3c455d] text-[14px] text-ellipsis text-left whitespace-nowrap" data-node-id="I806:43900;908:27499">
                  <p className="leading-[20px] overflow-hidden text-ellipsis">首页</p>
                </div>
              </div>
            </a>
            <a className="content-stretch cursor-pointer flex gap-[8px] h-[40px] items-center pr-[8px] relative rounded-[8px] shrink-0 w-full" data-node-id="806:43901" data-name="navigation-item-1st-level">
              <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-node-id="I806:43901;908:27469" data-name="Content">
                <div className="content-stretch flex items-center justify-center pl-[12px] pr-[8px] py-[8px] relative shrink-0" data-node-id="I806:43901;908:27470" data-name="Icon">
                  <div className="content-stretch flex items-center justify-center relative shrink-0" data-node-id="I806:43901;908:27471" data-name="尺寸=md">
                    <div className="relative shrink-0 size-[16px]" data-node-id="I806:43901;908:27471;114:779" data-name="common-linear-grid">
                      <div className="absolute contents inset-[8.33%]" data-name="vuesax/linear/grid-6">
                        <div className="absolute inset-[8.33%]" data-name="grid-6">
                          <div className="absolute inset-[-5%]">
                            <img alt="" className="block max-w-none size-full" src={imgGrid6} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#3c455d] text-[14px] text-ellipsis text-left whitespace-nowrap" data-node-id="I806:43901;908:27472">
                  <p className="leading-[20px] overflow-hidden text-ellipsis">列表页</p>
                </div>
              </div>
            </a>
            <div className="bg-[#eef3ff] content-stretch flex gap-[8px] h-[40px] items-center pr-[8px] relative rounded-[6px] shrink-0 w-full" data-node-id="806:43902" data-name="navigation-item-1st-level">
              <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-node-id="I806:43902;908:27469" data-name="Content">
                <div className="content-stretch flex items-center justify-center pl-[12px] pr-[8px] py-[8px] relative shrink-0" data-node-id="I806:43902;908:27470" data-name="Icon">
                  <div className="content-stretch flex items-center justify-center relative shrink-0" data-node-id="I806:43902;908:27471" data-name="尺寸=md">
                    <div className="relative shrink-0 size-[16px]" data-node-id="I806:43902;908:27471;114:779" data-name="common-filled-file">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCommonFilledFile} />
                    </div>
                  </div>
                </div>
                <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Semibold'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#0036fe] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="I806:43902;908:27472">
                  <p className="leading-[20px] overflow-hidden text-ellipsis">详情页</p>
                </div>
              </div>
            </div>
            <a className="content-stretch cursor-pointer flex gap-[8px] h-[40px] items-center pr-[8px] relative rounded-[8px] shrink-0 w-full" data-node-id="806:43903" data-name="navigation-item-1st-level">
              <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-node-id="I806:43903;908:27469" data-name="Content">
                <div className="content-stretch flex items-center justify-center pl-[12px] pr-[8px] py-[8px] relative shrink-0" data-node-id="I806:43903;908:27470" data-name="Icon">
                  <div className="content-stretch flex items-center justify-center relative shrink-0" data-node-id="I806:43903;908:27471" data-name="尺寸=md">
                    <div className="relative shrink-0 size-[16px]" data-node-id="I806:43903;908:27471;114:779" data-name="common-linear-todo">
                      <div className="absolute inset-[4.17%]" data-name="task-square">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgTaskSquare} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#3c455d] text-[14px] text-ellipsis text-left whitespace-nowrap" data-node-id="I806:43903;908:27472">
                  <p className="leading-[20px] overflow-hidden text-ellipsis">表单页</p>
                </div>
              </div>
            </a>
          </div>
          <div className="content-stretch flex flex-col items-start pb-[16px] pt-[12px] relative shrink-0 w-full" data-node-id="1220:84215">
            <div className="content-stretch flex h-[28px] items-center relative shrink-0 w-full" data-node-id="1220:84223" data-name="tabs-capsule">
              <div className="bg-[#f4f5fb] border-0 border-[#f1f2f4] border-solid content-stretch flex flex-[1_0_0] gap-[2px] h-full items-center min-w-px overflow-clip p-[2px] relative rounded-[6px]" data-node-id="I1220:84223;1220:72564" data-name="tabs水平插槽">
                <a className="content-stretch cursor-pointer flex flex-[1_0_0] gap-[4px] h-full items-center justify-center max-w-[160px] min-w-[48px] px-[12px] py-[4px] relative rounded-[4px]" data-node-id="I1220:84223;1220:72564;1220:84217" data-name="tabs-capsule-cell">
                  <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#646e87] text-[12px] text-center text-ellipsis whitespace-nowrap" data-node-id="I1220:84223;1220:72564;1220:84217;1220:72538">
                    <p className="leading-[18px] overflow-hidden text-ellipsis">暗色风格</p>
                  </div>
                </a>
                <div className="bg-white content-stretch flex flex-[1_0_0] gap-[4px] h-full items-center justify-center max-w-[160px] min-w-[48px] px-[12px] py-[3px] relative rounded-[4px] shadow-[0px_2px_4px_0px_rgba(18,50,108,0.01),0px_8px_16px_0px_rgba(18,50,108,0.02)]" data-node-id="I1220:84223;1220:72564;1220:84218" data-name="tabs-capsule-cell">
                  <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#1e2436] text-[12px] text-center text-ellipsis whitespace-nowrap" data-node-id="I1220:84223;1220:72564;1220:84218;1220:72548">
                    <p className="leading-[18px] overflow-hidden text-ellipsis">亮色风格</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-node-id="806:43912">
          <div className="border-[#e3e6ed] border-b border-solid content-stretch flex gap-[8px] h-[56px] items-center px-[20px] shrink-0 sticky top-0 w-full" data-node-id="1012:47939" data-name="PageHeader">
            <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px relative" data-node-id="1012:47940">
              <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-w-px relative" data-node-id="1012:47942" data-name="面包屑">
                <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#646e87] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="1012:47944">
                  <p className="leading-[20px] overflow-hidden text-ellipsis">首页</p>
                </div>
                <div className="relative shrink-0 size-[12px]" data-node-id="1012:47945" data-name="common-linear-arrow-right">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCommonLinearArrowRight1} />
                </div>
                <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#1e2436] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="1012:47948">
                  <p className="leading-[20px] overflow-hidden text-ellipsis">客户详情</p>
                </div>
              </div>
              <button className="bg-[#edeef3] content-stretch cursor-pointer flex gap-[4px] h-[32px] items-center px-[12px] py-[6px] relative rounded-[6px] shrink-0 w-[140px]" data-node-id="1012:47949" data-name="input-search">
                <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-node-id="I1012:47949;654:20563" data-name="Content">
                  <div className="relative shrink-0 size-[16px]" data-node-id="I1012:47949;654:20564" data-name="common-linear-search">
                    <div className="absolute inset-[4.17%]" data-node-id="I1012:47949;654:20564;110:1324" data-name="search-normal">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSearchNormal} />
                    </div>
                  </div>
                  <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#646e87] text-[14px] text-ellipsis text-left whitespace-nowrap" data-node-id="I1012:47949;654:20565">
                    <p className="leading-[20px] overflow-hidden text-ellipsis">搜索 ⌘+K</p>
                  </div>
                </div>
              </button>
            </div>
            <div className="content-stretch flex gap-[8px] h-full items-center relative shrink-0" data-node-id="1012:47967" data-name="功能区">
              <div className="bg-[#edeef3] content-stretch flex gap-[8px] items-center justify-center p-[6px] relative rounded-[6px] shrink-0 size-[32px]" data-node-id="1012:47971" data-name="Icon-item">
                <div className="relative shrink-0 size-[16px]" data-node-id="1012:47972" data-name="common-linear-notification">
                  <div className="absolute inset-[3.92%_12.43%_3.92%_12.39%]" data-node-id="I1012:47972;110:1422" data-name="notification">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgNotification} />
                  </div>
                </div>
              </div>
              <div className="bg-[#edeef3] content-stretch flex gap-[8px] items-center justify-center p-[6px] relative rounded-[6px] shrink-0 size-[32px]" data-node-id="1012:47974" data-name="Icon-item">
                <div className="relative shrink-0 size-[16px]" data-node-id="1012:47975" data-name="common-linear-message-question">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCommonLinearMessageQuestion} />
                </div>
              </div>
              <div className="bg-[#edeef3] content-stretch flex gap-[4px] items-center justify-center p-[6px] relative rounded-[6px] shrink-0 size-[32px]" data-node-id="1012:47983" data-name="Icon-item">
                <div className="relative shrink-0 size-[16px]" data-node-id="1012:47984" data-name="sidebar-linear-settings">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSidebarLinearSettings} />
                </div>
              </div>
              <div className="bg-[#edeef3] content-stretch flex gap-[4px] items-center pl-[4px] pr-[6px] py-[4px] relative rounded-[16px] shrink-0" data-node-id="1012:47992" data-name="Icon-item">
                <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="I1012:47992;4358:4272" data-name="个人">
                  <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 size-[24px]" data-node-id="I1012:47992;1740:15931" data-name="avatar">
                    <div className="flex-[1_0_0] h-full min-w-px relative rounded-[32px]" data-node-id="I1012:47992;1740:15931;509:320" data-name="Avatar">
                      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[32px] size-full" src={imgAvatar} />
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="I1012:47992;4358:3405" data-name="文本信息">
                    <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#3c455d] text-[12px] text-center text-ellipsis whitespace-nowrap" data-node-id="I1012:47992;4358:3406">
                      <p className="leading-[18px] overflow-hidden text-ellipsis">张三</p>
                    </div>
                  </div>
                </div>
                <div className="relative shrink-0 size-[16px]" data-node-id="I1012:47992;1740:15932" data-name="common-linear-arrow-down">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCommonLinearArrowDown} />
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[20px] items-start min-h-px overflow-x-clip overflow-y-auto p-[20px] relative w-full" data-node-id="1012:46225" data-name="内容">
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-node-id="1012:46230">
              <div className="content-stretch flex flex-col items-start relative rounded-tl-[12px] rounded-tr-[12px] shrink-0 w-full" data-node-id="1012:46238" data-name="信息组">
                <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-node-id="1012:46239" data-name="Title">
                  <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-node-id="1012:46240">
                    <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Semibold'] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#1e2436] text-[24px] text-ellipsis whitespace-nowrap" data-node-id="1012:46241">
                      <p className="leading-[32px] overflow-hidden text-ellipsis">阿里巴巴网络技术有限公司</p>
                    </div>
                    <div className="bg-[#fdf0e9] border border-[#fadecf] border-solid content-stretch flex gap-[2px] items-center px-[6px] py-px relative rounded-[9999px] shrink-0" data-node-id="1012:46242" data-name="tag">
                      <div className="relative shrink-0 size-[9px]" data-name="Vector">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector} />
                      </div>
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] justify-center leading-[0] not-italic relative shrink-0 text-[#e08152] text-[12px] whitespace-nowrap" data-node-id="1012:46245">
                        <p className="leading-[18px]">NORM</p>
                      </div>
                    </div>
                    <div className="bg-[#dbe5ff] content-stretch flex gap-[4px] items-center px-[8px] py-px relative rounded-[9999px] shrink-0" data-node-id="1012:46247" data-name="tag">
                      <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] not-italic relative shrink-0 text-[#3651b2] text-[14px] whitespace-nowrap" data-node-id="1012:46251">
                        <p className="leading-[20px]">入驻签约</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white border border-[#e3e6ed] border-solid content-stretch flex gap-[6px] items-center justify-center min-w-[56px] overflow-clip px-[8px] py-[6px] relative rounded-[6px] shrink-0" data-node-id="1012:46258" data-name="button">
                    <div className="relative shrink-0 size-[16px]" data-node-id="I1012:46258;150:1171" data-name="common-linear-add">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCommonLinearArchiveAdd} />
                    </div>
                    <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] not-italic relative shrink-0 text-[#3c455d] text-[14px] whitespace-nowrap" data-node-id="I1012:46258;150:1172">
                      <p className="leading-[20px]">次要按钮</p>
                    </div>
                  </div>
                  <div className="bg-white border border-[#e3e6ed] border-solid content-stretch flex gap-[6px] items-center justify-center min-w-[56px] overflow-clip px-[8px] py-[6px] relative rounded-[6px] shrink-0" data-node-id="1012:46259" data-name="button">
                    <div className="relative shrink-0 size-[16px]" data-node-id="I1012:46259;150:1171" data-name="common-linear-add">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCommonLinearArchiveAdd} />
                    </div>
                    <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] not-italic relative shrink-0 text-[#3c455d] text-[14px] whitespace-nowrap" data-node-id="I1012:46259;150:1172">
                      <p className="leading-[20px]">次要按钮</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-center flex flex-wrap gap-[4px_12px] items-center relative shrink-0 w-full" data-node-id="1012:46260" data-name="重要信息">
                <div className="content-stretch flex items-start relative shrink-0" data-node-id="1012:46273" data-name="descriptions-item">
                  <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-node-id="I1012:46273;13035:35042" data-name="标签文本布局插槽">
                    <div className="content-stretch flex items-start max-w-[136px] relative shrink-0" data-node-id="I1012:46273;13035:35042;1012:46264" data-name="label-item">
                      <div className="[word-break:break-word] content-stretch flex gap-[4px] items-start leading-[0] not-italic relative shrink-0 text-[14px] whitespace-nowrap" data-node-id="I1012:46273;13035:35042;1012:46264;2983:30107" data-name="Label">
                        <div className="flex flex-col font-['PingFang_SC:Regular'] justify-center relative shrink-0 text-[#646e87]" data-node-id="I1012:46273;13035:35042;1012:46264;2983:30108">
                          <p className="leading-[20px]">客户 ID</p>
                        </div>
                        <div className="flex flex-col font-['Source_Han_Sans_CN:Regular'] justify-center relative shrink-0 text-[#657281]" data-node-id="I1012:46273;13035:35042;1012:46264;2983:30109">
                          <p className="leading-[20px]">:</p>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0" data-node-id="I1012:46273;13035:35042;1012:46265" data-name="Value">
                      <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-node-id="I1012:46273;13035:35042;1012:46266" data-name="Content">
                        <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] max-w-[200px] not-italic relative shrink-0 text-[#1e2436] text-[14px] whitespace-nowrap" data-node-id="I1012:46273;13035:35042;1012:46267">
                          <p className="leading-[20px]">G20260612152515CB2A10</p>
                        </div>
                        <div className="content-stretch flex items-center py-[4px] relative shrink-0" data-node-id="I1012:46273;13035:35042;1012:46268" data-name="linear-copy">
                          <div className="relative shrink-0 size-[12px]" data-node-id="I1012:46273;13035:35042;1012:46269" data-name="common-linear-copy">
                            <div className="absolute inset-[4.17%]" data-node-id="I1012:46273;13035:35042;1012:46269;110:1369" data-name="copy">
                              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCopy} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-[16px] relative shrink-0 w-0" data-node-id="1012:46274">
                  <div className="absolute inset-[0_-0.5px]">
                    <img alt="" className="block max-w-none size-full" src={imgVector9} />
                  </div>
                </div>
                <div className="content-stretch flex items-start relative shrink-0" data-node-id="1012:46285" data-name="descriptions-item">
                  <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-node-id="I1012:46285;13035:35042" data-name="标签文本布局插槽">
                    <div className="content-stretch flex items-start max-w-[136px] relative shrink-0" data-node-id="I1012:46285;13035:35042;1012:46276" data-name="label-item">
                      <div className="[word-break:break-word] content-stretch flex gap-[4px] items-start leading-[0] not-italic relative shrink-0 text-[14px] whitespace-nowrap" data-node-id="I1012:46285;13035:35042;1012:46276;2983:30107" data-name="Label">
                        <div className="flex flex-col font-['PingFang_SC:Regular'] justify-center relative shrink-0 text-[#646e87]" data-node-id="I1012:46285;13035:35042;1012:46276;2983:30108">
                          <p className="leading-[20px]">归属集团</p>
                        </div>
                        <div className="flex flex-col font-['Source_Han_Sans_CN:Regular'] justify-center relative shrink-0 text-[#657281]" data-node-id="I1012:46285;13035:35042;1012:46276;2983:30109">
                          <p className="leading-[20px]">:</p>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0" data-node-id="I1012:46285;13035:35042;1012:46277" data-name="Value">
                      <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-node-id="I1012:46285;13035:35042;1012:46278" data-name="Content">
                        <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] max-w-[200px] not-italic overflow-hidden relative shrink-0 text-[#14191f] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="I1012:46285;13035:35042;1012:46279">
                          <p className="leading-[20px] overflow-hidden text-ellipsis">阿里巴巴（中国）网络技术有限公司</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-[16px] relative shrink-0 w-0" data-node-id="1012:46286">
                  <div className="absolute inset-[0_-0.5px]">
                    <img alt="" className="block max-w-none size-full" src={imgVector9} />
                  </div>
                </div>
                <div className="content-stretch flex items-start relative shrink-0" data-node-id="1012:46297" data-name="descriptions-item">
                  <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-node-id="I1012:46297;13035:35042" data-name="标签文本布局插槽">
                    <div className="content-stretch flex items-start max-w-[136px] relative shrink-0" data-node-id="I1012:46297;13035:35042;1012:46288" data-name="label-item">
                      <div className="[word-break:break-word] content-stretch flex gap-[4px] items-start leading-[0] not-italic relative shrink-0 text-[14px] whitespace-nowrap" data-node-id="I1012:46297;13035:35042;1012:46288;2983:30107" data-name="Label">
                        <div className="flex flex-col font-['PingFang_SC:Regular'] justify-center relative shrink-0 text-[#646e87]" data-node-id="I1012:46297;13035:35042;1012:46288;2983:30108">
                          <p className="leading-[20px]">创建时间</p>
                        </div>
                        <div className="flex flex-col font-['Source_Han_Sans_CN:Regular'] justify-center relative shrink-0 text-[#657281]" data-node-id="I1012:46297;13035:35042;1012:46288;2983:30109">
                          <p className="leading-[20px]">:</p>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0" data-node-id="I1012:46297;13035:35042;1012:46289" data-name="Value">
                      <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-node-id="I1012:46297;13035:35042;1012:46290" data-name="Content">
                        <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] max-w-[200px] not-italic relative shrink-0 text-[#1e2436] text-[14px] whitespace-nowrap" data-node-id="I1012:46297;13035:35042;1012:46291">
                          <p className="leading-[20px]">2026-05-27 16:15:41</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <TabsCapsule className="content-stretch flex h-[32px] items-center relative shrink-0" propValue1="2">
              <div className="content-stretch flex gap-[4px] h-full items-center justify-center max-w-[160px] min-w-[48px] px-[12px] py-[6px] relative rounded-[6px] shrink-0" data-node-id="1220:84241" data-name="tabs-capsule-cell">
                <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#646e87] text-[14px] text-center text-ellipsis whitespace-nowrap" data-node-id="I1220:84241;1220:72538">
                  <p className="leading-[20px] overflow-hidden text-ellipsis">客户信息</p>
                </div>
              </div>
              <div className="bg-white content-stretch drop-shadow-[0px_1px_0.5px_rgba(20,41,79,0.02),0px_2px_2px_rgba(20,41,79,0.01)] flex gap-[4px] h-full items-center justify-center max-w-[160px] min-w-[48px] px-[12px] py-[3px] relative rounded-[6px] shrink-0" data-node-id="1220:84242" data-name="tabs-capsule-cell">
                <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#1e2436] text-[14px] text-center text-ellipsis whitespace-nowrap" data-node-id="I1220:84242;1220:72548">
                  <p className="leading-[24px] overflow-hidden text-ellipsis">客户产品</p>
                </div>
              </div>
              <div className="content-stretch flex gap-[4px] h-full items-center justify-center max-w-[160px] min-w-[48px] px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-node-id="1220:84243" data-name="tabs-capsule-cell">
                <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#646e87] text-[14px] text-center text-ellipsis whitespace-nowrap" data-node-id="I1220:84243;1220:72538">
                  <p className="leading-[20px] overflow-hidden text-ellipsis">商户号</p>
                </div>
              </div>
              <div className="content-stretch flex gap-[4px] h-full items-center justify-center max-w-[160px] min-w-[48px] px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-node-id="1220:84244" data-name="tabs-capsule-cell">
                <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#646e87] text-[14px] text-center text-ellipsis whitespace-nowrap" data-node-id="I1220:84244;1220:72538">
                  <p className="leading-[20px] overflow-hidden text-ellipsis">服务协议</p>
                </div>
              </div>
              <div className="content-stretch flex gap-[4px] h-full items-center justify-center max-w-[160px] min-w-[48px] px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-node-id="1220:84245" data-name="tabs-capsule-cell">
                <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#646e87] text-[14px] text-center text-ellipsis whitespace-nowrap" data-node-id="I1220:84245;1220:72538">
                  <p className="leading-[20px] overflow-hidden text-ellipsis">操作记录</p>
                </div>
              </div>
            </TabsCapsule>
            <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-node-id="1012:46356">
              <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-node-id="1012:46357">
                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px relative" data-node-id="1012:46849">
                  <div className="bg-white border border-[#edeef3] border-solid content-stretch flex flex-col gap-[16px] items-start p-[21px] relative rounded-[8px] shadow-[0px_2px_4px_0px_rgba(18,50,108,0.01),0px_8px_16px_0px_rgba(18,50,108,0.02)] shrink-0 w-full" data-node-id="1012:46850" data-name="内容区域">
                    <div className="relative shrink-0 w-full" data-node-id="1012:46851" data-name="Title">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
                        <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Semibold'] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#1e2436] text-[18px] text-ellipsis whitespace-nowrap" data-node-id="1012:46853">
                          <p className="leading-[24px] overflow-hidden text-ellipsis">直播交友</p>
                        </div>
                      </div>
                    </div>
                    <div className="relative shrink-0 w-full" data-node-id="1012:46864">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-start flex flex-wrap gap-[12px_20px] items-start relative size-full">
                        <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-start min-w-[340px] relative" data-node-id="1012:46865" data-name="descriptions-item">
                          <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-[136px]" data-node-id="1012:46866" data-name="label-item">
                            <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-node-id="I1012:46866;828:15714" data-name="Label">
                              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] min-w-px not-italic relative text-[#646e87] text-[14px]" data-node-id="I1012:46866;828:15715">
                                <p className="leading-[20px]">注册名</p>
                              </div>
                            </div>
                          </div>
                          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px relative" data-node-id="1012:46867" data-name="Value">
                            <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-node-id="1012:46868" data-name="Content">
                              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#1e2436] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="1012:46869">
                                <p className="leading-[20px] overflow-hidden text-ellipsis">AutomatedTesting</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-start min-w-[340px] relative" data-node-id="1012:46875" data-name="descriptions-item">
                          <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-[136px]" data-node-id="1012:46876" data-name="label-item">
                            <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-node-id="I1012:46876;828:15714" data-name="Label">
                              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] min-w-px not-italic relative text-[#646e87] text-[14px]" data-node-id="I1012:46876;828:15715">
                                <p className="leading-[20px]">英文名</p>
                              </div>
                            </div>
                          </div>
                          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px relative" data-node-id="1012:46877" data-name="Value">
                            <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-node-id="1012:46878" data-name="Content">
                              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#1e2436] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="1012:46879">
                                <p className="leading-[20px] overflow-hidden text-ellipsis">AutomatedTesting</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-start min-w-[340px] relative" data-node-id="1012:46885" data-name="descriptions-item">
                          <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-[136px]" data-node-id="1012:46886" data-name="label-item">
                            <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-node-id="I1012:46886;828:15714" data-name="Label">
                              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] min-w-px not-italic relative text-[#646e87] text-[14px]" data-node-id="I1012:46886;828:15715">
                                <p className="leading-[20px]">注册号</p>
                              </div>
                            </div>
                          </div>
                          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px relative" data-node-id="1012:46887" data-name="Value">
                            <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-node-id="1012:46888" data-name="Content">
                              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#1e2436] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="1012:46889">
                                <p className="leading-[20px] overflow-hidden text-ellipsis">C20260612100733A3FE9</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-start min-w-[340px] relative" data-node-id="1012:46895" data-name="descriptions-item">
                          <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-[136px]" data-node-id="1012:46896" data-name="label-item">
                            <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-node-id="I1012:46896;828:15714" data-name="Label">
                              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] min-w-px not-italic relative text-[#646e87] text-[14px]" data-node-id="I1012:46896;828:15715">
                                <p className="leading-[20px]">注册日期</p>
                              </div>
                            </div>
                          </div>
                          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px relative" data-node-id="1012:46897" data-name="Value">
                            <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-node-id="1012:46898" data-name="Content">
                              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] min-w-px not-italic relative text-[#1e2436] text-[14px]" data-node-id="1012:46899">
                                <p className="leading-[20px]">1992-09-18</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-start min-w-[340px] relative" data-node-id="1012:46905" data-name="descriptions-item">
                          <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-[136px]" data-node-id="1012:46906" data-name="label-item">
                            <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-node-id="I1012:46906;828:15714" data-name="Label">
                              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] min-w-px not-italic relative text-[#646e87] text-[14px]" data-node-id="I1012:46906;828:15715">
                                <p className="leading-[20px]">公司规模</p>
                              </div>
                            </div>
                          </div>
                          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px relative" data-node-id="1012:46907" data-name="Value">
                            <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-node-id="1012:46908" data-name="Content">
                              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] min-w-px not-italic relative text-[#1e2436] text-[14px]" data-node-id="1012:46909">
                                <p className="leading-[20px]">50 – 150 人</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-start min-w-[340px] relative" data-node-id="1012:46915" data-name="descriptions-item">
                          <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-[136px]" data-node-id="1012:46916" data-name="label-item">
                            <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-node-id="I1012:46916;828:15714" data-name="Label">
                              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] min-w-px not-italic relative text-[#646e87] text-[14px]" data-node-id="I1012:46916;828:15715">
                                <p className="leading-[20px]">网页链接</p>
                              </div>
                            </div>
                          </div>
                          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px relative" data-node-id="1012:46917" data-name="Value">
                            <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-node-id="1012:46918" data-name="Content">
                              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] min-w-px not-italic relative text-[#0036fe] text-[14px]" data-node-id="1012:46919">
                                <p className="leading-[20px]">查看</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-start min-w-[340px] relative" data-node-id="1012:46925" data-name="descriptions-item">
                          <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-[136px]" data-node-id="1012:46926" data-name="label-item">
                            <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-node-id="I1012:46926;828:15714" data-name="Label">
                              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] min-w-px not-italic relative text-[#646e87] text-[14px]" data-node-id="I1012:46926;828:15715">
                                <p className="leading-[20px]">注册国家/地区</p>
                              </div>
                            </div>
                          </div>
                          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px relative" data-node-id="1012:46927" data-name="Value">
                            <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-node-id="1012:46928" data-name="Content">
                              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#1e2436] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="1012:46929">
                                <p className="leading-[20px] overflow-hidden text-ellipsis">中国香港</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-start min-w-[340px] relative" data-node-id="1012:46935" data-name="descriptions-item">
                          <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-[136px]" data-node-id="1012:46936" data-name="label-item">
                            <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-node-id="I1012:46936;828:15714" data-name="Label">
                              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] min-w-px not-italic relative text-[#646e87] text-[14px]" data-node-id="I1012:46936;828:15715">
                                <p className="leading-[20px]">注册地址</p>
                              </div>
                            </div>
                          </div>
                          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px relative" data-node-id="1012:46937" data-name="Value">
                            <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-node-id="1012:46938" data-name="Content">
                              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#1e2436] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="1012:46939">
                                <p className="leading-[20px] overflow-hidden text-ellipsis">香港长沙湾长裕街10号亿京广场</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white border border-[#edeef3] border-solid content-stretch flex flex-col gap-[16px] items-start p-[21px] relative rounded-[8px] shadow-[0px_2px_4px_0px_rgba(18,50,108,0.01),0px_8px_16px_0px_rgba(18,50,108,0.02)] shrink-0 w-full" data-node-id="1012:46972" data-name="内容区域">
                    <div className="relative shrink-0 w-full" data-node-id="1012:46973">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
                        <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Semibold'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#1e2436] text-[18px] text-ellipsis whitespace-nowrap" data-node-id="1012:46974">
                          <p className="leading-[24px] overflow-hidden text-ellipsis">展业类型</p>
                        </div>
                      </div>
                    </div>
                    <div className="relative shrink-0 w-full" data-node-id="1012:46976">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start relative size-full">
                        <div className="bg-white border border-[#eaebf1] border-solid content-stretch flex flex-col gap-[12px] items-start p-[16px] relative rounded-[8px] shrink-0 w-full" data-node-id="1012:46977">
                          <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#1e2436] text-[16px] text-ellipsis w-full whitespace-nowrap" data-node-id="1012:46978">
                            <p className="leading-[22px] overflow-hidden text-ellipsis">收单</p>
                          </div>
                          <div className="content-start flex flex-wrap gap-[12px_20px] items-start relative shrink-0 w-full" data-node-id="1012:46979">
                            <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-start min-w-[320px] relative" data-node-id="1012:46980" data-name="descriptions-item">
                              <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-[136px]" data-node-id="1012:46981" data-name="label-item">
                                <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-node-id="I1012:46981;828:15714" data-name="Label">
                                  <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] min-w-px not-italic relative text-[#646e87] text-[14px]" data-node-id="I1012:46981;828:15715">
                                    <p className="leading-[20px]">开通国家</p>
                                  </div>
                                </div>
                              </div>
                              <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px relative" data-node-id="1012:46982" data-name="Value">
                                <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-node-id="1012:46983" data-name="Content">
                                  <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#1e2436] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="1012:46984">
                                    <p className="leading-[20px] overflow-hidden text-ellipsis">新加坡，马来西亚等24个</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-start min-w-[320px] relative" data-node-id="1012:46990" data-name="descriptions-item">
                              <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-[136px]" data-node-id="1012:46991" data-name="label-item">
                                <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-node-id="I1012:46991;828:15714" data-name="Label">
                                  <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] min-w-px not-italic relative text-[#646e87] text-[14px]" data-node-id="I1012:46991;828:15715">
                                    <p className="leading-[20px]">单笔金额区间</p>
                                  </div>
                                </div>
                              </div>
                              <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px relative" data-node-id="1012:46992" data-name="Value">
                                <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-node-id="1012:46993" data-name="Content">
                                  <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#1e2436] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="1012:46994">
                                    <p className="leading-[20px] overflow-hidden text-ellipsis">0-2,000 USD</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-start min-w-[320px] relative" data-node-id="1012:47000" data-name="descriptions-item">
                              <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-[136px]" data-node-id="1012:47001" data-name="label-item">
                                <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-node-id="I1012:47001;828:15714" data-name="Label">
                                  <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] min-w-px not-italic relative text-[#646e87] text-[14px]" data-node-id="I1012:47001;828:15715">
                                    <p className="leading-[20px]">月预估交易额</p>
                                  </div>
                                </div>
                              </div>
                              <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px relative" data-node-id="1012:47002" data-name="Value">
                                <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-node-id="1012:47003" data-name="Content">
                                  <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#1e2436] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="1012:47004">
                                    <p className="leading-[20px] overflow-hidden text-ellipsis">50W-200W USD</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-start min-w-[320px] relative" data-node-id="1012:47010" data-name="descriptions-item">
                              <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-[136px]" data-node-id="1012:47011" data-name="label-item">
                                <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-node-id="I1012:47011;828:15714" data-name="Label">
                                  <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] min-w-px not-italic relative text-[#646e87] text-[14px]" data-node-id="I1012:47011;828:15715">
                                    <p className="leading-[20px]">是否涉及换汇</p>
                                  </div>
                                </div>
                              </div>
                              <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px relative" data-node-id="1012:47012" data-name="Value">
                                <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-node-id="1012:47013" data-name="Content">
                                  <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#1e2436] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="1012:47014">
                                    <p className="leading-[20px] overflow-hidden text-ellipsis">涉及换汇</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-start min-w-[320px] relative" data-node-id="1012:47020" data-name="descriptions-item">
                              <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-[136px]" data-node-id="1012:47021" data-name="label-item">
                                <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-node-id="I1012:47021;828:15714" data-name="Label">
                                  <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] min-w-px not-italic relative text-[#646e87] text-[14px]" data-node-id="I1012:47021;828:15715">
                                    <p className="leading-[20px]">卡类支付方式占比</p>
                                  </div>
                                </div>
                              </div>
                              <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px relative" data-node-id="1012:47022" data-name="Value">
                                <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-node-id="1012:47023" data-name="Content">
                                  <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#1e2436] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="1012:47024">
                                    <p className="leading-[20px] overflow-hidden text-ellipsis">20%</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-start min-w-[320px] relative" data-node-id="1012:47030" data-name="descriptions-item">
                              <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-[136px]" data-node-id="1012:47031" data-name="label-item">
                                <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-node-id="I1012:47031;828:15714" data-name="Label">
                                  <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] min-w-px not-italic relative text-[#646e87] text-[14px]" data-node-id="I1012:47031;828:15715">
                                    <p className="leading-[20px]">收单目的</p>
                                  </div>
                                </div>
                              </div>
                              <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px relative" data-node-id="1012:47032" data-name="Value">
                                <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-node-id="1012:47033" data-name="Content">
                                  <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#1e2436] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="1012:47034">
                                    <p className="leading-[20px] overflow-hidden text-ellipsis">提供多样化的产品和服务</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="bg-white border border-[#eaebf1] border-solid content-stretch flex flex-col gap-[12px] items-start p-[16px] relative rounded-[8px] shrink-0 w-full" data-node-id="1012:47040">
                          <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#1e2436] text-[16px] text-ellipsis w-full whitespace-nowrap" data-node-id="1012:47041">
                            <p className="leading-[22px] overflow-hidden text-ellipsis">代发</p>
                          </div>
                          <div className="content-start flex flex-wrap gap-[12px_20px] items-start relative shrink-0 w-full" data-node-id="1012:47042">
                            <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-start min-w-[320px] relative" data-node-id="1012:47043" data-name="descriptions-item">
                              <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-[136px]" data-node-id="1012:47044" data-name="label-item">
                                <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-node-id="I1012:47044;828:15714" data-name="Label">
                                  <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] min-w-px not-italic relative text-[#646e87] text-[14px]" data-node-id="I1012:47044;828:15715">
                                    <p className="leading-[20px]">出款类型</p>
                                  </div>
                                </div>
                              </div>
                              <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px relative" data-node-id="1012:47045" data-name="Value">
                                <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-node-id="1012:47046" data-name="Content">
                                  <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#1e2436] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="1012:47047">
                                    <p className="leading-[20px] overflow-hidden text-ellipsis">toB , toC</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-start min-w-[320px] relative" data-node-id="1012:47053" data-name="descriptions-item">
                              <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-[136px]" data-node-id="1012:47054" data-name="label-item">
                                <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-node-id="I1012:47054;828:15714" data-name="Label">
                                  <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] min-w-px not-italic relative text-[#646e87] text-[14px]" data-node-id="I1012:47054;828:15715">
                                    <p className="leading-[20px]">开通国家</p>
                                  </div>
                                </div>
                              </div>
                              <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px relative" data-node-id="1012:47055" data-name="Value">
                                <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-node-id="1012:47056" data-name="Content">
                                  <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#1e2436] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="1012:47057">
                                    <p className="leading-[20px] overflow-hidden text-ellipsis">新加坡，马来西亚等24个</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-start min-w-[320px] relative" data-node-id="1012:47063" data-name="descriptions-item">
                              <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-[136px]" data-node-id="1012:47064" data-name="label-item">
                                <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-node-id="I1012:47064;828:15714" data-name="Label">
                                  <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] min-w-px not-italic relative text-[#646e87] text-[14px]" data-node-id="I1012:47064;828:15715">
                                    <p className="leading-[20px]">单笔金额区间</p>
                                  </div>
                                </div>
                              </div>
                              <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px relative" data-node-id="1012:47065" data-name="Value">
                                <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-node-id="1012:47066" data-name="Content">
                                  <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#1e2436] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="1012:47067">
                                    <p className="leading-[20px] overflow-hidden text-ellipsis">0-2,000 USD</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-start min-w-[320px] relative" data-node-id="1012:47073" data-name="descriptions-item">
                              <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-[136px]" data-node-id="1012:47074" data-name="label-item">
                                <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-node-id="I1012:47074;828:15714" data-name="Label">
                                  <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] min-w-px not-italic relative text-[#646e87] text-[14px]" data-node-id="I1012:47074;828:15715">
                                    <p className="leading-[20px]">月预估交易额</p>
                                  </div>
                                </div>
                              </div>
                              <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px relative" data-node-id="1012:47075" data-name="Value">
                                <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-node-id="1012:47076" data-name="Content">
                                  <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#1e2436] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="1012:47077">
                                    <p className="leading-[20px] overflow-hidden text-ellipsis">50W-200W USD</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-start min-w-[320px] relative" data-node-id="1012:47083" data-name="descriptions-item">
                              <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-[136px]" data-node-id="1012:47084" data-name="label-item">
                                <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-node-id="I1012:47084;828:15714" data-name="Label">
                                  <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] min-w-px not-italic relative text-[#646e87] text-[14px]" data-node-id="I1012:47084;828:15715">
                                    <p className="leading-[20px]">是否涉及换汇</p>
                                  </div>
                                </div>
                              </div>
                              <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px relative" data-node-id="1012:47085" data-name="Value">
                                <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-node-id="1012:47086" data-name="Content">
                                  <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#1e2436] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="1012:47087">
                                    <p className="leading-[20px] overflow-hidden text-ellipsis">涉及换汇</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-start min-w-[320px] relative" data-node-id="1012:47093" data-name="descriptions-item">
                              <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-[136px]" data-node-id="1012:47094" data-name="label-item">
                                <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-node-id="I1012:47094;828:15714" data-name="Label">
                                  <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] min-w-px not-italic relative text-[#646e87] text-[14px]" data-node-id="I1012:47094;828:15715">
                                    <p className="leading-[20px]">出款频率</p>
                                  </div>
                                </div>
                              </div>
                              <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px relative" data-node-id="1012:47095" data-name="Value">
                                <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-node-id="1012:47096" data-name="Content">
                                  <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#1e2436] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="1012:47097">
                                    <p className="leading-[20px] overflow-hidden text-ellipsis">-</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white border border-[#edeef3] border-solid content-stretch flex flex-col gap-[16px] h-[248px] items-start p-[21px] relative rounded-[8px] shadow-[0px_2px_4px_0px_rgba(18,50,108,0.01),0px_8px_16px_0px_rgba(18,50,108,0.02)] shrink-0 w-full" data-node-id="1012:47111" data-name="内容区域">
                    <div className="relative shrink-0 w-full" data-node-id="1012:47112">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
                        <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Semibold'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#1e2436] text-[18px] text-ellipsis whitespace-nowrap" data-node-id="1012:47113">
                          <p className="leading-[24px] overflow-hidden text-ellipsis">交易信息</p>
                        </div>
                      </div>
                    </div>
                    <div className="min-w-[320px] relative shrink-0 w-full" data-node-id="1012:47115" data-name="descriptions-item">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start min-w-[inherit] relative size-full">
                        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-start min-w-px relative" data-node-id="1012:47116">
                          <Table className="bg-white content-stretch flex flex-col items-start relative shrink-0 w-full">
                            <div className="bg-[#f8f8fb] border-[#edeef3] border-b border-solid content-stretch flex h-[36px] items-start overflow-clip relative rounded-[4px] shrink-0 w-full" data-node-id="1012:47136" data-name="row">
                              <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px px-[12px] py-[10px] relative" data-node-id="1012:47139" data-name="table-cell-header">
                                <div className="content-stretch flex gap-[4px] h-full items-center relative shrink-0 w-[136px]" data-node-id="I1012:47139;567:4277" data-name="Content">
                                  <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#646e87] text-[12px] text-ellipsis whitespace-nowrap" data-node-id="I1012:47139;566:12188">
                                    <p className="leading-[18px]">国家/地区</p>
                                  </div>
                                </div>
                              </div>
                              <div className="content-stretch flex flex-[1_0_0] gap-[8px] h-full items-center min-w-[120px] px-[12px] py-[10px] relative" data-node-id="1012:47141" data-name="table-cell-header">
                                <div className="content-stretch flex gap-[4px] h-full items-center relative shrink-0" data-node-id="I1012:47141;567:4143" data-name="Content">
                                  <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#646e87] text-[12px] text-ellipsis whitespace-nowrap" data-node-id="I1012:47141;566:13639">
                                    <p className="leading-[18px]">销售额占比</p>
                                  </div>
                                </div>
                              </div>
                              <div className="content-stretch flex flex-[1_0_0] gap-[8px] h-full items-center min-w-[120px] px-[12px] py-[10px] relative" data-node-id="1012:47146" data-name="table-cell-header">
                                <div className="content-stretch flex gap-[4px] h-full items-center relative shrink-0" data-node-id="I1012:47146;567:4143" data-name="Content">
                                  <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#646e87] text-[12px] text-ellipsis whitespace-nowrap" data-node-id="I1012:47146;566:13639">
                                    <p className="leading-[18px]">物流天数</p>
                                  </div>
                                </div>
                              </div>
                              <div className="content-stretch flex flex-[1_0_0] gap-[8px] h-full items-center min-w-[120px] px-[12px] py-[10px] relative" data-node-id="1012:47147" data-name="table-cell-header">
                                <div className="content-stretch flex gap-[4px] h-full items-center relative shrink-0" data-node-id="I1012:47147;567:4143" data-name="Content">
                                  <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#646e87] text-[12px] text-ellipsis whitespace-nowrap" data-node-id="I1012:47147;566:13639">
                                    <p className="leading-[18px]">发货地</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="border-[#edeef3] border-b border-solid content-stretch flex h-[44px] items-start min-h-[44px] relative shrink-0 w-full" data-node-id="1012:47148" data-name="row">
                              <div className="border-0 border-[#edeef3] border-solid content-stretch flex flex-[1_0_0] h-full items-center min-w-px px-[12px] py-[10px] relative" data-node-id="1012:47151" data-name="table-cell-body">
                                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] h-full items-start justify-center min-w-px relative" data-node-id="I1012:47151;2985:32162" data-name="Content">
                                  <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I1012:47151;574:4502" data-name="Content">
                                    <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#1e2436] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="I1012:47151;574:4503">
                                      <p className="leading-[20px] overflow-hidden text-ellipsis">日本</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="border-0 border-[#edeef3] border-solid content-stretch flex flex-[1_0_0] h-full items-center min-w-[120px] px-[12px] py-[10px] relative" data-node-id="1012:47155" data-name="table-cell-body">
                                <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-node-id="I1012:47155;2985:32162" data-name="Content">
                                  <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I1012:47155;574:4502" data-name="Content">
                                    <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#1e2436] text-[14px] text-ellipsis" data-node-id="I1012:47155;574:4503">
                                      <p className="leading-[20px]">30%</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="border-0 border-[#edeef3] border-solid content-stretch flex flex-[1_0_0] h-full items-center min-w-[120px] px-[12px] py-[10px] relative" data-node-id="1012:47156" data-name="table-cell-body">
                                <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-node-id="I1012:47156;2985:32162" data-name="Content">
                                  <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I1012:47156;574:4502" data-name="Content">
                                    <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#1e2436] text-[14px] text-ellipsis" data-node-id="I1012:47156;574:4503">
                                      <p className="leading-[20px]">2天</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="border-0 border-[#edeef3] border-solid content-stretch flex flex-[1_0_0] h-full items-center min-w-[120px] px-[12px] py-[10px] relative" data-node-id="1012:47157" data-name="table-cell-body">
                                <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-node-id="I1012:47157;2985:32162" data-name="Content">
                                  <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I1012:47157;574:4502" data-name="Content">
                                    <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#1e2436] text-[14px] text-ellipsis" data-node-id="I1012:47157;574:4503">
                                      <p className="leading-[20px]">中国大陆</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="border-[#edeef3] border-b border-solid content-stretch flex h-[44px] items-start min-h-[44px] relative shrink-0 w-full" data-node-id="1012:47158" data-name="row">
                              <div className="border-0 border-[#edeef3] border-solid content-stretch flex flex-[1_0_0] h-full items-center min-w-px px-[12px] py-[10px] relative" data-node-id="1012:47161" data-name="table-cell-body">
                                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] h-full items-start justify-center min-w-px relative" data-node-id="I1012:47161;2985:32162" data-name="Content">
                                  <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I1012:47161;574:4502" data-name="Content">
                                    <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#1e2436] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="I1012:47161;574:4503">
                                      <p className="leading-[20px] overflow-hidden text-ellipsis">韩国</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="border-0 border-[#edeef3] border-solid content-stretch flex flex-[1_0_0] h-full items-center min-w-[120px] px-[12px] py-[10px] relative" data-node-id="1012:47165" data-name="table-cell-body">
                                <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-node-id="I1012:47165;2985:32162" data-name="Content">
                                  <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I1012:47165;574:4502" data-name="Content">
                                    <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#1e2436] text-[14px] text-ellipsis" data-node-id="I1012:47165;574:4503">
                                      <p className="leading-[20px]">30%</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="border-0 border-[#edeef3] border-solid content-stretch flex flex-[1_0_0] h-full items-center min-w-[120px] px-[12px] py-[10px] relative" data-node-id="1012:47166" data-name="table-cell-body">
                                <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-node-id="I1012:47166;2985:32162" data-name="Content">
                                  <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I1012:47166;574:4502" data-name="Content">
                                    <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#1e2436] text-[14px] text-ellipsis" data-node-id="I1012:47166;574:4503">
                                      <p className="leading-[20px]">1天</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="border-0 border-[#edeef3] border-solid content-stretch flex flex-[1_0_0] h-full items-center min-w-[120px] px-[12px] py-[10px] relative" data-node-id="1012:47167" data-name="table-cell-body">
                                <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-node-id="I1012:47167;2985:32162" data-name="Content">
                                  <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I1012:47167;574:4502" data-name="Content">
                                    <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#1e2436] text-[14px] text-ellipsis" data-node-id="I1012:47167;574:4503">
                                      <p className="leading-[20px]">中国大陆</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="border-[#edeef3] border-b border-solid content-stretch flex h-[44px] items-start min-h-[44px] relative shrink-0 w-full" data-node-id="1012:47168" data-name="row">
                              <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px px-[12px] py-[10px] relative" data-node-id="1012:47171" data-name="table-cell-body">
                                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] h-full items-start justify-center min-w-px relative" data-node-id="I1012:47171;2985:32162" data-name="Content">
                                  <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I1012:47171;574:4502" data-name="Content">
                                    <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#1e2436] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="I1012:47171;574:4503">
                                      <p className="leading-[20px] overflow-hidden text-ellipsis">印度尼西亚</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-[120px] px-[12px] py-[10px] relative" data-node-id="1012:47175" data-name="table-cell-body">
                                <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-node-id="I1012:47175;2985:32162" data-name="Content">
                                  <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I1012:47175;574:4502" data-name="Content">
                                    <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#1e2436] text-[14px] text-ellipsis" data-node-id="I1012:47175;574:4503">
                                      <p className="leading-[20px]">30%</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-[120px] px-[12px] py-[10px] relative" data-node-id="1012:47176" data-name="table-cell-body">
                                <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-node-id="I1012:47176;2985:32162" data-name="Content">
                                  <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I1012:47176;574:4502" data-name="Content">
                                    <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#1e2436] text-[14px] text-ellipsis" data-node-id="I1012:47176;574:4503">
                                      <p className="leading-[20px]">2天</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-[120px] px-[12px] py-[10px] relative" data-node-id="1012:47177" data-name="table-cell-body">
                                <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-node-id="I1012:47177;2985:32162" data-name="Content">
                                  <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I1012:47177;574:4502" data-name="Content">
                                    <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Source_Han_Sans_CN:Regular'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#14191f] text-[14px] text-ellipsis" data-node-id="I1012:47177;574:4503">
                                      <p className="leading-[20px]">中国大陆</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Table>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white border border-[#edeef3] border-solid content-stretch flex flex-col gap-[16px] items-start p-[21px] relative rounded-[8px] shadow-[0px_2px_4px_0px_rgba(18,50,108,0.01),0px_8px_16px_0px_rgba(18,50,108,0.02)] shrink-0 w-full" data-node-id="1012:47179" data-name="内容区域">
                    <div className="relative shrink-0 w-full" data-node-id="1012:47180">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
                        <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Semibold'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#1e2436] text-[18px] text-ellipsis whitespace-nowrap" data-node-id="1012:47181">
                          <p className="leading-[24px] overflow-hidden text-ellipsis">银行卡账户信息</p>
                        </div>
                      </div>
                    </div>
                    <div className="relative shrink-0 w-full" data-node-id="1229:93841">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-start relative size-full">
                        <div className="bg-white border border-[#eaebf1] border-solid content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start justify-center min-h-[52px] min-w-px overflow-clip p-[16px] relative rounded-[6px]" data-node-id="1229:93842" data-name="对象标题栏">
                          <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-node-id="1229:93843">
                            <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start leading-[0] min-w-px not-italic relative whitespace-nowrap" data-node-id="1229:93846">
                              <div className="flex flex-col font-['PingFang_SC:Medium'] h-[20px] justify-center overflow-hidden relative shrink-0 text-[#1e2436] text-[16px] text-ellipsis w-[278px]" data-node-id="1229:93847">
                                <p className="leading-[20px] overflow-hidden text-ellipsis">中国银行 (香港)</p>
                              </div>
                              <div className="flex flex-col font-['PingFang_SC:Regular'] justify-center relative shrink-0 text-[#646e87] text-[14px]" data-node-id="1229:93848">
                                <p className="leading-[20px]">9875 **** 1216</p>
                              </div>
                            </div>
                          </div>
                          <div className="content-start flex flex-wrap gap-[8px_24px] items-start relative shrink-0 w-full" data-node-id="1229:93849" data-name="间距12">
                            <div className="content-stretch flex flex-[1_0_0] items-start min-w-[360px] relative" data-node-id="1229:93866" data-name="descriptions-item">
                              <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-start min-w-px relative" data-node-id="1229:93867" data-name="左右布局插槽">
                                <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-[136px]" data-node-id="1229:93868" data-name="label-item">
                                  <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-node-id="I1229:93868;828:15714" data-name="Label">
                                    <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] min-w-px not-italic relative text-[#646e87] text-[14px]" data-node-id="I1229:93868;828:15715">
                                      <p className="leading-[20px]">用途</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px relative" data-node-id="1229:93869" data-name="Value">
                                  <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-node-id="1229:93870" data-name="Content">
                                    <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] min-w-px not-italic relative text-[#1e2436] text-[14px]" data-node-id="1229:93871">
                                      <p className="leading-[20px]">结算, 充值, 提现</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="content-stretch flex flex-[1_0_0] items-start min-w-[360px] relative" data-node-id="1229:93877" data-name="descriptions-item">
                              <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-start min-w-px relative" data-node-id="1229:93878" data-name="左右布局插槽">
                                <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-[136px]" data-node-id="1229:93879" data-name="label-item">
                                  <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-node-id="I1229:93879;828:15714" data-name="Label">
                                    <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] min-w-px not-italic relative text-[#646e87] text-[14px]" data-node-id="I1229:93879;828:15715">
                                      <p className="leading-[20px]">更新时间</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px relative" data-node-id="1229:93880" data-name="Value">
                                  <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-node-id="1229:93881" data-name="Content">
                                    <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] min-w-px not-italic relative text-[#1e2436] text-[14px]" data-node-id="1229:93882">
                                      <p className="leading-[20px]">2026-09-18</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="content-stretch flex flex-[1_0_0] items-start min-w-[360px] relative" data-node-id="1229:93888" data-name="descriptions-item">
                              <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-start min-w-px relative" data-node-id="1229:93889" data-name="左右布局插槽">
                                <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-[136px]" data-node-id="1229:93890" data-name="label-item">
                                  <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-node-id="I1229:93890;828:15714" data-name="Label">
                                    <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] min-w-px not-italic relative text-[#646e87] text-[14px]" data-node-id="I1229:93890;828:15715">
                                      <p className="leading-[20px]">币种</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px relative" data-node-id="1229:93891" data-name="Value">
                                  <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-node-id="1229:93892" data-name="Content">
                                    <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] min-w-px not-italic relative text-[#1e2436] text-[14px]" data-node-id="1229:93893">
                                      <p className="leading-[20px]">USD</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="content-stretch flex flex-[1_0_0] items-start min-w-[360px] relative" data-node-id="1229:93899" data-name="descriptions-item">
                              <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-start min-w-px relative" data-node-id="1229:93900" data-name="左右布局插槽">
                                <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-[136px]" data-node-id="1229:93901" data-name="label-item">
                                  <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-node-id="I1229:93901;828:15714" data-name="Label">
                                    <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] min-w-px not-italic relative text-[#646e87] text-[14px]" data-node-id="I1229:93901;828:15715">
                                      <p className="leading-[20px]">地区</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px relative" data-node-id="1229:93902" data-name="Value">
                                  <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-node-id="1229:93903" data-name="Content">
                                    <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] min-w-px not-italic relative text-[#1e2436] text-[14px]" data-node-id="1229:93904">
                                      <p className="leading-[20px]">中国香港</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="bg-white border border-[#eaebf1] border-solid content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start justify-center min-h-[52px] min-w-px overflow-clip p-[16px] relative rounded-[6px]" data-node-id="1229:93910" data-name="对象标题栏">
                          <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-node-id="1229:93911">
                            <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start leading-[0] min-w-px not-italic relative whitespace-nowrap" data-node-id="1229:93914">
                              <div className="flex flex-col font-['PingFang_SC:Medium'] h-[20px] justify-center overflow-hidden relative shrink-0 text-[#1e2436] text-[16px] text-ellipsis w-[278px]" data-node-id="1229:93915">
                                <p className="leading-[20px] overflow-hidden text-ellipsis">中国银行 (香港)</p>
                              </div>
                              <div className="flex flex-col font-['PingFang_SC:Regular'] justify-center relative shrink-0 text-[#646e87] text-[14px]" data-node-id="1229:93916">
                                <p className="leading-[20px]">9875 **** 1216</p>
                              </div>
                            </div>
                          </div>
                          <div className="content-start flex flex-wrap gap-[8px_24px] items-start relative shrink-0 w-full" data-node-id="1229:93917" data-name="间距12">
                            <div className="content-stretch flex flex-[1_0_0] items-start min-w-[360px] relative" data-node-id="1229:93918" data-name="descriptions-item">
                              <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-start min-w-px relative" data-node-id="1229:93919" data-name="左右布局插槽">
                                <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-[136px]" data-node-id="1229:93920" data-name="label-item">
                                  <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-node-id="I1229:93920;828:15714" data-name="Label">
                                    <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] min-w-px not-italic relative text-[#646e87] text-[14px]" data-node-id="I1229:93920;828:15715">
                                      <p className="leading-[20px]">币种</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px relative" data-node-id="1229:93921" data-name="Value">
                                  <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-node-id="1229:93922" data-name="Content">
                                    <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] min-w-px not-italic relative text-[#1e2436] text-[14px]" data-node-id="1229:93923">
                                      <p className="leading-[20px]">结算, 充值, 提现</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="content-stretch flex flex-[1_0_0] items-start min-w-[360px] relative" data-node-id="1229:93945" data-name="descriptions-item">
                              <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-start min-w-px relative" data-node-id="1229:93946" data-name="左右布局插槽">
                                <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-[136px]" data-node-id="1229:93947" data-name="label-item">
                                  <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-node-id="I1229:93947;828:15714" data-name="Label">
                                    <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] min-w-px not-italic relative text-[#646e87] text-[14px]" data-node-id="I1229:93947;828:15715">
                                      <p className="leading-[20px]">更新时间</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px relative" data-node-id="1229:93948" data-name="Value">
                                  <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-node-id="1229:93949" data-name="Content">
                                    <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] min-w-px not-italic relative text-[#1e2436] text-[14px]" data-node-id="1229:93950">
                                      <p className="leading-[20px]">2026-09-18</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="content-stretch flex flex-[1_0_0] items-start min-w-[360px] relative" data-node-id="1229:93956" data-name="descriptions-item">
                              <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-start min-w-px relative" data-node-id="1229:93957" data-name="左右布局插槽">
                                <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-[136px]" data-node-id="1229:93958" data-name="label-item">
                                  <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-node-id="I1229:93958;828:15714" data-name="Label">
                                    <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] min-w-px not-italic relative text-[#646e87] text-[14px]" data-node-id="I1229:93958;828:15715">
                                      <p className="leading-[20px]">币种</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px relative" data-node-id="1229:93959" data-name="Value">
                                  <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-node-id="1229:93960" data-name="Content">
                                    <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] min-w-px not-italic relative text-[#1e2436] text-[14px]" data-node-id="1229:93961">
                                      <p className="leading-[20px]">USD</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="content-stretch flex flex-[1_0_0] items-start min-w-[360px] relative" data-node-id="1229:93967" data-name="descriptions-item">
                              <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-start min-w-px relative" data-node-id="1229:93968" data-name="左右布局插槽">
                                <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-[136px]" data-node-id="1229:93969" data-name="label-item">
                                  <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-node-id="I1229:93969;828:15714" data-name="Label">
                                    <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] min-w-px not-italic relative text-[#646e87] text-[14px]" data-node-id="I1229:93969;828:15715">
                                      <p className="leading-[20px]">地区</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px relative" data-node-id="1229:93970" data-name="Value">
                                  <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-node-id="1229:93971" data-name="Content">
                                    <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] min-w-px not-italic relative text-[#1e2436] text-[14px]" data-node-id="1229:93972">
                                      <p className="leading-[20px]">中国香港</p>
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
                  <div className="bg-white border border-[#edeef3] border-solid content-stretch flex flex-col gap-[16px] items-start p-[21px] relative rounded-[8px] shadow-[0px_2px_4px_0px_rgba(18,50,108,0.01),0px_8px_16px_0px_rgba(18,50,108,0.02)] shrink-0 w-full" data-node-id="1012:47299" data-name="内容区域">
                    <div className="relative shrink-0 w-full" data-node-id="1012:47300">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
                        <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Semibold'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#1e2436] text-[18px] text-ellipsis whitespace-nowrap" data-node-id="1012:47301">
                          <p className="leading-[24px] overflow-hidden text-ellipsis">补充信息</p>
                        </div>
                      </div>
                    </div>
                    <div className="border border-[#e3e6ed] border-dashed relative rounded-[6px] shrink-0 w-full" data-node-id="1012:47303" data-name="upload-trigger">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[16px] py-[40px] relative size-full">
                        <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0 w-full" data-node-id="1012:47304" data-name="text-wrapper">
                          <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] not-italic relative shrink-0 text-[#646e87] text-[14px] whitespace-nowrap" data-node-id="1012:47305">
                            <p className="leading-[20px]">暂无相关信息</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start shrink-0 sticky top-0 w-[120px]" data-node-id="1012:47307">
                  <div className="content-stretch flex flex-col gap-[16px] items-start py-[8px] relative rounded-[8px] shrink-0 w-[100px]" data-node-id="1012:47308">
                    <div className="border-[#eaebf1] border-l border-solid content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-node-id="1012:47319" data-name="锚点导航">
                      <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full" data-node-id="I1012:47319;10790:12173" data-name="垂直布局">
                        <div className="content-stretch flex gap-[8px] items-center min-w-[48px] pl-[12px] py-[2px] relative shrink-0 w-full" data-node-id="I1012:47319;10790:12173;1012:47311" data-name="anchor-item-1st-level">
                          <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] not-italic relative shrink-0 text-[#1e2436] text-[12px] whitespace-nowrap" data-node-id="I1012:47319;10790:12173;1012:47312">
                            <p className="leading-[20px]">基本信息</p>
                          </div>
                          <div className="-translate-y-1/2 absolute bg-[#1e2436] h-[24px] left-0 rounded-[2px] top-1/2 w-px" data-node-id="I1012:47319;10790:12173;1012:47314" />
                        </div>
                        <div className="content-stretch flex gap-[8px] items-center min-w-[48px] pl-[12px] py-[2px] relative shrink-0 w-full" data-node-id="I1012:47319;10790:12173;1012:47315" data-name="anchor-item-1st-level">
                          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] min-w-px not-italic relative text-[#646e87] text-[12px]" data-node-id="I1012:47319;10790:12173;1012:47315;10790:4735">
                            <p className="leading-[20px]">展业类型</p>
                          </div>
                        </div>
                        <div className="content-stretch flex gap-[8px] items-center min-w-[48px] pl-[12px] py-[2px] relative shrink-0 w-full" data-node-id="I1012:47319;10790:12173;1012:47316" data-name="anchor-item-1st-level">
                          <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] not-italic relative shrink-0 text-[#646e87] text-[12px] whitespace-nowrap" data-node-id="I1012:47319;10790:12173;1012:47316;10790:4735">
                            <p className="leading-[20px]">交易信息</p>
                          </div>
                        </div>
                        <div className="content-stretch flex gap-[8px] items-center min-w-[48px] pl-[12px] py-[2px] relative shrink-0 w-full" data-node-id="I1012:47319;10790:12173;1012:47317" data-name="anchor-item-1st-level">
                          <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] not-italic relative shrink-0 text-[#646e87] text-[12px] whitespace-nowrap" data-node-id="I1012:47319;10790:12173;1012:47317;10790:4735">
                            <p className="leading-[20px]">银行卡信息</p>
                          </div>
                        </div>
                        <div className="content-stretch flex gap-[8px] items-center min-w-[48px] pl-[12px] py-[2px] relative shrink-0 w-full" data-node-id="I1012:47319;10790:12173;1012:47318" data-name="anchor-item-1st-level">
                          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] min-w-px not-italic relative text-[#646e87] text-[12px]" data-node-id="I1012:47319;10790:12173;1012:47318;10790:4735">
                            <p className="leading-[20px]">补充信息</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bg-white border-[#f3f3f7] border-solid border-t bottom-0 content-stretch drop-shadow-[0px_-1px_0.5px_rgba(20,41,79,0.02),0px_-2px_2px_rgba(20,41,79,0.01)] flex gap-[8px] items-center justify-end left-0 px-[32px] py-[16px] right-0" data-node-id="1012:48126" data-name="按钮区">
            <div className="bg-white border border-[#c92a3e] border-solid content-stretch flex gap-[6px] h-[32px] items-center justify-center min-w-[56px] px-[10px] py-[6px] relative rounded-[6px] shrink-0" data-node-id="1012:48132" data-name="button">
              <div className="relative shrink-0 size-[16px]" data-node-id="I1012:48132;150:1171" data-name="common-linear-add">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCommonLinearCloseCircle} />
              </div>
              <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] not-italic relative shrink-0 text-[#c92a3e] text-[14px] text-center whitespace-nowrap" data-node-id="I1012:48132;150:1172">
                <p className="leading-[20px]">审批驳回</p>
              </div>
            </div>
            <div className="bg-[#0036fe] content-stretch flex gap-[6px] h-[32px] items-center justify-center min-w-[56px] px-[10px] py-[6px] relative rounded-[6px] shrink-0" data-node-id="1012:48134" data-name="button">
              <div className="relative shrink-0 size-[16px]" data-node-id="I1012:48134;150:1167" data-name="common-linear-add">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCommonLinearTickCircle} />
              </div>
              <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap" data-node-id="I1012:48134;150:1168">
                <p className="leading-[20px]">审批通过</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
