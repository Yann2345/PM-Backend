import { useEffect, useRef, useState } from "react";

const assetPathPrefix = `${import.meta.env.BASE_URL}assets/detail`;
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
const imgGroup = `${assetPathPrefix}/bd4dd.svg`;
const imgGroup1 = `${assetPathPrefix}/87fe3.svg`;
const imgGroupLight = `${import.meta.env.BASE_URL}assets/form/282f0.svg`;
const imgGroup1Light = `${import.meta.env.BASE_URL}assets/form/35434.svg`;
const imgCommonLinearMenu = `${assetPathPrefix}/55afa.svg`;
const imgHome = `${assetPathPrefix}/0580c.svg`;
const imgGrid6 = `${assetPathPrefix}/17aa3.svg`;
const imgTaskSquare = `${assetPathPrefix}/bc535.svg`;
const imgCommonFilledFile = `${assetPathPrefix}/a5489.svg`;
const imgCommonLinearArrowRight1 = `${assetPathPrefix}/34335.svg`;
const imgSearchNormal = `${assetPathPrefix}/c7403.svg`;
const imgNotification = `${assetPathPrefix}/4d75d.svg`;
const imgCommonLinearMessageQuestion = `${assetPathPrefix}/36c6c.svg`;
const imgSidebarLinearSettings = `${assetPathPrefix}/ea483.svg`;
const imgCommonLinearArrowDown = `${assetPathPrefix}/e4899.svg`;
const imgVector = `${assetPathPrefix}/082f6.svg`;
const imgCommonLinearArchiveAdd = `${assetPathPrefix}/5f239.svg`;
const imgCopy = `${assetPathPrefix}/e2de1.svg`;
const imgVector9 = `${assetPathPrefix}/dc749.svg`;
const imgCard = `${assetPathPrefix}/30eab.svg`;
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
                      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Noto_Sans_SC:SemiBold'] font-semibold justify-center leading-[0] min-w-px overflow-hidden relative text-[#1a2c44] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="I138:27674;574:4503">
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
                      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Noto_Sans_SC:SemiBold'] font-semibold justify-center leading-[0] min-w-px overflow-hidden relative text-[#1a2c44] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="I138:27684;574:4503">
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
                      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Noto_Sans_SC:SemiBold'] font-semibold justify-center leading-[0] min-w-px overflow-hidden relative text-[#1a2c44] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="I138:27694;574:4503">
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
                      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Noto_Sans_SC:SemiBold'] font-semibold justify-center leading-[0] min-w-px overflow-hidden relative text-[#1a2c44] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="I138:27704;574:4503">
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
                      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Noto_Sans_SC:SemiBold'] font-semibold justify-center leading-[0] min-w-px overflow-hidden relative text-[#1a2c44] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="I138:27714;574:4503">
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
                      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Noto_Sans_SC:SemiBold'] font-semibold justify-center leading-[0] min-w-px overflow-hidden relative text-[#1a2c44] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="I138:27724;574:4503">
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

type DetailScreenProps = {
  onNavigateForm: () => void;
  onNavigateHome: () => void;
  onNavigateList: () => void;
  onThemeChange: (theme: "dark" | "light") => void;
  theme: "dark" | "light";
};

const detailSections = [
  { id: "basic", label: "基本信息" },
  { id: "business", label: "展业类型" },
  { id: "transaction", label: "交易信息" },
  { id: "bank", label: "银行卡信息" },
  { id: "additional", label: "补充信息" },
] as const;

type DetailSectionId = (typeof detailSections)[number]["id"];

export default function Component1({ onNavigateForm, onNavigateHome, onNavigateList, onThemeChange, theme }: DetailScreenProps) {
  const [activeSection, setActiveSection] = useState<DetailSectionId>("basic");
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<Record<DetailSectionId, HTMLDivElement | null>>({
    basic: null,
    business: null,
    transaction: null,
    bank: null,
    additional: null,
  });

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    const updateActiveSection = () => {
      if (scrollContainer.scrollTop + scrollContainer.clientHeight >= scrollContainer.scrollHeight - 2) {
        setActiveSection("additional");
        return;
      }

      const activationLine = scrollContainer.getBoundingClientRect().top + 24;
      let nextSection: DetailSectionId = "basic";

      detailSections.forEach(({ id }) => {
        const section = sectionRefs.current[id];
        if (section && section.getBoundingClientRect().top <= activationLine) {
          nextSection = id;
        }
      });

      setActiveSection(nextSection);
    };

    updateActiveSection();
    scrollContainer.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      scrollContainer.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  const scrollToSection = (id: DetailSectionId) => {
    const scrollContainer = scrollContainerRef.current;
    const section = sectionRefs.current[id];
    if (!scrollContainer || !section) return;

    const top =
      scrollContainer.scrollTop +
      section.getBoundingClientRect().top -
      scrollContainer.getBoundingClientRect().top -
      8;

    setActiveSection(id);
    scrollContainer.scrollTo({ behavior: "smooth", top });
  };

  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-node-id="1000:52571" data-name="详情页">
      <div className="bg-[#15171e] content-stretch flex flex-[1_0_0] items-start min-h-px relative w-full" data-node-id="1000:52572">
        <div className="content-stretch flex flex-col h-full items-start px-[12px] relative shrink-0 w-[216px]" data-node-id="1000:52573" data-name="Menu">
          <div className="content-stretch flex gap-[8px] items-center pb-[12px] pl-[6px] pr-[12px] pt-[16px] relative shrink-0 w-full" data-node-id="1000:52574" data-name="logo">
            <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-node-id="1000:52575">
              <div className="h-[24px] relative shrink-0 w-[90px]" data-node-id="1000:52576" data-name="Logo">
                <div className="absolute contents inset-[8.33%_3.14%_8.33%_2.78%]" data-node-id="I1000:52576;4343:5333" data-name="Group">
                  <div className="absolute inset-[8.33%_76.18%_8.33%_2.78%]" data-node-id="I1000:52576;4343:5334" data-name="Group">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={theme === "light" ? imgGroupLight : imgGroup} />
                  </div>
                  <div className="absolute inset-[29.7%_3.14%_14.2%_28.64%]" data-node-id="I1000:52576;4343:5337" data-name="Group">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={theme === "light" ? imgGroup1Light : imgGroup1} />
                  </div>
                </div>
              </div>
            </div>
            <div className="relative shrink-0 size-[14px]" data-node-id="1236:123191" data-name="common-linear-menu">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCommonLinearMenu} />
            </div>
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px overflow-x-clip overflow-y-auto pt-[8px] relative w-full" data-node-id="1000:52581" data-name="Navigation">
            <a className="content-stretch cursor-pointer flex gap-[8px] h-[40px] items-center pr-[8px] relative rounded-[8px] shrink-0 w-full" data-node-id="1000:52582" data-name="navigation-item-1st-level" onClick={onNavigateHome}>
              <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-node-id="I1000:52582;908:27495" data-name="Content">
                <div className="content-stretch flex items-center pl-[12px] pr-[8px] py-[8px] relative shrink-0" data-node-id="I1000:52582;908:27496" data-name="Icon">
                  <div className="content-stretch flex items-center justify-center relative shrink-0" data-node-id="I1000:52582;908:27497" data-name="尺寸=md">
                    <div className="relative shrink-0 size-[16px]" data-node-id="I1000:52582;908:27497;114:779" data-name="sidebar-linear-home">
                      <div className="absolute inset-[4.17%_4.17%_4.28%_4.17%]" data-node-id="I1000:52582;908:27497;114:779;864:19437" data-name="home">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgHome} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#bdc2d1] text-[14px] text-ellipsis text-left whitespace-nowrap" data-node-id="I1000:52582;908:27499">
                  <p className="leading-[20px] overflow-hidden text-ellipsis">首页</p>
                </div>
              </div>
            </a>
            <a className="content-stretch cursor-pointer flex gap-[8px] h-[40px] items-center pr-[8px] relative rounded-[8px] shrink-0 w-full" data-node-id="1000:52583" data-name="navigation-item-1st-level" onClick={onNavigateList}>
              <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-node-id="I1000:52583;908:27469" data-name="Content">
                <div className="content-stretch flex items-center justify-center pl-[12px] pr-[8px] py-[8px] relative shrink-0" data-node-id="I1000:52583;908:27470" data-name="Icon">
                  <div className="content-stretch flex items-center justify-center relative shrink-0" data-node-id="I1000:52583;908:27471" data-name="尺寸=md">
                    <div className="relative shrink-0 size-[16px]" data-node-id="I1000:52583;908:27471;114:779" data-name="common-linear-grid">
                      <div className="absolute contents inset-[8.33%]" data-node-id="I1000:52583;908:27471;114:779;14415:35668" data-name="vuesax/linear/grid-6">
                        <div className="absolute inset-[8.33%]" data-node-id="I1000:52583;908:27471;114:779;14415:35669" data-name="grid-6">
                          <div className="absolute inset-[-5%]">
                            <img alt="" className="block max-w-none size-full" src={imgGrid6} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#bdc2d1] text-[14px] text-ellipsis text-left whitespace-nowrap" data-node-id="I1000:52583;908:27472">
                  <p className="leading-[20px] overflow-hidden text-ellipsis">列表页</p>
                </div>
              </div>
            </a>
            <div className="bg-[rgba(60,69,93,0.3)] content-stretch flex gap-[8px] h-[40px] items-center pr-[8px] relative rounded-[6px] shrink-0 w-full" data-node-id="1000:52584" data-name="navigation-item-1st-level">
              <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-node-id="I1000:52584;908:27469" data-name="Content">
                <div className="content-stretch flex items-center justify-center pl-[12px] pr-[8px] py-[8px] relative shrink-0" data-node-id="I1000:52584;908:27470" data-name="Icon">
                  <div className="content-stretch flex items-center justify-center relative shrink-0" data-node-id="I1000:52584;908:27471" data-name="尺寸=md">
                    <div className="relative shrink-0 size-[16px]" data-node-id="I1000:52584;908:27471;114:779" data-name="common-filled-file">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCommonFilledFile} />
                    </div>
                  </div>
                </div>
                <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Semibold'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[14px] text-ellipsis text-white whitespace-nowrap" data-node-id="I1000:52584;908:27472">
                  <p className="leading-[20px] overflow-hidden text-ellipsis">详情页</p>
                </div>
              </div>
            </div>
            <a className="content-stretch cursor-pointer flex gap-[8px] h-[40px] items-center pr-[8px] relative rounded-[8px] shrink-0 w-full" data-node-id="1000:52585" data-name="navigation-item-1st-level" onClick={onNavigateForm}>
              <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-node-id="I1000:52585;908:27469" data-name="Content">
                <div className="content-stretch flex items-center justify-center pl-[12px] pr-[8px] py-[8px] relative shrink-0" data-node-id="I1000:52585;908:27470" data-name="Icon">
                  <div className="content-stretch flex items-center justify-center relative shrink-0" data-node-id="I1000:52585;908:27471" data-name="尺寸=md">
                    <div className="relative shrink-0 size-[16px]" data-node-id="I1000:52585;908:27471;114:779" data-name="common-linear-todo">
                      <div className="absolute inset-[4.17%]" data-node-id="I1000:52585;908:27471;114:779;1290:14543" data-name="task-square">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgTaskSquare} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#bdc2d1] text-[14px] text-ellipsis text-left whitespace-nowrap" data-node-id="I1000:52585;908:27472">
                  <p className="leading-[20px] overflow-hidden text-ellipsis">表单页</p>
                </div>
              </div>
            </a>
          </div>
          <div className="content-stretch flex flex-col items-start pb-[16px] pt-[12px] relative shrink-0 w-full" data-node-id="1220:82033">
            <div className="content-stretch flex h-[28px] items-center relative shrink-0 w-full" data-node-id="1220:82041" data-name="tabs-capsule">
              <div className="bg-[rgba(60,69,93,0.3)] content-stretch flex flex-[1_0_0] gap-[2px] items-center min-w-px overflow-clip p-[2px] relative rounded-[6px]" data-node-id="I1220:82041;1220:72564" data-name="tabs水平插槽">
                <div className="flex flex-[1_0_0] flex-row items-center self-stretch" data-node-id="I1220:82041;1220:72564;1220:82035">
                  <button aria-pressed={theme === "dark"} className="bg-[#15171e] content-stretch flex flex-[1_0_0] gap-[4px] h-full items-center justify-center max-w-[160px] min-w-[48px] px-[12px] py-[3px] relative rounded-[4px] shadow-[0px_2px_4px_0px_rgba(18,50,108,0.01),0px_8px_16px_0px_rgba(18,50,108,0.02)]" data-name="tabs-capsule-cell" data-theme-option="dark" onClick={() => onThemeChange("dark")} type="button">
                    <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[12px] text-center text-ellipsis text-white whitespace-nowrap" data-node-id="I1220:82041;1220:72564;1220:82035;1220:72548">
                      <p className="leading-[18px] overflow-hidden text-ellipsis">暗色风格</p>
                    </div>
                  </button>
                </div>
                <div className="flex flex-[1_0_0] flex-row items-center self-stretch" data-node-id="I1220:82041;1220:72564;1220:82036">
                  <button aria-pressed={theme === "light"} className="content-stretch cursor-pointer flex flex-[1_0_0] gap-[4px] h-full items-center justify-center max-w-[160px] min-w-[48px] px-[12px] py-[4px] relative rounded-[4px]" data-name="tabs-capsule-cell" data-theme-option="light" onClick={() => onThemeChange("light")} type="button">
                    <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#bdc2d1] text-[12px] text-center text-ellipsis whitespace-nowrap" data-node-id="I1220:82041;1220:72564;1220:82036;1220:72538">
                      <p className="leading-[18px] overflow-hidden text-ellipsis">亮色风格</p>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#f0f1f7] content-stretch flex flex-[1_0_0] flex-col h-full items-start min-w-px relative" data-node-id="1000:52594">
          <div className="border-[#e3e6ed] border-b border-solid content-stretch flex gap-[8px] h-[56px] items-center px-[32px] shrink-0 sticky top-0 w-full" data-node-id="1000:52595" data-name="PageHeader">
            <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px relative" data-node-id="1000:52596">
              <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-w-px relative" data-node-id="1000:52598" data-name="面包屑">
                <a className="[word-break:break-word] cursor-pointer flex flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#646e87] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="1000:52600" onClick={onNavigateList}>
                  <p className="leading-[20px] overflow-hidden text-ellipsis">{theme === "light" ? "首页" : "列表页"}</p>
                </a>
                <div className="relative shrink-0 size-[12px]" data-node-id="1000:52601" data-name="common-linear-arrow-right">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCommonLinearArrowRight1} />
                </div>
                <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#1e2436] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="1000:52604">
                  <p className="leading-[20px] overflow-hidden text-ellipsis">{theme === "light" ? "客户详情" : "详情页"}</p>
                </div>
              </div>
              <button className="bg-[#eaebf1] content-stretch cursor-pointer flex gap-[4px] h-[32px] items-center px-[12px] py-[6px] relative rounded-[6px] shrink-0 w-[140px]" data-node-id="1000:52605" data-name="input-search">
                <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-node-id="I1000:52605;654:20563" data-name="Content">
                  <div className="relative shrink-0 size-[16px]" data-node-id="I1000:52605;654:20564" data-name="common-linear-search">
                    <div className="absolute inset-[4.17%]" data-node-id="I1000:52605;654:20564;110:1324" data-name="search-normal">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSearchNormal} />
                    </div>
                  </div>
                  <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#646e87] text-[14px] text-ellipsis text-left whitespace-nowrap" data-node-id="I1000:52605;654:20565">
                    <p className="leading-[20px] overflow-hidden text-ellipsis">搜索 ⌘+K</p>
                  </div>
                </div>
              </button>
            </div>
            <div className="content-stretch flex gap-[8px] h-full items-center relative shrink-0" data-node-id="1000:52623" data-name="功能区">
              <div className="bg-[#eaebf1] content-stretch flex gap-[8px] items-center justify-center p-[6px] relative rounded-[6px] shrink-0 size-[32px]" data-node-id="1000:52627" data-name="Icon-item">
                <div className="relative shrink-0 size-[16px]" data-node-id="1000:52628" data-name="common-linear-notification">
                  <div className="absolute inset-[3.92%_12.43%_3.92%_12.39%]" data-node-id="I1000:52628;110:1422" data-name="notification">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgNotification} />
                  </div>
                </div>
              </div>
              <div className="bg-[#eaebf1] content-stretch flex gap-[8px] items-center justify-center p-[6px] relative rounded-[6px] shrink-0 size-[32px]" data-node-id="1000:52630" data-name="Icon-item">
                <div className="relative shrink-0 size-[16px]" data-node-id="1000:52631" data-name="common-linear-message-question">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCommonLinearMessageQuestion} />
                </div>
              </div>
              <div className="bg-[#eaebf1] content-stretch flex gap-[4px] items-center justify-center p-[6px] relative rounded-[6px] shrink-0 size-[32px]" data-node-id="1000:52639" data-name="Icon-item">
                <div className="relative shrink-0 size-[16px]" data-node-id="1000:52640" data-name="sidebar-linear-settings">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSidebarLinearSettings} />
                </div>
              </div>
              <div className="bg-[#eaebf1] content-stretch flex gap-[4px] items-center pl-[4px] pr-[6px] py-[4px] relative rounded-[16px] shrink-0" data-node-id="1000:52648" data-name="Icon-item">
                <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="I1000:52648;4358:4272" data-name="个人">
                  <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 size-[24px]" data-node-id="I1000:52648;1740:15931" data-name="avatar">
                    <div className="flex-[1_0_0] h-full min-w-px relative rounded-[32px]" data-node-id="I1000:52648;1740:15931;509:320" data-name="Avatar">
                      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[32px] size-full" src={imgAvatar} />
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="I1000:52648;4358:3405" data-name="文本信息">
                    <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#3c455d] text-[12px] text-center text-ellipsis whitespace-nowrap" data-node-id="I1000:52648;4358:3406">
                      <p className="leading-[18px] overflow-hidden text-ellipsis">张三</p>
                    </div>
                  </div>
                </div>
                <div className="relative shrink-0 size-[16px]" data-node-id="I1000:52648;1740:15932" data-name="common-linear-arrow-down">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCommonLinearArrowDown} />
                </div>
              </div>
            </div>
          </div>
          <div ref={scrollContainerRef} className="content-stretch flex flex-[1_0_0] flex-col gap-[20px] items-start min-h-px overflow-x-clip overflow-y-auto px-[32px] pb-[96px] pt-[20px] relative w-full" data-node-id="1000:52649" data-name="内容">
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-node-id="1000:52654">
              <div className="content-stretch flex flex-col items-start relative rounded-tl-[12px] rounded-tr-[12px] shrink-0 w-full" data-node-id="1000:52662" data-name="信息组">
                <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-node-id="1000:52663" data-name="Title">
                  <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-node-id="1000:52664">
                    <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Semibold'] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#1e2436] text-[24px] text-ellipsis whitespace-nowrap" data-node-id="1000:52665">
                      <p className="leading-[32px] overflow-hidden text-ellipsis">阿里巴巴网络技术有限公司</p>
                    </div>
                    <div className="bg-[#fdf0e9] border border-[#fadecf] border-solid content-stretch flex gap-[2px] items-center px-[6px] py-px relative rounded-[9999px] shrink-0" data-node-id="1220:84411" data-name="tag">
                      <div className="relative shrink-0 size-[9px]" data-node-id="I1220:84411;1171:69349" data-name="Vector">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector} />
                      </div>
                      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e08152] text-[12px] whitespace-nowrap" data-node-id="I1220:84411;1149:67921">
                        <p className="leading-[18px]">NORM</p>
                      </div>
                    </div>
                    <div className="bg-[#dbe5ff] content-stretch flex gap-[4px] items-center px-[8px] py-px relative rounded-[9999px] shrink-0" data-node-id="1000:52666" data-name="tag">
                      <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] not-italic relative shrink-0 text-[#3651b2] text-[14px] whitespace-nowrap" data-node-id="1000:52669">
                        <p className="leading-[20px]">入驻签约</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white border border-[#e3e6ed] border-solid content-stretch flex gap-[6px] items-center justify-center min-w-[56px] overflow-clip px-[8px] py-[6px] relative rounded-[6px] shrink-0" data-node-id="1000:52682" data-name="button">
                    <div className="relative shrink-0 size-[16px]" data-node-id="I1000:52682;150:1171" data-name="common-linear-add">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCommonLinearArchiveAdd} />
                    </div>
                    <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Semibold'] justify-center leading-[0] not-italic relative shrink-0 text-[#3c455d] text-[14px] whitespace-nowrap" data-node-id="I1000:52682;150:1172">
                      <p className="leading-[20px]">次要按钮</p>
                    </div>
                  </div>
                  <div className="bg-white border border-[#e3e6ed] border-solid content-stretch flex gap-[6px] items-center justify-center min-w-[56px] overflow-clip px-[8px] py-[6px] relative rounded-[6px] shrink-0" data-node-id="1000:52683" data-name="button">
                    <div className="relative shrink-0 size-[16px]" data-node-id="I1000:52683;150:1171" data-name="common-linear-add">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCommonLinearArchiveAdd} />
                    </div>
                    <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Semibold'] justify-center leading-[0] not-italic relative shrink-0 text-[#3c455d] text-[14px] whitespace-nowrap" data-node-id="I1000:52683;150:1172">
                      <p className="leading-[20px]">次要按钮</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-center flex flex-wrap gap-[4px_12px] items-center relative shrink-0 w-full" data-node-id="1000:52684" data-name="重要信息">
                <div className="content-stretch flex items-start relative shrink-0" data-node-id="1000:52687" data-name="descriptions-item">
                  <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-node-id="I1000:52687;13035:35042" data-name="标签文本布局插槽">
                    <div className="content-stretch flex items-start max-w-[136px] relative shrink-0" data-node-id="I1000:52687;13035:35042;1000:53565" data-name="label-item">
                      <div className="[word-break:break-word] content-stretch flex gap-[4px] items-start leading-[0] not-italic relative shrink-0 text-[14px] whitespace-nowrap" data-node-id="I1000:52687;13035:35042;1000:53565;2983:30107" data-name="Label">
                        <div className="flex flex-col font-['PingFang_SC:Regular'] justify-center relative shrink-0 text-[#646e87]" data-node-id="I1000:52687;13035:35042;1000:53565;2983:30108">
                          <p className="leading-[20px]">客户 ID</p>
                        </div>
                        <div className="flex flex-col font-['Source_Han_Sans_CN:Regular'] justify-center relative shrink-0 text-[#657281]" data-node-id="I1000:52687;13035:35042;1000:53565;2983:30109">
                          <p className="leading-[20px]">:</p>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0" data-node-id="I1000:52687;13035:35042;1000:53566" data-name="Value">
                      <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-node-id="I1000:52687;13035:35042;1000:53567" data-name="Content">
                        <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] max-w-[200px] not-italic relative shrink-0 text-[#1e2436] text-[14px] whitespace-nowrap" data-node-id="I1000:52687;13035:35042;1000:53568">
                          <p className="leading-[20px]">G20260612152515CB2A10</p>
                        </div>
                        <div className="content-stretch flex items-center py-[4px] relative shrink-0" data-node-id="I1000:52687;13035:35042;1000:53569" data-name="linear-copy">
                          <div className="relative shrink-0 size-[12px]" data-node-id="I1000:52687;13035:35042;1000:53570" data-name="common-linear-copy">
                            <div className="absolute inset-[4.17%]" data-node-id="I1000:52687;13035:35042;1000:53570;110:1369" data-name="copy">
                              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCopy} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-[16px] relative shrink-0 w-0" data-node-id="1000:52688">
                  <div className="absolute inset-[0_-0.5px]">
                    <img alt="" className="block max-w-none size-full" src={imgVector9} />
                  </div>
                </div>
                <div className="content-stretch flex items-start relative shrink-0" data-node-id="1000:52689" data-name="descriptions-item">
                  <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-node-id="I1000:52689;13035:35042" data-name="标签文本布局插槽">
                    <div className="content-stretch flex items-start max-w-[136px] relative shrink-0" data-node-id="I1000:52689;13035:35042;1000:53575" data-name="label-item">
                      <div className="[word-break:break-word] content-stretch flex gap-[4px] items-start leading-[0] not-italic relative shrink-0 text-[14px] whitespace-nowrap" data-node-id="I1000:52689;13035:35042;1000:53575;2983:30107" data-name="Label">
                        <div className="flex flex-col font-['PingFang_SC:Regular'] justify-center relative shrink-0 text-[#646e87]" data-node-id="I1000:52689;13035:35042;1000:53575;2983:30108">
                          <p className="leading-[20px]">归属集团</p>
                        </div>
                        <div className="flex flex-col font-['Source_Han_Sans_CN:Regular'] justify-center relative shrink-0 text-[#657281]" data-node-id="I1000:52689;13035:35042;1000:53575;2983:30109">
                          <p className="leading-[20px]">:</p>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0" data-node-id="I1000:52689;13035:35042;1000:53576" data-name="Value">
                      <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-node-id="I1000:52689;13035:35042;1000:53577" data-name="Content">
                        <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] max-w-[200px] not-italic overflow-hidden relative shrink-0 text-[#14191f] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="I1000:52689;13035:35042;1000:53578">
                          <p className="leading-[20px] overflow-hidden text-ellipsis">阿里巴巴（中国）网络技术有限公司</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-[16px] relative shrink-0 w-0" data-node-id="1000:52690">
                  <div className="absolute inset-[0_-0.5px]">
                    <img alt="" className="block max-w-none size-full" src={imgVector9} />
                  </div>
                </div>
                <div className="content-stretch flex items-start relative shrink-0" data-node-id="1000:52691" data-name="descriptions-item">
                  <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-node-id="I1000:52691;13035:35042" data-name="标签文本布局插槽">
                    <div className="content-stretch flex items-start max-w-[136px] relative shrink-0" data-node-id="I1000:52691;13035:35042;1000:53585" data-name="label-item">
                      <div className="[word-break:break-word] content-stretch flex gap-[4px] items-start leading-[0] not-italic relative shrink-0 text-[14px] whitespace-nowrap" data-node-id="I1000:52691;13035:35042;1000:53585;2983:30107" data-name="Label">
                        <div className="flex flex-col font-['PingFang_SC:Regular'] justify-center relative shrink-0 text-[#646e87]" data-node-id="I1000:52691;13035:35042;1000:53585;2983:30108">
                          <p className="leading-[20px]">创建时间</p>
                        </div>
                        <div className="flex flex-col font-['Source_Han_Sans_CN:Regular'] justify-center relative shrink-0 text-[#657281]" data-node-id="I1000:52691;13035:35042;1000:53585;2983:30109">
                          <p className="leading-[20px]">:</p>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0" data-node-id="I1000:52691;13035:35042;1000:53586" data-name="Value">
                      <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-node-id="I1000:52691;13035:35042;1000:53587" data-name="Content">
                        <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] max-w-[200px] not-italic relative shrink-0 text-[#1e2436] text-[14px] whitespace-nowrap" data-node-id="I1000:52691;13035:35042;1000:53588">
                          <p className="leading-[20px]">2026-05-27 16:15:41</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <TabsCapsule className="content-stretch flex h-[32px] items-center relative shrink-0" propValue1="2">
              <div className="content-stretch flex gap-[4px] h-full items-center justify-center max-w-[160px] min-w-[48px] px-[12px] py-[6px] relative rounded-[6px] shrink-0" data-node-id="1220:73914" data-name="tabs-capsule-cell">
                <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#646e87] text-[14px] text-center text-ellipsis whitespace-nowrap" data-node-id="I1220:73914;1220:72538">
                  <p className="leading-[20px] overflow-hidden text-ellipsis">客户信息</p>
                </div>
              </div>
              <div className="bg-white content-stretch drop-shadow-[0px_1px_0.5px_rgba(20,41,79,0.02),0px_2px_2px_rgba(20,41,79,0.01)] flex gap-[4px] h-full items-center justify-center max-w-[160px] min-w-[48px] px-[12px] py-[3px] relative rounded-[6px] shrink-0" data-node-id="1220:73915" data-name="tabs-capsule-cell">
                <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#1e2436] text-[14px] text-center text-ellipsis whitespace-nowrap" data-node-id="I1220:73915;1220:72548">
                  <p className="leading-[24px] overflow-hidden text-ellipsis">客户产品</p>
                </div>
              </div>
              <div className="content-stretch flex gap-[4px] h-full items-center justify-center max-w-[160px] min-w-[48px] px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-node-id="1220:73916" data-name="tabs-capsule-cell">
                <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#646e87] text-[14px] text-center text-ellipsis whitespace-nowrap" data-node-id="I1220:73916;1220:72538">
                  <p className="leading-[20px] overflow-hidden text-ellipsis">商户号</p>
                </div>
              </div>
              <div className="content-stretch flex gap-[4px] h-full items-center justify-center max-w-[160px] min-w-[48px] px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-node-id="1220:73923" data-name="tabs-capsule-cell">
                <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#646e87] text-[14px] text-center text-ellipsis whitespace-nowrap" data-node-id="I1220:73923;1220:72538">
                  <p className="leading-[20px] overflow-hidden text-ellipsis">服务协议</p>
                </div>
              </div>
              <div className="content-stretch flex gap-[4px] h-full items-center justify-center max-w-[160px] min-w-[48px] px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-node-id="1220:73937" data-name="tabs-capsule-cell">
                <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#646e87] text-[14px] text-center text-ellipsis whitespace-nowrap" data-node-id="I1220:73937;1220:72538">
                  <p className="leading-[20px] overflow-hidden text-ellipsis">操作记录</p>
                </div>
              </div>
            </TabsCapsule>
            <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-node-id="1000:52706">
              <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-node-id="1000:52707">
                <div className="bg-white border border-[#edeef3] border-solid content-stretch drop-shadow-[0px_1px_0.5px_rgba(20,41,79,0.02),0px_2px_2px_rgba(20,41,79,0.01)] flex flex-[1_0_0] items-start min-w-px p-[20px] relative rounded-[8px]" data-node-id="1000:52760">
                  <div className="bg-white content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-start min-w-px relative" data-node-id="1000:52761">
                    <div ref={(element) => { sectionRefs.current.basic = element; }} className="bg-white content-stretch flex flex-col gap-[16px] items-start relative rounded-[8px] shrink-0 w-full" data-node-id="1000:52762" data-name="内容区域">
                      <div className="relative shrink-0 w-full" data-node-id="1000:52763" data-name="Title">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
                          <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Semibold'] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#1e2436] text-[18px] text-ellipsis whitespace-nowrap" data-node-id="1000:52765">
                            <p className="leading-[24px] overflow-hidden text-ellipsis">直播交友</p>
                          </div>
                        </div>
                      </div>
                      <div className="relative shrink-0 w-full" data-node-id="1000:52779">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid gap-x-[20px] gap-y-[12px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[repeat(4,fit-content(100%))] relative size-full">
                          <div className="content-stretch flex gap-[12px] items-start justify-self-stretch min-w-[340px] relative self-stretch shrink-0" data-node-id="1000:52780" data-name="descriptions-item">
                            <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-[136px]" data-node-id="1000:52781" data-name="label-item">
                              <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-node-id="I1000:52781;828:15714" data-name="Label">
                                <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] min-w-px not-italic relative text-[#646e87] text-[14px]" data-node-id="I1000:52781;828:15715">
                                  <p className="leading-[20px]">注册名</p>
                                </div>
                              </div>
                            </div>
                            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px relative" data-node-id="1000:52782" data-name="Value">
                              <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-node-id="1000:52783" data-name="Content">
                                <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#1e2436] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="1000:52784">
                                  <p className="leading-[20px] overflow-hidden text-ellipsis">AutomatedTesting</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="content-stretch flex gap-[12px] items-start justify-self-stretch min-w-[340px] relative self-stretch shrink-0" data-node-id="1000:52790" data-name="descriptions-item">
                            <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-[136px]" data-node-id="1000:52791" data-name="label-item">
                              <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-node-id="I1000:52791;828:15714" data-name="Label">
                                <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] min-w-px not-italic relative text-[#646e87] text-[14px]" data-node-id="I1000:52791;828:15715">
                                  <p className="leading-[20px]">英文名</p>
                                </div>
                              </div>
                            </div>
                            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px relative" data-node-id="1000:52792" data-name="Value">
                              <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-node-id="1000:52793" data-name="Content">
                                <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#1e2436] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="1000:52794">
                                  <p className="leading-[20px] overflow-hidden text-ellipsis">AutomatedTesting</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="content-stretch flex gap-[12px] items-start justify-self-stretch min-w-[340px] relative self-stretch shrink-0" data-node-id="1000:52800" data-name="descriptions-item">
                            <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-[136px]" data-node-id="1000:52801" data-name="label-item">
                              <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-node-id="I1000:52801;828:15714" data-name="Label">
                                <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] min-w-px not-italic relative text-[#646e87] text-[14px]" data-node-id="I1000:52801;828:15715">
                                  <p className="leading-[20px]">注册号</p>
                                </div>
                              </div>
                            </div>
                            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px relative" data-node-id="1000:52802" data-name="Value">
                              <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-node-id="1000:52803" data-name="Content">
                                <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#1e2436] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="1000:52804">
                                  <p className="leading-[20px] overflow-hidden text-ellipsis">C20260612100733A3FE9</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="content-stretch flex gap-[12px] items-start justify-self-stretch min-w-[340px] relative self-stretch shrink-0" data-node-id="1000:52810" data-name="descriptions-item">
                            <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-[136px]" data-node-id="1000:52811" data-name="label-item">
                              <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-node-id="I1000:52811;828:15714" data-name="Label">
                                <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] min-w-px not-italic relative text-[#646e87] text-[14px]" data-node-id="I1000:52811;828:15715">
                                  <p className="leading-[20px]">注册日期</p>
                                </div>
                              </div>
                            </div>
                            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px relative" data-node-id="1000:52812" data-name="Value">
                              <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-node-id="1000:52813" data-name="Content">
                                <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] min-w-px not-italic relative text-[#1e2436] text-[14px]" data-node-id="1000:52814">
                                  <p className="leading-[20px]">1992-09-18</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="content-stretch flex gap-[12px] items-start justify-self-stretch min-w-[340px] relative self-stretch shrink-0" data-node-id="1000:52820" data-name="descriptions-item">
                            <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-[136px]" data-node-id="1000:52821" data-name="label-item">
                              <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-node-id="I1000:52821;828:15714" data-name="Label">
                                <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] min-w-px not-italic relative text-[#646e87] text-[14px]" data-node-id="I1000:52821;828:15715">
                                  <p className="leading-[20px]">公司规模</p>
                                </div>
                              </div>
                            </div>
                            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px relative" data-node-id="1000:52822" data-name="Value">
                              <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-node-id="1000:52823" data-name="Content">
                                <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] min-w-px not-italic relative text-[#1e2436] text-[14px]" data-node-id="1000:52824">
                                  <p className="leading-[20px]">50 – 150 人</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="content-stretch flex gap-[12px] items-start justify-self-stretch min-w-[340px] relative self-stretch shrink-0" data-node-id="1000:52830" data-name="descriptions-item">
                            <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-[136px]" data-node-id="1000:52831" data-name="label-item">
                              <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-node-id="I1000:52831;828:15714" data-name="Label">
                                <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] min-w-px not-italic relative text-[#646e87] text-[14px]" data-node-id="I1000:52831;828:15715">
                                  <p className="leading-[20px]">网页链接</p>
                                </div>
                              </div>
                            </div>
                            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px relative" data-node-id="1000:52832" data-name="Value">
                              <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-node-id="1000:52833" data-name="Content">
                                <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] min-w-px not-italic relative text-[#0036fe] text-[14px]" data-node-id="1000:52834">
                                  <p className="leading-[20px]">查看</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="content-stretch flex gap-[12px] items-start justify-self-stretch min-w-[340px] relative self-stretch shrink-0" data-node-id="1000:52840" data-name="descriptions-item">
                            <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-[136px]" data-node-id="1000:52841" data-name="label-item">
                              <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-node-id="I1000:52841;828:15714" data-name="Label">
                                <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] min-w-px not-italic relative text-[#646e87] text-[14px]" data-node-id="I1000:52841;828:15715">
                                  <p className="leading-[20px]">注册国家/地区</p>
                                </div>
                              </div>
                            </div>
                            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px relative" data-node-id="1000:52842" data-name="Value">
                              <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-node-id="1000:52843" data-name="Content">
                                <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#1e2436] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="1000:52844">
                                  <p className="leading-[20px] overflow-hidden text-ellipsis">中国香港</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="content-stretch flex gap-[12px] items-start justify-self-stretch min-w-[340px] relative self-stretch shrink-0" data-node-id="1000:52850" data-name="descriptions-item">
                            <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-[136px]" data-node-id="1000:52851" data-name="label-item">
                              <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-node-id="I1000:52851;828:15714" data-name="Label">
                                <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] min-w-px not-italic relative text-[#646e87] text-[14px]" data-node-id="I1000:52851;828:15715">
                                  <p className="leading-[20px]">注册地址</p>
                                </div>
                              </div>
                            </div>
                            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px relative" data-node-id="1000:52852" data-name="Value">
                              <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-node-id="1000:52853" data-name="Content">
                                <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#1e2436] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="1000:52854">
                                  <p className="leading-[20px] overflow-hidden text-ellipsis">香港长沙湾长裕街10号亿京广场</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div ref={(element) => { sectionRefs.current.business = element; }} className="bg-white content-stretch flex flex-col gap-[16px] items-start relative rounded-[8px] shrink-0 w-full" data-node-id="1000:52861" data-name="内容区域">
                      <div className="relative shrink-0 w-full" data-node-id="1000:52862">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
                          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Semibold'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#1e2436] text-[18px] text-ellipsis whitespace-nowrap" data-node-id="1000:52864">
                            <p className="leading-[24px] overflow-hidden text-ellipsis">展业类型</p>
                          </div>
                        </div>
                      </div>
                      <div className="relative shrink-0 w-full" data-node-id="1000:52865">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start relative size-full">
                          <div className="border border-[#eaebf1] border-solid content-stretch flex flex-col gap-[12px] items-start p-[16px] relative rounded-[6px] shrink-0 w-full" data-node-id="1000:52866">
                            <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#1e2436] text-[16px] text-ellipsis w-full whitespace-nowrap" data-node-id="1000:52867">
                              <p className="leading-[20px] overflow-hidden text-ellipsis">收单</p>
                            </div>
                            <div className="gap-x-[20px] gap-y-[12px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[repeat(3,fit-content(100%))] relative shrink-0 w-full" data-node-id="1000:52868">
                              <div className="content-stretch flex gap-[12px] items-start justify-self-stretch min-w-[340px] relative self-stretch shrink-0" data-node-id="1000:52869" data-name="descriptions-item">
                                <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-[136px]" data-node-id="1000:52870" data-name="label-item">
                                  <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-node-id="I1000:52870;828:15714" data-name="Label">
                                    <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] min-w-px not-italic relative text-[#646e87] text-[14px]" data-node-id="I1000:52870;828:15715">
                                      <p className="leading-[20px]">开通国家</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px relative" data-node-id="1000:52871" data-name="Value">
                                  <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-node-id="1000:52872" data-name="Content">
                                    <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#1e2436] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="1000:52873">
                                      <p className="leading-[20px] overflow-hidden text-ellipsis">新加坡，马来西亚等24个</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="content-stretch flex gap-[12px] items-start justify-self-stretch min-w-[340px] relative self-stretch shrink-0" data-node-id="1000:52879" data-name="descriptions-item">
                                <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-[136px]" data-node-id="1000:52880" data-name="label-item">
                                  <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-node-id="I1000:52880;828:15714" data-name="Label">
                                    <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] min-w-px not-italic relative text-[#646e87] text-[14px]" data-node-id="I1000:52880;828:15715">
                                      <p className="leading-[20px]">单笔金额区间</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px relative" data-node-id="1000:52881" data-name="Value">
                                  <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-node-id="1000:52882" data-name="Content">
                                    <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#1e2436] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="1000:52883">
                                      <p className="leading-[20px] overflow-hidden text-ellipsis">0-2,000 USD</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="content-stretch flex gap-[12px] items-start justify-self-stretch min-w-[340px] relative self-stretch shrink-0" data-node-id="1000:52889" data-name="descriptions-item">
                                <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-[136px]" data-node-id="1000:52890" data-name="label-item">
                                  <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-node-id="I1000:52890;828:15714" data-name="Label">
                                    <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] min-w-px not-italic relative text-[#646e87] text-[14px]" data-node-id="I1000:52890;828:15715">
                                      <p className="leading-[20px]">月预估交易额</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px relative" data-node-id="1000:52891" data-name="Value">
                                  <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-node-id="1000:52892" data-name="Content">
                                    <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#1e2436] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="1000:52893">
                                      <p className="leading-[20px] overflow-hidden text-ellipsis">50W-200W USD</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="content-stretch flex gap-[12px] items-start justify-self-stretch min-w-[340px] relative self-stretch shrink-0" data-node-id="1000:52899" data-name="descriptions-item">
                                <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-[136px]" data-node-id="1000:52900" data-name="label-item">
                                  <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-node-id="I1000:52900;828:15714" data-name="Label">
                                    <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] min-w-px not-italic relative text-[#646e87] text-[14px]" data-node-id="I1000:52900;828:15715">
                                      <p className="leading-[20px]">是否涉及换汇</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px relative" data-node-id="1000:52901" data-name="Value">
                                  <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-node-id="1000:52902" data-name="Content">
                                    <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#1e2436] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="1000:52903">
                                      <p className="leading-[20px] overflow-hidden text-ellipsis">涉及换汇</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="content-stretch flex gap-[12px] items-start justify-self-stretch min-w-[340px] relative self-stretch shrink-0" data-node-id="1000:52909" data-name="descriptions-item">
                                <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-[136px]" data-node-id="1000:52910" data-name="label-item">
                                  <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-node-id="I1000:52910;828:15714" data-name="Label">
                                    <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] min-w-px not-italic relative text-[#646e87] text-[14px]" data-node-id="I1000:52910;828:15715">
                                      <p className="leading-[20px]">卡类支付方式占比</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px relative" data-node-id="1000:52911" data-name="Value">
                                  <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-node-id="1000:52912" data-name="Content">
                                    <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#1e2436] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="1000:52913">
                                      <p className="leading-[20px] overflow-hidden text-ellipsis">20%</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="content-stretch flex gap-[12px] items-start justify-self-stretch min-w-[340px] relative self-stretch shrink-0" data-node-id="1000:52919" data-name="descriptions-item">
                                <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-[136px]" data-node-id="1000:52920" data-name="label-item">
                                  <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-node-id="I1000:52920;828:15714" data-name="Label">
                                    <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] min-w-px not-italic relative text-[#646e87] text-[14px]" data-node-id="I1000:52920;828:15715">
                                      <p className="leading-[20px]">收单目的</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px relative" data-node-id="1000:52921" data-name="Value">
                                  <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-node-id="1000:52922" data-name="Content">
                                    <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#1e2436] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="1000:52923">
                                      <p className="leading-[20px] overflow-hidden text-ellipsis">提供多样化的产品和服务</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="border border-[#eaebf1] border-solid content-stretch flex flex-col gap-[12px] items-start p-[16px] relative rounded-[6px] shrink-0 w-full" data-node-id="1000:52929">
                            <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#1e2436] text-[16px] text-ellipsis w-full whitespace-nowrap" data-node-id="1000:52930">
                              <p className="leading-[20px] overflow-hidden text-ellipsis">代发</p>
                            </div>
                            <div className="gap-x-[20px] gap-y-[12px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[repeat(3,fit-content(100%))] relative shrink-0 w-full" data-node-id="1000:52931">
                              <div className="content-stretch flex gap-[12px] items-start justify-self-stretch min-w-[320px] relative self-stretch shrink-0" data-node-id="1000:52932" data-name="descriptions-item">
                                <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-[136px]" data-node-id="1000:52933" data-name="label-item">
                                  <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-node-id="I1000:52933;828:15714" data-name="Label">
                                    <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] min-w-px not-italic relative text-[#646e87] text-[14px]" data-node-id="I1000:52933;828:15715">
                                      <p className="leading-[20px]">出款类型</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px relative" data-node-id="1000:52934" data-name="Value">
                                  <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-node-id="1000:52935" data-name="Content">
                                    <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#1e2436] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="1000:52936">
                                      <p className="leading-[20px] overflow-hidden text-ellipsis">toB , toC</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="content-stretch flex gap-[12px] items-start justify-self-stretch min-w-[320px] relative self-stretch shrink-0" data-node-id="1000:52942" data-name="descriptions-item">
                                <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-[136px]" data-node-id="1000:52943" data-name="label-item">
                                  <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-node-id="I1000:52943;828:15714" data-name="Label">
                                    <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] min-w-px not-italic relative text-[#646e87] text-[14px]" data-node-id="I1000:52943;828:15715">
                                      <p className="leading-[20px]">开通国家</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px relative" data-node-id="1000:52944" data-name="Value">
                                  <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-node-id="1000:52945" data-name="Content">
                                    <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#1e2436] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="1000:52946">
                                      <p className="leading-[20px] overflow-hidden text-ellipsis">新加坡，马来西亚等24个</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="content-stretch flex gap-[12px] items-start justify-self-stretch min-w-[320px] relative self-stretch shrink-0" data-node-id="1000:52952" data-name="descriptions-item">
                                <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-[136px]" data-node-id="1000:52953" data-name="label-item">
                                  <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-node-id="I1000:52953;828:15714" data-name="Label">
                                    <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] min-w-px not-italic relative text-[#646e87] text-[14px]" data-node-id="I1000:52953;828:15715">
                                      <p className="leading-[20px]">单笔金额区间</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px relative" data-node-id="1000:52954" data-name="Value">
                                  <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-node-id="1000:52955" data-name="Content">
                                    <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#1e2436] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="1000:52956">
                                      <p className="leading-[20px] overflow-hidden text-ellipsis">0-2,000 USD</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="content-stretch flex gap-[12px] items-start justify-self-stretch min-w-[320px] relative self-stretch shrink-0" data-node-id="1000:52962" data-name="descriptions-item">
                                <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-[136px]" data-node-id="1000:52963" data-name="label-item">
                                  <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-node-id="I1000:52963;828:15714" data-name="Label">
                                    <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] min-w-px not-italic relative text-[#646e87] text-[14px]" data-node-id="I1000:52963;828:15715">
                                      <p className="leading-[20px]">月预估交易额</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px relative" data-node-id="1000:52964" data-name="Value">
                                  <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-node-id="1000:52965" data-name="Content">
                                    <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#1e2436] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="1000:52966">
                                      <p className="leading-[20px] overflow-hidden text-ellipsis">50W-200W USD</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="content-stretch flex gap-[12px] items-start justify-self-stretch min-w-[320px] relative self-stretch shrink-0" data-node-id="1000:52972" data-name="descriptions-item">
                                <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-[136px]" data-node-id="1000:52973" data-name="label-item">
                                  <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-node-id="I1000:52973;828:15714" data-name="Label">
                                    <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] min-w-px not-italic relative text-[#646e87] text-[14px]" data-node-id="I1000:52973;828:15715">
                                      <p className="leading-[20px]">是否涉及换汇</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px relative" data-node-id="1000:52974" data-name="Value">
                                  <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-node-id="1000:52975" data-name="Content">
                                    <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#1e2436] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="1000:52976">
                                      <p className="leading-[20px] overflow-hidden text-ellipsis">涉及换汇</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="content-stretch flex gap-[12px] items-start justify-self-stretch min-w-[320px] relative self-stretch shrink-0" data-node-id="1000:52982" data-name="descriptions-item">
                                <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-[136px]" data-node-id="1000:52983" data-name="label-item">
                                  <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-node-id="I1000:52983;828:15714" data-name="Label">
                                    <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] min-w-px not-italic relative text-[#646e87] text-[14px]" data-node-id="I1000:52983;828:15715">
                                      <p className="leading-[20px]">出款频率</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px relative" data-node-id="1000:52984" data-name="Value">
                                  <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-node-id="1000:52985" data-name="Content">
                                    <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#1e2436] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="1000:52986">
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
                    <div ref={(element) => { sectionRefs.current.transaction = element; }} className="bg-white content-stretch flex flex-col gap-[16px] items-start relative rounded-[8px] shrink-0 w-full" data-node-id="1000:53001" data-name="内容区域">
                      <div className="relative shrink-0 w-full" data-node-id="1000:53002">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
                          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Semibold'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#1e2436] text-[18px] text-ellipsis whitespace-nowrap" data-node-id="1000:53004">
                            <p className="leading-[24px] overflow-hidden text-ellipsis">交易信息</p>
                          </div>
                        </div>
                      </div>
                      <div className="min-w-[320px] relative shrink-0 w-full" data-node-id="1000:53005" data-name="descriptions-item">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start min-w-[inherit] relative size-full">
                          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-start min-w-px relative" data-node-id="1000:53006">
                            <Table className="bg-white content-stretch flex flex-col items-start relative shrink-0 w-full">
                              <div className="bg-[#f8f8fb] border-[#f3f3f7] border-b border-solid content-stretch flex h-[36px] items-start overflow-clip relative rounded-[4px] shrink-0 w-full" data-node-id="1000:53646" data-name="row">
                                <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px px-[12px] py-[10px] relative" data-node-id="1000:53649" data-name="table-cell-header">
                                  <div className="content-stretch flex gap-[4px] h-full items-center relative shrink-0 w-[136px]" data-node-id="I1000:53649;567:4277" data-name="Content">
                                    <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#646e87] text-[12px] text-ellipsis whitespace-nowrap" data-node-id="I1000:53649;566:12188">
                                      <p className="leading-[18px]">国家/地区</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="content-stretch flex flex-[1_0_0] gap-[8px] h-full items-center min-w-[120px] px-[12px] py-[10px] relative" data-node-id="1000:53651" data-name="table-cell-header">
                                  <div className="content-stretch flex gap-[4px] h-full items-center relative shrink-0" data-node-id="I1000:53651;567:4143" data-name="Content">
                                    <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#646e87] text-[12px] text-ellipsis whitespace-nowrap" data-node-id="I1000:53651;566:13639">
                                      <p className="leading-[18px]">销售额占比</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="content-stretch flex flex-[1_0_0] gap-[8px] h-full items-center min-w-[120px] px-[12px] py-[10px] relative" data-node-id="1000:53656" data-name="table-cell-header">
                                  <div className="content-stretch flex gap-[4px] h-full items-center relative shrink-0" data-node-id="I1000:53656;567:4143" data-name="Content">
                                    <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#646e87] text-[12px] text-ellipsis whitespace-nowrap" data-node-id="I1000:53656;566:13639">
                                      <p className="leading-[18px]">物流天数</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="content-stretch flex flex-[1_0_0] gap-[8px] h-full items-center min-w-[120px] px-[12px] py-[10px] relative" data-node-id="1000:53657" data-name="table-cell-header">
                                  <div className="content-stretch flex gap-[4px] h-full items-center relative shrink-0" data-node-id="I1000:53657;567:4143" data-name="Content">
                                    <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#646e87] text-[12px] text-ellipsis whitespace-nowrap" data-node-id="I1000:53657;566:13639">
                                      <p className="leading-[18px]">发货地</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="border-[#f3f3f7] border-b border-solid content-stretch flex h-[44px] items-start min-h-[44px] relative shrink-0 w-full" data-node-id="1000:53658" data-name="row">
                                <div className="border-0 border-[#f3f3f7] border-solid content-stretch flex flex-[1_0_0] h-full items-center min-w-px px-[12px] py-[10px] relative" data-node-id="1000:53661" data-name="table-cell-body">
                                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] h-full items-start justify-center min-w-px relative" data-node-id="I1000:53661;2985:32162" data-name="Content">
                                    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I1000:53661;574:4502" data-name="Content">
                                      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#1e2436] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="I1000:53661;574:4503">
                                        <p className="leading-[20px] overflow-hidden text-ellipsis">日本</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="border-0 border-[#f3f3f7] border-solid content-stretch flex flex-[1_0_0] h-full items-center min-w-[120px] px-[12px] py-[10px] relative" data-node-id="1000:53663" data-name="table-cell-body">
                                  <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-node-id="I1000:53663;2985:32162" data-name="Content">
                                    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I1000:53663;574:4502" data-name="Content">
                                      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#1e2436] text-[14px] text-ellipsis" data-node-id="I1000:53663;574:4503">
                                        <p className="leading-[20px]">30%</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="border-0 border-[#f3f3f7] border-solid content-stretch flex flex-[1_0_0] h-full items-center min-w-[120px] px-[12px] py-[10px] relative" data-node-id="1000:53664" data-name="table-cell-body">
                                  <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-node-id="I1000:53664;2985:32162" data-name="Content">
                                    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I1000:53664;574:4502" data-name="Content">
                                      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#1e2436] text-[14px] text-ellipsis" data-node-id="I1000:53664;574:4503">
                                        <p className="leading-[20px]">2天</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="border-0 border-[#f3f3f7] border-solid content-stretch flex flex-[1_0_0] h-full items-center min-w-[120px] px-[12px] py-[10px] relative" data-node-id="1000:53665" data-name="table-cell-body">
                                  <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-node-id="I1000:53665;2985:32162" data-name="Content">
                                    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I1000:53665;574:4502" data-name="Content">
                                      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#1e2436] text-[14px] text-ellipsis" data-node-id="I1000:53665;574:4503">
                                        <p className="leading-[20px]">中国大陆</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="border-[#f3f3f7] border-b border-solid content-stretch flex h-[44px] items-start min-h-[44px] relative shrink-0 w-full" data-node-id="1000:53666" data-name="row">
                                <div className="border-0 border-[#f3f3f7] border-solid content-stretch flex flex-[1_0_0] h-full items-center min-w-px px-[12px] py-[10px] relative" data-node-id="1000:53669" data-name="table-cell-body">
                                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] h-full items-start justify-center min-w-px relative" data-node-id="I1000:53669;2985:32162" data-name="Content">
                                    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I1000:53669;574:4502" data-name="Content">
                                      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#1e2436] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="I1000:53669;574:4503">
                                        <p className="leading-[20px] overflow-hidden text-ellipsis">韩国</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="border-0 border-[#f3f3f7] border-solid content-stretch flex flex-[1_0_0] h-full items-center min-w-[120px] px-[12px] py-[10px] relative" data-node-id="1000:53671" data-name="table-cell-body">
                                  <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-node-id="I1000:53671;2985:32162" data-name="Content">
                                    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I1000:53671;574:4502" data-name="Content">
                                      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#1e2436] text-[14px] text-ellipsis" data-node-id="I1000:53671;574:4503">
                                        <p className="leading-[20px]">30%</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="border-0 border-[#f3f3f7] border-solid content-stretch flex flex-[1_0_0] h-full items-center min-w-[120px] px-[12px] py-[10px] relative" data-node-id="1000:53672" data-name="table-cell-body">
                                  <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-node-id="I1000:53672;2985:32162" data-name="Content">
                                    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I1000:53672;574:4502" data-name="Content">
                                      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#1e2436] text-[14px] text-ellipsis" data-node-id="I1000:53672;574:4503">
                                        <p className="leading-[20px]">1天</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="border-0 border-[#f3f3f7] border-solid content-stretch flex flex-[1_0_0] h-full items-center min-w-[120px] px-[12px] py-[10px] relative" data-node-id="1000:53673" data-name="table-cell-body">
                                  <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-node-id="I1000:53673;2985:32162" data-name="Content">
                                    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I1000:53673;574:4502" data-name="Content">
                                      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#1e2436] text-[14px] text-ellipsis" data-node-id="I1000:53673;574:4503">
                                        <p className="leading-[20px]">中国大陆</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="border-[#f3f3f7] border-b border-solid content-stretch flex h-[44px] items-start min-h-[44px] relative shrink-0 w-full" data-node-id="1000:53674" data-name="row">
                                <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-px px-[12px] py-[10px] relative" data-node-id="1000:53677" data-name="table-cell-body">
                                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] h-full items-start justify-center min-w-px relative" data-node-id="I1000:53677;2985:32162" data-name="Content">
                                    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I1000:53677;574:4502" data-name="Content">
                                      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#1e2436] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="I1000:53677;574:4503">
                                        <p className="leading-[20px] overflow-hidden text-ellipsis">印度尼西亚</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-[120px] px-[12px] py-[10px] relative" data-node-id="1000:53679" data-name="table-cell-body">
                                  <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-node-id="I1000:53679;2985:32162" data-name="Content">
                                    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I1000:53679;574:4502" data-name="Content">
                                      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#1e2436] text-[14px] text-ellipsis" data-node-id="I1000:53679;574:4503">
                                        <p className="leading-[20px]">30%</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-[120px] px-[12px] py-[10px] relative" data-node-id="1000:53680" data-name="table-cell-body">
                                  <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-node-id="I1000:53680;2985:32162" data-name="Content">
                                    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I1000:53680;574:4502" data-name="Content">
                                      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#1e2436] text-[14px] text-ellipsis" data-node-id="I1000:53680;574:4503">
                                        <p className="leading-[20px]">2天</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-[120px] px-[12px] py-[10px] relative" data-node-id="1000:53681" data-name="table-cell-body">
                                  <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-node-id="I1000:53681;2985:32162" data-name="Content">
                                    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I1000:53681;574:4502" data-name="Content">
                                      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Source_Han_Sans_CN:Regular'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#14191f] text-[14px] text-ellipsis" data-node-id="I1000:53681;574:4503">
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
                    <div ref={(element) => { sectionRefs.current.bank = element; }} className="bg-white content-stretch flex flex-col gap-[16px] items-start relative rounded-[8px] shrink-0 w-full" data-node-id="1000:53020" data-name="内容区域">
                      <div className="relative shrink-0 w-full" data-node-id="1000:53021">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
                          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Semibold'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#1e2436] text-[18px] text-ellipsis whitespace-nowrap" data-node-id="1000:53023">
                            <p className="leading-[24px] overflow-hidden text-ellipsis">银行卡信息</p>
                          </div>
                        </div>
                      </div>
                      <div className="relative shrink-0 w-full" data-node-id="1000:53024">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-start relative size-full">
                          <div className="bg-white border border-[#eaebf1] border-solid content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start justify-center min-h-[52px] min-w-px overflow-clip p-[16px] relative rounded-[6px]" data-node-id="1000:53025" data-name="对象标题栏">
                            <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-node-id="1000:53026">
                              <div className="bg-[#f8f8fb] content-stretch flex items-center justify-center p-[8px] relative rounded-[6px] shrink-0" data-node-id="1229:94089" data-name="图标">
                                <div className="relative shrink-0 size-[20px]" data-node-id="1229:94094" data-name="common-linear-card">
                                  <div className="absolute contents inset-[10.44%_4.16%_10.44%_4.17%]" data-node-id="I1229:94094;110:1604" data-name="icons/linear/location-card">
                                    <div className="absolute inset-[10.44%_4.16%_10.44%_4.17%]" data-node-id="I1229:94094;110:1605" data-name="card">
                                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCard} />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start leading-[0] min-w-px not-italic relative whitespace-nowrap" data-node-id="1000:53029">
                                <div className="flex flex-col font-['PingFang_SC:Medium'] h-[20px] justify-center overflow-hidden relative shrink-0 text-[#1e2436] text-[16px] text-ellipsis w-[278px]" data-node-id="1000:53030">
                                  <p className="leading-[20px] overflow-hidden text-ellipsis">中国银行 (香港)</p>
                                </div>
                                <div className="flex flex-col font-['PingFang_SC:Regular'] justify-center relative shrink-0 text-[#646e87] text-[14px]" data-node-id="1000:53031">
                                  <p className="leading-[20px]">9875 **** 1216</p>
                                </div>
                              </div>
                            </div>
                            <div className="content-start flex flex-wrap gap-[8px_24px] items-start relative shrink-0 w-full" data-node-id="1000:53032" data-name="间距12">
                              <div className="content-stretch flex flex-[1_0_0] items-start min-w-[360px] relative" data-node-id="1229:93795" data-name="descriptions-item">
                                <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-start min-w-px relative" data-node-id="1229:93796" data-name="左右布局插槽">
                                  <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-[136px]" data-node-id="1229:93797" data-name="label-item">
                                    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-node-id="I1229:93797;828:15714" data-name="Label">
                                      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] min-w-px not-italic relative text-[#646e87] text-[14px]" data-node-id="I1229:93797;828:15715">
                                        <p className="leading-[20px]">用途</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px relative" data-node-id="1229:93798" data-name="Value">
                                    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-node-id="1229:93799" data-name="Content">
                                      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] min-w-px not-italic relative text-[#1e2436] text-[14px]" data-node-id="1229:93800">
                                        <p className="leading-[20px]">结算, 充值, 提现</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="content-stretch flex flex-[1_0_0] items-start min-w-[360px] relative" data-node-id="1000:53049" data-name="descriptions-item">
                                <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-start min-w-px relative" data-node-id="1000:53050" data-name="左右布局插槽">
                                  <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-[136px]" data-node-id="1000:53051" data-name="label-item">
                                    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-node-id="I1000:53051;828:15714" data-name="Label">
                                      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] min-w-px not-italic relative text-[#646e87] text-[14px]" data-node-id="I1000:53051;828:15715">
                                        <p className="leading-[20px]">更新时间</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px relative" data-node-id="1000:53052" data-name="Value">
                                    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-node-id="1000:53053" data-name="Content">
                                      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] min-w-px not-italic relative text-[#1e2436] text-[14px]" data-node-id="1000:53054">
                                        <p className="leading-[20px]">2026-09-18</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="content-stretch flex flex-[1_0_0] items-start min-w-[360px] relative" data-node-id="1000:53060" data-name="descriptions-item">
                                <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-start min-w-px relative" data-node-id="1000:53061" data-name="左右布局插槽">
                                  <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-[136px]" data-node-id="1000:53062" data-name="label-item">
                                    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-node-id="I1000:53062;828:15714" data-name="Label">
                                      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] min-w-px not-italic relative text-[#646e87] text-[14px]" data-node-id="I1000:53062;828:15715">
                                        <p className="leading-[20px]">币种</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px relative" data-node-id="1000:53063" data-name="Value">
                                    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-node-id="1000:53064" data-name="Content">
                                      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] min-w-px not-italic relative text-[#1e2436] text-[14px]" data-node-id="1000:53065">
                                        <p className="leading-[20px]">USD</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="content-stretch flex flex-[1_0_0] items-start min-w-[360px] relative" data-node-id="1000:53071" data-name="descriptions-item">
                                <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-start min-w-px relative" data-node-id="1000:53072" data-name="左右布局插槽">
                                  <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-[136px]" data-node-id="1000:53073" data-name="label-item">
                                    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-node-id="I1000:53073;828:15714" data-name="Label">
                                      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] min-w-px not-italic relative text-[#646e87] text-[14px]" data-node-id="I1000:53073;828:15715">
                                        <p className="leading-[20px]">地区</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px relative" data-node-id="1000:53074" data-name="Value">
                                    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-node-id="1000:53075" data-name="Content">
                                      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] min-w-px not-italic relative text-[#1e2436] text-[14px]" data-node-id="1000:53076">
                                        <p className="leading-[20px]">中国香港</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="bg-white border border-[#eaebf1] border-solid content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start justify-center min-h-[52px] min-w-px overflow-clip p-[16px] relative rounded-[6px]" data-node-id="1000:53082" data-name="对象标题栏">
                            <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-node-id="1000:53083">
                              <div className="bg-[#f8f8fb] content-stretch flex items-center justify-center p-[8px] relative rounded-[6px] shrink-0" data-node-id="1229:94102" data-name="图标">
                                <div className="relative shrink-0 size-[20px]" data-node-id="1229:94103" data-name="common-linear-card">
                                  <div className="absolute contents inset-[10.44%_4.16%_10.44%_4.17%]" data-node-id="I1229:94103;110:1604" data-name="icons/linear/location-card">
                                    <div className="absolute inset-[10.44%_4.16%_10.44%_4.17%]" data-node-id="I1229:94103;110:1605" data-name="card">
                                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCard} />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start leading-[0] min-w-px not-italic relative whitespace-nowrap" data-node-id="1000:53086">
                                <div className="flex flex-col font-['PingFang_SC:Medium'] h-[20px] justify-center overflow-hidden relative shrink-0 text-[#1e2436] text-[16px] text-ellipsis w-[278px]" data-node-id="1000:53087">
                                  <p className="leading-[20px] overflow-hidden text-ellipsis">中国银行 (香港)</p>
                                </div>
                                <div className="flex flex-col font-['PingFang_SC:Regular'] justify-center relative shrink-0 text-[#646e87] text-[14px]" data-node-id="1000:53088">
                                  <p className="leading-[20px]">9875 **** 1216</p>
                                </div>
                              </div>
                            </div>
                            <div className="content-start flex flex-wrap gap-[8px_24px] items-start relative shrink-0 w-full" data-node-id="1000:53089" data-name="间距12">
                              <div className="content-stretch flex flex-[1_0_0] items-start min-w-[360px] relative" data-node-id="1229:93820" data-name="descriptions-item">
                                <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-start min-w-px relative" data-node-id="1229:93821" data-name="左右布局插槽">
                                  <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-[136px]" data-node-id="1229:93822" data-name="label-item">
                                    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-node-id="I1229:93822;828:15714" data-name="Label">
                                      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] min-w-px not-italic relative text-[#646e87] text-[14px]" data-node-id="I1229:93822;828:15715">
                                        <p className="leading-[20px]">币种</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px relative" data-node-id="1229:93823" data-name="Value">
                                    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-node-id="1229:93824" data-name="Content">
                                      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] min-w-px not-italic relative text-[#1e2436] text-[14px]" data-node-id="1229:93825">
                                        <p className="leading-[20px]">结算, 充值, 提现</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="content-stretch flex flex-[1_0_0] items-start min-w-[360px] relative" data-node-id="1000:53106" data-name="descriptions-item">
                                <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-start min-w-px relative" data-node-id="1000:53107" data-name="左右布局插槽">
                                  <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-[136px]" data-node-id="1000:53108" data-name="label-item">
                                    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-node-id="I1000:53108;828:15714" data-name="Label">
                                      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] min-w-px not-italic relative text-[#646e87] text-[14px]" data-node-id="I1000:53108;828:15715">
                                        <p className="leading-[20px]">更新时间</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px relative" data-node-id="1000:53109" data-name="Value">
                                    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-node-id="1000:53110" data-name="Content">
                                      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] min-w-px not-italic relative text-[#1e2436] text-[14px]" data-node-id="1000:53111">
                                        <p className="leading-[20px]">2026-09-18</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="content-stretch flex flex-[1_0_0] items-start min-w-[360px] relative" data-node-id="1000:53117" data-name="descriptions-item">
                                <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-start min-w-px relative" data-node-id="1000:53118" data-name="左右布局插槽">
                                  <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-[136px]" data-node-id="1000:53119" data-name="label-item">
                                    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-node-id="I1000:53119;828:15714" data-name="Label">
                                      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] min-w-px not-italic relative text-[#646e87] text-[14px]" data-node-id="I1000:53119;828:15715">
                                        <p className="leading-[20px]">币种</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px relative" data-node-id="1000:53120" data-name="Value">
                                    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-node-id="1000:53121" data-name="Content">
                                      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] min-w-px not-italic relative text-[#1e2436] text-[14px]" data-node-id="1000:53122">
                                        <p className="leading-[20px]">USD</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="content-stretch flex flex-[1_0_0] items-start min-w-[360px] relative" data-node-id="1000:53128" data-name="descriptions-item">
                                <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-start min-w-px relative" data-node-id="1000:53129" data-name="左右布局插槽">
                                  <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-[136px]" data-node-id="1000:53130" data-name="label-item">
                                    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-node-id="I1000:53130;828:15714" data-name="Label">
                                      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] min-w-px not-italic relative text-[#646e87] text-[14px]" data-node-id="I1000:53130;828:15715">
                                        <p className="leading-[20px]">地区</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px relative" data-node-id="1000:53131" data-name="Value">
                                    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-node-id="1000:53132" data-name="Content">
                                      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] min-w-px not-italic relative text-[#1e2436] text-[14px]" data-node-id="1000:53133">
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
                    <div ref={(element) => { sectionRefs.current.additional = element; }} className="bg-white content-stretch flex flex-col gap-[16px] items-start relative rounded-[8px] shrink-0 w-full" data-node-id="1000:53140" data-name="内容区域">
                      <div className="relative shrink-0 w-full" data-node-id="1000:53141">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
                          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Semibold'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#1e2436] text-[18px] text-ellipsis whitespace-nowrap" data-node-id="1000:53143">
                            <p className="leading-[24px] overflow-hidden text-ellipsis">补充信息</p>
                          </div>
                        </div>
                      </div>
                      <div className="relative shrink-0 w-full" data-node-id="1000:53144">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                          <div className="border border-[#e3e6ed] border-dashed content-stretch flex flex-col items-center justify-center px-[16px] py-[40px] relative rounded-[6px] shrink-0 w-full" data-node-id="1000:53145" data-name="upload-trigger">
                            <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0 w-full" data-node-id="1000:53146" data-name="text-wrapper">
                              <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] not-italic relative shrink-0 text-[#646e87] text-[14px] whitespace-nowrap" data-node-id="1000:53147">
                                <p className="leading-[20px]">暂无相关信息</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start shrink-0 sticky top-0" data-node-id="1000:53551">
                  <div className="content-stretch flex flex-col gap-[16px] items-start py-[8px] relative shrink-0 w-[100px]" data-node-id="1000:53552">
                    <div className="border-[#e3e6ed] border-l border-solid content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-node-id="1000:53554" data-name="锚点导航">
                      <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-node-id="I1000:53554;10790:12173" data-name="垂直布局">
                        {detailSections.map(({ id, label }) => {
                          const isActive = activeSection === id;
                          return (
                            <button
                              key={id}
                              className="content-stretch cursor-pointer flex gap-[8px] h-[20px] items-center min-w-[48px] pl-[12px] py-[2px] relative shrink-0 text-left w-full"
                              data-name="anchor-item-1st-level"
                              onClick={() => scrollToSection(id)}
                              type="button"
                            >
                              <span className={`[word-break:break-word] flex flex-col justify-center leading-[18px] relative shrink-0 text-[12px] whitespace-nowrap ${isActive ? "font-['PingFang_SC:Medium'] text-[#1e2436]" : "font-['PingFang_SC:Regular'] text-[#646e87]"}`}>
                                {label}
                              </span>
                              {isActive && <span className="-translate-y-1/2 absolute bg-[#1e2436] h-[20px] left-0 rounded-br-[2px] rounded-tr-[2px] top-1/2 w-[2px]" />}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bg-white border-[#f3f3f7] border-solid border-t bottom-0 content-stretch drop-shadow-[0px_-1px_0.5px_rgba(20,41,79,0.02),0px_-2px_2px_rgba(20,41,79,0.01)] flex gap-[8px] items-center justify-end left-0 px-[32px] py-[16px] right-0" data-node-id="1000:53555" data-name="按钮区">
            <div className="bg-white border border-[#c92a3e] border-solid content-stretch flex gap-[6px] h-[32px] items-center justify-center min-w-[56px] px-[10px] py-[6px] relative rounded-[6px] shrink-0" data-node-id="1000:53561" data-name="button">
              <div className="relative shrink-0 size-[16px]" data-node-id="I1000:53561;150:1171" data-name="common-linear-add">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCommonLinearCloseCircle} />
              </div>
              <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] not-italic relative shrink-0 text-[#c92a3e] text-[14px] text-center whitespace-nowrap" data-node-id="I1000:53561;150:1172">
                <p className="leading-[20px]">审批驳回</p>
              </div>
            </div>
            <div className="bg-[#0036fe] content-stretch flex gap-[6px] h-[32px] items-center justify-center min-w-[56px] px-[10px] py-[6px] relative rounded-[6px] shrink-0" data-node-id="1000:53563" data-name="button">
              <div className="relative shrink-0 size-[16px]" data-node-id="I1000:53563;150:1167" data-name="common-linear-add">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCommonLinearTickCircle} />
              </div>
              <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap" data-node-id="I1000:53563;150:1168">
                <p className="leading-[20px]">审批通过</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
