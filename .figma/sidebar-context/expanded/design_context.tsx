const assetPathPrefix = "./assets";
const imgProperty1Default = `${assetPathPrefix}/09b4d.svg`;
const imgVuesaxBulkReceiptMinus = `${assetPathPrefix}/d8cae.svg`;
const imgWalletAdd = `${assetPathPrefix}/9eada.svg`;
const imgCards = `${assetPathPrefix}/80ff0.svg`;
const imgVuesaxBulkSaveAdd = `${assetPathPrefix}/dbb98.svg`;
const imgRectangle1504Stroke = `${assetPathPrefix}/96426.svg`;
const imgBag2 = `${assetPathPrefix}/5816c.svg`;
const imgEllipse858 = `${assetPathPrefix}/464d6.svg`;
const imgProperty1Frame2147208044 = `${assetPathPrefix}/cc6ac.svg`;
const imgProperty1More = `${assetPathPrefix}/0159e.svg`;
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
const imgRectangle24 = `${assetPathPrefix}/983f2.png`;
const imgAvatar = `${assetPathPrefix}/aace2.png`;
const imgRectangle21 = `${assetPathPrefix}/2ee70.png`;
const imgRectangle22 = `${assetPathPrefix}/ddd2c.png`;
const imgRectangle23 = `${assetPathPrefix}/80b20.png`;
const imgRectangle25 = `${assetPathPrefix}/831af.png`;
const imgGroup = `${assetPathPrefix}/bd4dd.svg`;
const imgGroup1 = `${assetPathPrefix}/87fe3.svg`;
const imgVideoCircle = `${assetPathPrefix}/56994.svg`;
const imgGrid6 = `${assetPathPrefix}/17aa3.svg`;
const imgTaskSquare = `${assetPathPrefix}/bc535.svg`;
const imgCommonLinearMenu = `${assetPathPrefix}/c43e8.svg`;
const imgCommonLinearArrowRight1 = `${assetPathPrefix}/34335.svg`;
const imgSearchNormal = `${assetPathPrefix}/c7403.svg`;
const imgNotification = `${assetPathPrefix}/4d75d.svg`;
const imgCommonLinearMessageQuestion = `${assetPathPrefix}/36c6c.svg`;
const imgSidebarLinearSettings = `${assetPathPrefix}/ea483.svg`;
const imgCommonLinearArrowDown = `${assetPathPrefix}/e4899.svg`;
const imgRectangle7 = `${assetPathPrefix}/62a23.svg`;
const imgGroup2 = `${assetPathPrefix}/61a5f.svg`;
const imgPolygon2 = `${assetPathPrefix}/f2c57.svg`;
const imgPolygon3 = `${assetPathPrefix}/3d8fe.svg`;
const imgRefund = `${assetPathPrefix}/91567.svg`;
const imgCommonLinearArrowStraightRight = `${assetPathPrefix}/0569a.svg`;
const imgLine1 = `${assetPathPrefix}/2971d.svg`;
const imgVector11 = `${assetPathPrefix}/51c97.svg`;
const imgVector10 = `${assetPathPrefix}/72f65.svg`;
const imgCommonLinearArrowStraightRight1 = `${assetPathPrefix}/e28ee.svg`;
const imgSidebarLinearProfileUser = `${assetPathPrefix}/6761a.svg`;
const imgSidebarLinearSeal = `${assetPathPrefix}/055d9.svg`;
const imgCommonLinearBoxAdd = `${assetPathPrefix}/6302d.svg`;
const imgLine25 = `${assetPathPrefix}/0a0e1.svg`;
const imgDivider = `${assetPathPrefix}/ca91a.svg`;
const imgLine26 = `${assetPathPrefix}/3d165.svg`;

type Group8Props = {
  className?: string;
  property1?: "Default" | "receipt-minus" | "wallet-add" | "cards" | "save-add" | "bag-2" | "Frame 2147208044" | "more";
};

function Group8({ className, property1 = "Default" }: Group8Props) {
  const isBag2 = property1 === "bag-2";
  const isCards = property1 === "cards";
  const isFrame2147208044 = property1 === "Frame 2147208044";
  const isMore = property1 === "more";
  const isReceiptMinus = property1 === "receipt-minus";
  const isSaveAdd = property1 === "save-add";
  const isWalletAdd = property1 === "wallet-add";
  return (
    <div className={className || "relative size-[24px]"} id={isMore ? "node-1151_40598" : isFrame2147208044 ? "node-1151_40460" : isBag2 ? "node-1151_40376" : isSaveAdd ? "node-1139_39742" : isCards ? "node-1139_39700" : isWalletAdd ? "node-1139_39657" : isReceiptMinus ? "node-1139_39546" : "node-583_20468"}>
      {["Default", "Frame 2147208044", "more"].includes(property1) && <img alt="" className="absolute block inset-0 max-w-none size-full" src={isMore ? imgProperty1More : isFrame2147208044 ? imgProperty1Frame2147208044 : imgProperty1Default} />}
      {isReceiptMinus && (
        <div className="absolute contents inset-0" data-node-id="1139:39533" data-name="vuesax/bulk/receipt-minus">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVuesaxBulkReceiptMinus} />
        </div>
      )}
      {isWalletAdd && (
        <div className="absolute contents left-[2px] top-[0.44px]" data-node-id="1139:39641" data-name="vuesax/bulk/wallet-add">
          <div className="absolute inset-[1.84%_8.33%_8.33%_8.33%]" data-node-id="1139:39642" data-name="wallet-add">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgWalletAdd} />
          </div>
        </div>
      )}
      {isCards && (
        <div className="absolute contents inset-[12.5%_8.33%]" data-node-id="1139:39685" data-name="vuesax/bulk/cards">
          <div className="absolute inset-[12.5%_8.33%]" data-node-id="1139:39686" data-name="cards">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCards} />
          </div>
        </div>
      )}
      {isSaveAdd && (
        <div className="absolute contents inset-0" data-node-id="1139:39718" data-name="vuesax/bulk/save-add">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVuesaxBulkSaveAdd} />
        </div>
      )}
      {isBag2 && (
        <>
          <div className="absolute h-[7.518px] left-[7px] top-[2px] w-[10.04px]" data-node-id="1151:40373" data-name="Rectangle 1504 (Stroke)">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRectangle1504Stroke} />
          </div>
          <div className="absolute contents inset-[31.58%_13.16%_8.33%_13.15%]" data-node-id="1151:40355" data-name="vuesax/bulk/bag-2">
            <div className="absolute inset-[31.58%_13.16%_8.33%_13.15%]" data-node-id="1151:40356" data-name="bag-2">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBag2} />
            </div>
          </div>
          <div className="absolute left-[7px] size-[2.5px] top-[11px]" data-node-id="1151:40368">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse858} />
          </div>
          <div className="absolute left-[14.5px] size-[2.5px] top-[11px]" data-node-id="1151:40369">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse858} />
          </div>
        </>
      )}
    </div>
  );
}

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

export default function Component1() {
  return (
    <div className="bg-[#15171e] content-stretch flex flex-col items-start relative size-full" data-node-id="583:75068" data-name="首页">
      <div className="content-stretch flex flex-[1_0_0] items-start min-h-px relative w-full" data-node-id="583:75069">
        <div className="content-stretch flex flex-col h-full items-start px-[12px] relative shrink-0 w-[216px]" data-node-id="583:78903" data-name="Menu">
          <div className="content-stretch flex gap-[8px] items-center pb-[12px] pl-[6px] pr-[12px] pt-[16px] relative shrink-0 w-full" data-node-id="974:42855" data-name="logo">
            <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-node-id="974:42856">
              <div className="h-[24px] relative shrink-0 w-[90px]" data-node-id="974:42857" data-name="Logo">
                <div className="absolute contents inset-[8.33%_3.14%_8.33%_2.78%]" data-node-id="I974:42857;4343:5333" data-name="Group">
                  <div className="absolute inset-[8.33%_76.18%_8.33%_2.78%]" data-node-id="I974:42857;4343:5334" data-name="Group">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup} />
                  </div>
                  <div className="absolute inset-[29.7%_3.14%_14.2%_28.64%]" data-node-id="I974:42857;4343:5337" data-name="Group">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup1} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px overflow-x-clip overflow-y-auto pt-[8px] relative w-full" data-node-id="583:78911" data-name="Navigation">
            <div className="bg-[rgba(60,69,93,0.3)] content-stretch flex gap-[8px] h-[40px] items-center pr-[8px] relative rounded-[6px] shrink-0 w-full" data-node-id="583:78912" data-name="navigation-item-1st-level">
              <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-node-id="I583:78912;908:27495" data-name="Content">
                <div className="content-stretch flex items-center pl-[12px] pr-[8px] py-[8px] relative shrink-0" data-node-id="I583:78912;908:27496" data-name="Icon">
                  <div className="content-stretch flex items-center justify-center relative shrink-0" data-node-id="I583:78912;908:27497" data-name="尺寸=md">
                    <div className="overflow-clip relative shrink-0 size-[16px]" data-node-id="I583:78912;908:27497;114:779" data-name="sidebar-filled-home">
                      <div className="absolute contents inset-[5.43%_5.37%_5.42%_5.37%]" data-node-id="I583:78912;908:27497;114:779;110:4683" data-name="home">
                        <div className="absolute inset-[5.43%_5.37%_5.42%_5.37%]" data-node-id="I583:78912;908:27497;114:779;110:4684" data-name="video-circle">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVideoCircle} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[14px] text-ellipsis text-white whitespace-nowrap" data-node-id="I583:78912;908:27499">
                  <p className="leading-[20px] overflow-hidden text-ellipsis">首页</p>
                </div>
              </div>
            </div>
            <a className="content-stretch cursor-pointer flex gap-[8px] h-[40px] items-center pr-[8px] relative rounded-[8px] shrink-0 w-full" data-node-id="583:78913" data-name="navigation-item-1st-level">
              <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-node-id="I583:78913;908:27469" data-name="Content">
                <div className="content-stretch flex items-center justify-center pl-[12px] pr-[8px] py-[8px] relative shrink-0" data-node-id="I583:78913;908:27470" data-name="Icon">
                  <div className="content-stretch flex items-center justify-center relative shrink-0" data-node-id="I583:78913;908:27471" data-name="尺寸=md">
                    <div className="relative shrink-0 size-[16px]" data-node-id="I583:78913;908:27471;114:779" data-name="common-linear-grid">
                      <div className="absolute contents inset-[8.33%]" data-node-id="I583:78913;908:27471;114:779;14415:35668" data-name="vuesax/linear/grid-6">
                        <div className="absolute inset-[8.33%]" data-node-id="I583:78913;908:27471;114:779;14415:35669" data-name="grid-6">
                          <div className="absolute inset-[-5%]">
                            <img alt="" className="block max-w-none size-full" src={imgGrid6} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#bdc2d1] text-[14px] text-ellipsis text-left whitespace-nowrap" data-node-id="I583:78913;908:27472">
                  <p className="leading-[20px] overflow-hidden text-ellipsis">列表页</p>
                </div>
              </div>
            </a>
            <a className="content-stretch cursor-pointer flex gap-[8px] h-[40px] items-center pr-[8px] relative rounded-[8px] shrink-0 w-full" data-node-id="583:78914" data-name="navigation-item-1st-level">
              <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-node-id="I583:78914;908:27469" data-name="Content">
                <div className="content-stretch flex items-center justify-center pl-[12px] pr-[8px] py-[8px] relative shrink-0" data-node-id="I583:78914;908:27470" data-name="Icon">
                  <div className="content-stretch flex items-center justify-center relative shrink-0" data-node-id="I583:78914;908:27471" data-name="尺寸=md">
                    <div className="relative shrink-0 size-[16px]" data-node-id="I583:78914;908:27471;114:779" data-name="common-linear-file" />
                  </div>
                </div>
                <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#bdc2d1] text-[14px] text-ellipsis text-left whitespace-nowrap" data-node-id="I583:78914;908:27472">
                  <p className="leading-[20px] overflow-hidden text-ellipsis">详情页</p>
                </div>
              </div>
            </a>
            <a className="content-stretch cursor-pointer flex gap-[8px] h-[40px] items-center pr-[8px] relative rounded-[8px] shrink-0 w-full" data-node-id="583:78915" data-name="navigation-item-1st-level">
              <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-node-id="I583:78915;908:27469" data-name="Content">
                <div className="content-stretch flex items-center justify-center pl-[12px] pr-[8px] py-[8px] relative shrink-0" data-node-id="I583:78915;908:27470" data-name="Icon">
                  <div className="content-stretch flex items-center justify-center relative shrink-0" data-node-id="I583:78915;908:27471" data-name="尺寸=md">
                    <div className="relative shrink-0 size-[16px]" data-node-id="I583:78915;908:27471;114:779" data-name="common-linear-todo">
                      <div className="absolute inset-[4.17%]" data-node-id="I583:78915;908:27471;114:779;1290:14543" data-name="task-square">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgTaskSquare} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#bdc2d1] text-[14px] text-ellipsis text-left whitespace-nowrap" data-node-id="I583:78915;908:27472">
                  <p className="leading-[20px] overflow-hidden text-ellipsis">表单页</p>
                </div>
              </div>
            </a>
          </div>
          <div className="content-stretch flex flex-col items-start pb-[16px] pt-[12px] relative shrink-0 w-full" data-node-id="1043:55046">
            <div className="content-stretch flex h-[28px] items-center relative shrink-0 w-full" data-node-id="1043:55054" data-name="tabs-capsule">
              <div className="bg-[rgba(60,69,93,0.3)] content-stretch flex flex-[1_0_0] gap-[2px] items-center min-w-px overflow-clip p-[2px] relative rounded-[6px]" data-node-id="I1043:55054;1220:72564" data-name="tabs水平插槽">
                <div className="flex flex-[1_0_0] flex-row items-center self-stretch" data-node-id="I1043:55054;1220:72564;1043:55048">
                  <div className="bg-[#15171e] content-stretch flex flex-[1_0_0] gap-[4px] h-full items-center justify-center max-w-[160px] min-w-[48px] px-[12px] py-[3px] relative rounded-[4px] shadow-[0px_2px_4px_0px_rgba(18,50,108,0.01),0px_8px_16px_0px_rgba(18,50,108,0.02)]" data-name="tabs-capsule-cell">
                    <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[12px] text-center text-ellipsis text-white whitespace-nowrap" data-node-id="I1043:55054;1220:72564;1043:55048;1220:72548">
                      <p className="leading-[18px] overflow-hidden text-ellipsis">暗色风格</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-[1_0_0] flex-row items-center self-stretch" data-node-id="I1043:55054;1220:72564;1043:55049">
                  <a className="content-stretch cursor-pointer flex flex-[1_0_0] gap-[4px] h-full items-center justify-center max-w-[160px] min-w-[48px] px-[12px] py-[4px] relative rounded-[4px]" data-name="tabs-capsule-cell">
                    <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#bdc2d1] text-[12px] text-center text-ellipsis whitespace-nowrap" data-node-id="I1043:55054;1220:72564;1043:55049;1220:72538">
                      <p className="leading-[18px] overflow-hidden text-ellipsis">亮色风格</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#f0f1f7] content-stretch flex flex-[1_0_0] flex-col h-full items-start min-w-px overflow-clip relative" data-node-id="583:75095" data-name="右">
          <div className="absolute h-[283px] left-0 overflow-clip right-0 top-0" data-node-id="583:75096" data-name="背景">
            <div className="absolute bg-gradient-to-r from-[#f5f6fa] h-[227px] left-0 right-0 to-[#f3f3fa] top-0" data-node-id="583:75097" />
            <div className="absolute h-[130px] left-0 right-0 top-[97px]" data-node-id="583:75098">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle24} />
            </div>
          </div>
          <div className="border-[#e3e6ed] border-b border-solid content-stretch flex gap-[8px] h-[56px] items-center px-[32px] shrink-0 sticky top-0 w-full" data-node-id="820:28328" data-name="PageHeader">
            <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px relative" data-node-id="820:28329">
              <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-w-px relative" data-node-id="820:28331" data-name="面包屑">
                <div className="content-stretch flex items-center justify-center p-[5px] relative rounded-[6px] shrink-0" data-node-id="1833:44830">
                  <div className="relative shrink-0 size-[14px]" data-node-id="1833:44831" data-name="common-linear-menu">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCommonLinearMenu} />
                  </div>
                </div>
                <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#646e87] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="820:28333">
                  <p className="leading-[20px] overflow-hidden text-ellipsis">首页</p>
                </div>
                <div className="relative shrink-0 size-[12px]" data-node-id="820:28334" data-name="common-linear-arrow-right">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCommonLinearArrowRight1} />
                </div>
                <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#1e2436] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="820:28337">
                  <p className="leading-[20px] overflow-hidden text-ellipsis">首页</p>
                </div>
              </div>
              <button className="bg-[#eaebf1] content-stretch cursor-pointer flex gap-[4px] h-[32px] items-center px-[12px] py-[6px] relative rounded-[6px] shrink-0 w-[140px]" data-node-id="820:28338" data-name="input-search">
                <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-node-id="I820:28338;654:20563" data-name="Content">
                  <div className="relative shrink-0 size-[16px]" data-node-id="I820:28338;654:20564" data-name="common-linear-search">
                    <div className="absolute inset-[4.17%]" data-node-id="I820:28338;654:20564;110:1324" data-name="search-normal">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSearchNormal} />
                    </div>
                  </div>
                  <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#646e87] text-[14px] text-ellipsis text-left whitespace-nowrap" data-node-id="I820:28338;654:20565">
                    <p className="leading-[20px] overflow-hidden text-ellipsis">搜索 (⌘+K)</p>
                  </div>
                </div>
              </button>
            </div>
            <div className="content-stretch flex gap-[8px] h-full items-center relative shrink-0" data-node-id="820:28356" data-name="功能区">
              <div className="bg-[#eaebf1] content-stretch flex gap-[8px] items-center justify-center p-[6px] relative rounded-[6px] shrink-0 size-[32px]" data-node-id="820:28360" data-name="Icon-item">
                <div className="relative shrink-0 size-[16px]" data-node-id="820:28361" data-name="common-linear-notification">
                  <div className="absolute inset-[3.92%_12.43%_3.92%_12.39%]" data-node-id="I820:28361;110:1422" data-name="notification">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgNotification} />
                  </div>
                </div>
              </div>
              <div className="bg-[#eaebf1] content-stretch flex gap-[8px] items-center justify-center p-[6px] relative rounded-[6px] shrink-0 size-[32px]" data-node-id="820:28363" data-name="Icon-item">
                <div className="relative shrink-0 size-[16px]" data-node-id="820:28364" data-name="common-linear-message-question">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCommonLinearMessageQuestion} />
                </div>
              </div>
              <div className="bg-[#eaebf1] content-stretch flex gap-[4px] items-center justify-center p-[6px] relative rounded-[6px] shrink-0 size-[32px]" data-node-id="820:28372" data-name="Icon-item">
                <div className="relative shrink-0 size-[16px]" data-node-id="820:28373" data-name="sidebar-linear-settings">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSidebarLinearSettings} />
                </div>
              </div>
              <div className="bg-[#eaebf1] content-stretch flex gap-[4px] items-center pl-[4px] pr-[6px] py-[4px] relative rounded-[16px] shrink-0" data-node-id="820:28381" data-name="Icon-item">
                <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="I820:28381;4358:4272" data-name="个人">
                  <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 size-[24px]" data-node-id="I820:28381;1740:15931" data-name="avatar">
                    <div className="flex-[1_0_0] h-full min-w-px relative rounded-[32px]" data-node-id="I820:28381;1740:15931;509:320" data-name="Avatar">
                      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[32px] size-full" src={imgAvatar} />
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="I820:28381;4358:3405" data-name="文本信息">
                    <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#3c455d] text-[12px] text-center text-ellipsis whitespace-nowrap" data-node-id="I820:28381;4358:3406">
                      <p className="leading-[18px] overflow-hidden text-ellipsis">张三</p>
                    </div>
                  </div>
                </div>
                <div className="relative shrink-0 size-[16px]" data-node-id="I820:28381;1740:15932" data-name="common-linear-arrow-down">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCommonLinearArrowDown} />
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[20px] items-start min-h-px overflow-x-clip overflow-y-auto px-[32px] py-[20px] relative w-full" data-node-id="583:75136">
            <div className="content-stretch flex gap-[16px] items-center relative rounded-[4px] shrink-0 w-full" data-node-id="583:75137">
              <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start justify-center min-w-px relative" data-node-id="583:75138">
                <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Semibold'] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#1e2436] text-[24px] w-[min-content]" data-node-id="583:75139">
                  <p className="leading-[32px]">上午好，李闪闪 👏</p>
                </div>
              </div>
            </div>
            <div className="gap-x-[12px] gap-y-[12px] grid grid-cols-[__minmax(0,0.67fr)_minmax(0,0.33fr)] grid-rows-[repeat(1,fit-content(100%))] pb-[20px] relative shrink-0 w-full" data-node-id="624:95976">
              <div className="content-stretch flex flex-col gap-[12px] items-start justify-self-stretch relative self-start shrink-0" data-node-id="624:95977">
                <div className="bg-white border border-[#edeef3] border-solid content-stretch drop-shadow-[0px_1px_0.5px_rgba(20,41,79,0.02),0px_2px_2px_rgba(20,41,79,0.01)] flex flex-col gap-[16px] items-start p-[21px] relative rounded-[8px] shrink-0 w-full" data-node-id="624:95978" data-name="目标绩效">
                  <div className="relative shrink-0 w-full" data-node-id="624:95979" data-name="标题">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-start relative size-full">
                      <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-node-id="624:95980" data-name="标题">
                        <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="624:95981" data-name="标题">
                          <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Semibold'] justify-center leading-[0] not-italic relative shrink-0 text-[#1e2436] text-[18px] whitespace-nowrap" data-node-id="624:95982">
                            <p className="leading-[24px]">目标绩效</p>
                          </div>
                        </div>
                        <div className="content-center flex flex-wrap gap-[2px_8px] items-center relative shrink-0" data-node-id="624:95989" data-name="描述">
                          <div className="bg-[#fef5e0] border border-[#feeabb] border-solid content-stretch flex gap-[2px] items-center px-[6px] py-px relative rounded-[9999px] shrink-0" data-node-id="1268:41698">
                            <div className="overflow-clip relative shrink-0 size-[14px]" data-node-id="1268:41701" data-name="排名">
                              <div className="absolute bottom-0 contents left-0 top-0" data-node-id="I1268:41701;636:16010">
                                <div className="absolute inset-[66.67%_16.67%_0_16.67%]" data-node-id="I1268:41701;636:16011">
                                  <div className="absolute inset-[0_0_7.71%_0]">
                                    <img alt="" className="block max-w-none size-full" src={imgRectangle7} />
                                  </div>
                                </div>
                                <div className="absolute inset-[2.58%_6.7%]">
                                  <img alt="" className="block max-w-none size-full" src={imgGroup2} />
                                </div>
                                <div className="-translate-x-1/2 absolute aspect-[18/18] bottom-[10.42%] left-1/2 top-[10.42%]" data-node-id="I1268:41701;636:16013">
                                  <div className="absolute inset-[1.63%_5.65%_-0.48%_5.65%]">
                                    <img alt="" className="block max-w-none size-full" src={imgPolygon2} />
                                  </div>
                                </div>
                                <div className="absolute inset-[16.67%]" data-node-id="I1268:41701;636:16014">
                                  <div className="absolute inset-[1.93%_6.7%]">
                                    <img alt="" className="block max-w-none size-full" src={imgPolygon3} />
                                  </div>
                                </div>
                                <div className="[word-break:break-word] absolute flex flex-col font-['Noto_Sans:Bold'] font-bold inset-[29.17%_33.33%] justify-center leading-[0] text-[#c47b14] text-[8.17px]" data-node-id="I1268:41701;636:16015" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
                                  <p className="leading-[11.667px]">1</p>
                                </div>
                              </div>
                            </div>
                            <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] not-italic relative shrink-0 text-[#c47b14] text-[12px] whitespace-nowrap" data-node-id="1268:41702">
                              <p className="leading-[18px]">排行1/15</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex h-[28px] items-center relative shrink-0" data-node-id="624:96011" data-name="tabs-capsule">
                        <div className="bg-[#f6f6f9] border-0 border-[#eaebf1] border-solid content-stretch flex gap-[2px] h-full items-center overflow-clip p-[1.5px] relative rounded-[6px] shrink-0" data-node-id="I624:96011;522:9341" data-name="tabs水平插槽">
                          <div className="bg-white content-stretch flex gap-[4px] h-full items-center justify-center max-w-[160px] min-w-[48px] px-[8px] py-[3px] relative rounded-[4px] shrink-0" data-node-id="I624:96011;522:9341;624:96004" data-name="tabs-capsule-cell">
                            <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#1e2436] text-[12px] text-center text-ellipsis whitespace-nowrap" data-node-id="I624:96011;522:9341;624:96004;522:9597">
                              <p className="leading-[18px] overflow-hidden text-ellipsis">本季度</p>
                            </div>
                          </div>
                          <div className="content-stretch flex gap-[4px] h-full items-center justify-center max-w-[160px] min-w-[48px] px-[8px] py-[3px] relative rounded-[4px] shrink-0" data-node-id="I624:96011;522:9341;624:96005" data-name="tabs-capsule-cell">
                            <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#646e87] text-[12px] text-ellipsis whitespace-nowrap" data-node-id="I624:96011;522:9341;624:96005;522:9565">
                              <p className="leading-[18px] overflow-hidden text-ellipsis">本财年</p>
                            </div>
                          </div>
                          <div className="content-stretch flex gap-[4px] h-full items-center justify-center max-w-[160px] min-w-[48px] px-[8px] py-[3px] relative rounded-[4px] shrink-0" data-node-id="I624:96011;522:9341;624:96006" data-name="tabs-capsule-cell">
                            <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#646e87] text-[12px] text-ellipsis whitespace-nowrap" data-node-id="I624:96011;522:9341;624:96006;522:9565">
                              <p className="leading-[18px] overflow-hidden text-ellipsis">Q1季度</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative shrink-0 w-full" data-node-id="624:96143">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                      <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-node-id="624:96144">
                        <div className="bg-white border border-[#eaebf1] border-solid content-stretch flex flex-[1_0_0] gap-[8px] items-end min-w-[152px] p-[16px] relative rounded-[8px]" data-node-id="624:96245" data-name="绩效卡片">
                          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative" data-node-id="624:96246">
                            <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="624:96247" data-name="标题">
                              <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] not-italic relative shrink-0 text-[#3c455d] text-[14px] whitespace-nowrap" data-node-id="624:96248">
                                <p className="leading-[20px]">整体达成 TPV</p>
                              </div>
                            </div>
                            <div className="content-end flex flex-wrap gap-[2px_8px] items-end relative shrink-0 w-full" data-node-id="624:96250" data-name="金额">
                              <div className="content-stretch flex gap-[2px] items-end relative shrink-0" data-node-id="624:96251">
                                <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#1e2436] text-[28px] whitespace-nowrap" data-node-id="624:96252">
                                  <p className="leading-[32px]">1000.80</p>
                                </div>
                                <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-node-id="624:96253">
                                  <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#1e2436] text-[28px] w-full" data-node-id="624:96254">
                                    <p className="leading-[32px]">{`w `}</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-node-id="624:96268">
                              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="624:96269">
                                <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-node-id="624:96270">
                                  <div className="content-center flex flex-wrap gap-[2px_8px] items-center relative shrink-0 w-full" data-node-id="624:96271" data-name="涨跌幅">
                                    <div className="[word-break:break-word] content-stretch flex gap-[4px] items-center leading-[0] not-italic relative shrink-0 text-[#3c455d] text-[12px] whitespace-nowrap" data-node-id="624:96272">
                                      <div className="flex flex-col font-['PingFang_SC:Regular'] justify-center relative shrink-0" data-node-id="624:96273">
                                        <p className="leading-[18px]">目标</p>
                                      </div>
                                      <div className="flex flex-col font-['Inter:Medium'] font-medium justify-center relative shrink-0" data-node-id="624:96274">
                                        <p className="leading-[18px]">1800.00W</p>
                                      </div>
                                    </div>
                                    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="624:96275">
                                      <div className="[word-break:break-word] content-stretch flex gap-[4px] items-center leading-[0] not-italic relative shrink-0 text-[#3c455d] text-[12px] whitespace-nowrap" data-node-id="624:96276">
                                        <div className="flex flex-col font-['PingFang_SC:Regular'] justify-center relative shrink-0" data-node-id="624:96277">
                                          <p className="leading-[18px]">完成率</p>
                                        </div>
                                        <div className="flex flex-col font-['Inter:Medium'] font-medium justify-center relative shrink-0" data-node-id="624:96278">
                                          <p className="leading-[18px]">70.5%</p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="bg-[#f3f3f7] content-stretch flex flex-col h-[6px] items-start pl-px pr-[140px] relative rounded-[11px] shrink-0 w-[170px]" data-node-id="624:96289">
                                <div className="bg-[#0036fe] h-[6px] relative rounded-[11px] shrink-0 w-[127px]" data-node-id="624:96290" />
                              </div>
                            </div>
                          </div>
                          <div className="h-[90px] relative shrink-0 w-[118.96px]" data-node-id="624:96325" data-name="Refund">
                            <div className="absolute inset-[-0.56%_-0.42%_0_-0.42%]">
                              <img alt="" className="block max-w-none size-full" src={imgRefund} />
                            </div>
                          </div>
                        </div>
                        <div className="bg-white border border-[#eaebf1] border-solid content-stretch flex flex-[1_0_0] gap-[8px] items-end min-w-[152px] p-[16px] relative rounded-[8px]" data-node-id="624:96328" data-name="绩效卡片">
                          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative" data-node-id="624:96329">
                            <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="624:96330" data-name="标题">
                              <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] not-italic relative shrink-0 text-[#3c455d] text-[14px] whitespace-nowrap" data-node-id="624:96331">
                                <p className="leading-[20px]">新拓达成 TPV</p>
                              </div>
                            </div>
                            <div className="content-end flex flex-wrap gap-[2px_8px] items-end relative shrink-0 w-full" data-node-id="624:96333" data-name="金额">
                              <div className="content-stretch flex gap-[2px] items-end relative shrink-0" data-node-id="624:96334">
                                <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#1e2436] text-[28px] whitespace-nowrap" data-node-id="624:96335">
                                  <p className="leading-[32px]">700.00</p>
                                </div>
                                <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-node-id="624:96336">
                                  <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#1e2436] text-[28px] w-full" data-node-id="624:96337">
                                    <p className="leading-[32px]">{`w `}</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-node-id="624:96351">
                              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="624:96352">
                                <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-node-id="624:96353">
                                  <div className="content-center flex flex-wrap gap-[2px_8px] items-center relative shrink-0 w-full" data-node-id="624:96354" data-name="涨跌幅">
                                    <div className="[word-break:break-word] content-stretch flex gap-[4px] items-center leading-[0] not-italic relative shrink-0 text-[#3c455d] text-[12px] whitespace-nowrap" data-node-id="624:96355">
                                      <div className="flex flex-col font-['PingFang_SC:Regular'] justify-center relative shrink-0" data-node-id="624:96356">
                                        <p className="leading-[18px]">目标</p>
                                      </div>
                                      <div className="flex flex-col font-['Inter:Medium'] font-medium justify-center relative shrink-0" data-node-id="624:96357">
                                        <p className="leading-[18px]">1800.00W</p>
                                      </div>
                                    </div>
                                    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="624:96358">
                                      <div className="[word-break:break-word] content-stretch flex gap-[4px] items-center leading-[0] not-italic relative shrink-0 text-[#3c455d] text-[12px] whitespace-nowrap" data-node-id="624:96359">
                                        <div className="flex flex-col font-['PingFang_SC:Regular'] justify-center relative shrink-0" data-node-id="624:96360">
                                          <p className="leading-[18px]">完成率</p>
                                        </div>
                                        <div className="flex flex-col font-['Inter:Medium'] font-medium justify-center relative shrink-0" data-node-id="624:96361">
                                          <p className="leading-[18px]">30.2%</p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="bg-[#f3f3f7] content-stretch flex flex-col h-[6px] items-start pl-px pr-[140px] relative rounded-[11px] shrink-0 w-[170px]" data-node-id="624:96372">
                                <div className="bg-[#e5485d] h-[6px] relative rounded-[11px] shrink-0 w-[43px]" data-node-id="624:96373" />
                              </div>
                            </div>
                          </div>
                          <div className="h-[90px] relative shrink-0 w-[118.96px]" data-node-id="624:96408" data-name="Refund">
                            <div className="absolute inset-[-0.56%_-0.42%_0_-0.42%]">
                              <img alt="" className="block max-w-none size-full" src={imgRefund} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white border border-[#edeef3] border-solid content-stretch drop-shadow-[0px_1px_0.5px_rgba(20,41,79,0.02),0px_2px_2px_rgba(20,41,79,0.01)] flex flex-col gap-[16px] items-start p-[20px] relative rounded-[8px] shrink-0 w-full" data-node-id="624:96944">
                  <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-node-id="624:96945">
                    <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Semibold'] justify-center leading-[0] min-w-px not-italic relative text-[#1e2436] text-[18px]" data-node-id="624:96946">
                      <p className="leading-[24px]">客户数据</p>
                    </div>
                    <div className="content-stretch flex gap-[4px] items-center justify-center px-[2px] relative rounded-[4px] shrink-0" data-node-id="624:96947" data-name="link">
                      <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] not-italic relative shrink-0 text-[#646e87] text-[12px] whitespace-nowrap" data-node-id="I624:96947;1341:12603">
                        <p className="leading-[18px]">更多</p>
                      </div>
                      <div className="relative shrink-0 size-[12px]" data-node-id="I624:96947;1341:12605" data-name="common-linear-arrow-right">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCommonLinearArrowStraightRight} />
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-node-id="624:96948">
                    <div className="content-center flex flex-wrap gap-[20px] items-center relative shrink-0 w-full" data-node-id="624:102444">
                      <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-start min-w-[80px] overflow-clip relative rounded-[4px]" data-node-id="624:102445" data-name="数据统计卡片">
                        <div className="flex-[1_0_0] min-w-px relative" data-node-id="624:102448">
                          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
                            <div className="content-stretch flex items-center relative shrink-0 w-full" data-node-id="624:102449" data-name="标题">
                              <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-w-px relative" data-node-id="624:102450" data-name="标题">
                                <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] not-italic relative shrink-0 text-[#3c455d] text-[14px] whitespace-nowrap" data-node-id="624:102451">
                                  <p className="leading-[18px]">全部客户</p>
                                </div>
                              </div>
                            </div>
                            <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#1e2436] text-[20px] whitespace-nowrap" data-node-id="624:102453">
                              <p className="leading-[30px]">123</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-start min-w-[80px] overflow-clip relative rounded-[4px]" data-node-id="624:102454" data-name="数据统计卡片">
                        <div className="flex-[1_0_0] min-w-px relative" data-node-id="624:102457">
                          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
                            <div className="content-stretch flex items-center relative shrink-0 w-full" data-node-id="624:102458" data-name="标题">
                              <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-w-px relative" data-node-id="624:102459" data-name="标题">
                                <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] not-italic relative shrink-0 text-[#3c455d] text-[14px] whitespace-nowrap" data-node-id="624:102460">
                                  <p className="leading-[18px]">初步接触</p>
                                </div>
                              </div>
                            </div>
                            <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#1e2436] text-[20px] w-full" data-node-id="624:102462">
                              <p className="leading-[30px]">8</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-start min-w-[80px] overflow-clip relative rounded-[4px]" data-node-id="624:102463" data-name="数据统计卡片">
                        <div className="flex-[1_0_0] min-w-px relative" data-node-id="624:102466">
                          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
                            <div className="content-stretch flex items-center relative shrink-0 w-full" data-node-id="624:102467" data-name="标题">
                              <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-w-px relative" data-node-id="624:102468" data-name="标题">
                                <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] not-italic relative shrink-0 text-[#3c455d] text-[14px] whitespace-nowrap" data-node-id="624:102469">
                                  <p className="leading-[18px]">意向沟通</p>
                                </div>
                              </div>
                            </div>
                            <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#1e2436] text-[20px] w-full" data-node-id="624:102471">
                              <p className="leading-[30px]">10</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-start min-w-[80px] overflow-clip relative rounded-[4px]" data-node-id="624:102472" data-name="数据统计卡片">
                        <div className="flex-[1_0_0] min-w-px relative" data-node-id="624:102475">
                          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
                            <div className="content-stretch flex items-center relative shrink-0 w-full" data-node-id="624:102476" data-name="标题">
                              <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-w-px relative" data-node-id="624:102477" data-name="标题">
                                <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] not-italic relative shrink-0 text-[#3c455d] text-[14px] whitespace-nowrap" data-node-id="624:102478">
                                  <p className="leading-[18px]">入驻签约</p>
                                </div>
                              </div>
                            </div>
                            <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#1e2436] text-[20px] w-full" data-node-id="624:102480">
                              <p className="leading-[30px]">4</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-start min-w-[80px] overflow-clip relative rounded-[4px]" data-node-id="624:102481" data-name="数据统计卡片">
                        <div className="flex-[1_0_0] min-w-px relative" data-node-id="624:102484">
                          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
                            <div className="content-stretch flex items-center relative shrink-0 w-full" data-node-id="624:102485" data-name="标题">
                              <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-w-px relative" data-node-id="624:102486" data-name="标题">
                                <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] not-italic relative shrink-0 text-[#3c455d] text-[14px] whitespace-nowrap" data-node-id="624:102487">
                                  <p className="leading-[18px]">运营增长</p>
                                </div>
                              </div>
                            </div>
                            <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#1e2436] text-[20px] w-full" data-node-id="624:102489">
                              <p className="leading-[30px]">70</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-start min-w-[80px] overflow-clip relative rounded-[4px]" data-node-id="624:102490" data-name="数据统计卡片">
                        <div className="flex-[1_0_0] min-w-px relative" data-node-id="624:102493">
                          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
                            <div className="content-stretch flex items-center relative shrink-0 w-full" data-node-id="624:102494" data-name="标题">
                              <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-w-px relative" data-node-id="624:102495" data-name="标题">
                                <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] not-italic relative shrink-0 text-[#3c455d] text-[14px] whitespace-nowrap" data-node-id="624:102496">
                                  <p className="leading-[18px]">沉睡流失</p>
                                </div>
                              </div>
                            </div>
                            <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#1e2436] text-[20px] w-full" data-node-id="624:102498">
                              <p className="leading-[30px]">8</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col h-[120px] items-start relative shrink-0 w-full" data-node-id="624:97004">
                      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px relative w-full" data-node-id="624:97006">
                        <div className="flex-[1_0_0] min-h-px relative w-full" data-node-id="624:97007" data-name="Line">
                          <div className="absolute content-stretch flex gap-[4px] inset-[3.31%_0.66px_3.31%_0] items-end" data-node-id="624:97008" data-name="Line">
                            <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-end min-w-px relative" data-node-id="624:97016" data-name="X & Line">
                              <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-start justify-end min-h-px relative w-full" data-node-id="624:97017" data-name="Line">
                                <div className="h-[14px] relative shrink-0 w-full" data-node-id="624:97028">
                                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLine1} />
                                </div>
                              </div>
                              <div className="[word-break:break-word] content-stretch flex font-['Poppins:Regular'] font-normal items-start leading-[14px] relative shrink-0 text-[#646e87] text-[10px] w-full" data-node-id="624:97030" data-name="X">
                                <p className="flex-[1_0_0] min-w-px relative" data-node-id="624:97031">
                                  1月
                                </p>
                                <p className="flex-[1_0_0] min-w-px relative" data-node-id="624:97032">
                                  1月
                                </p>
                                <p className="flex-[1_0_0] min-w-px relative" data-node-id="624:97033">
                                  1月
                                </p>
                                <p className="flex-[1_0_0] min-w-px relative" data-node-id="624:97034">
                                  1月
                                </p>
                                <p className="flex-[1_0_0] min-w-px relative" data-node-id="624:97035">
                                  1月
                                </p>
                                <p className="flex-[1_0_0] min-w-px relative" data-node-id="624:97036">
                                  1月
                                </p>
                                <p className="flex-[1_0_0] min-w-px relative" data-node-id="624:97037">
                                  1月
                                </p>
                                <p className="flex-[1_0_0] min-w-px relative" data-node-id="624:97038">
                                  1月
                                </p>
                                <p className="flex-[1_0_0] min-w-px relative" data-node-id="624:97039">
                                  1月
                                </p>
                                <p className="flex-[1_0_0] min-w-px relative" data-node-id="624:97040">
                                  1月
                                </p>
                                <p className="flex-[1_0_0] min-w-px relative" data-node-id="624:97041">
                                  1月
                                </p>
                                <p className="flex-[1_0_0] min-w-px relative" data-node-id="624:97042">
                                  1月
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="absolute contents left-0 right-[0.16px] top-[9px]" data-node-id="624:97047" data-name="Refund">
                            <div className="absolute h-[88px] left-0 right-[0.16px] top-[9px]" data-node-id="624:97048">
                              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector11} />
                            </div>
                            <div className="absolute h-[45px] left-0 right-[0.16px] top-[9px]" data-node-id="624:97049">
                              <div className="absolute inset-[-2.22%_-0.14%]">
                                <img alt="" className="block max-w-none size-full" src={imgVector10} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="absolute content-stretch flex gap-[4px] items-center px-[2px] right-[0.16px] top-0" data-node-id="624:97060" data-name="Columns / Legend">
                        <div className="bg-[#0036fe] relative rounded-[6px] shrink-0 size-[6px]" data-node-id="I624:97060;15733:39415" />
                        <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] not-italic relative shrink-0 text-[#3c455d] text-[12px] whitespace-nowrap" data-node-id="I624:97060;11443:95993">
                          <p className="leading-[18px]">客户走势</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white border border-[#edeef3] border-solid content-stretch drop-shadow-[0px_1px_0.5px_rgba(20,41,79,0.02),0px_2px_2px_rgba(20,41,79,0.01)] flex flex-col gap-[16px] items-start p-[21px] relative rounded-[8px] shrink-0 w-full" data-node-id="624:97061" data-name="客户表现">
                  <div className="relative shrink-0 w-full" data-node-id="624:97062">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
                      <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-w-px relative" data-node-id="624:97063">
                        <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Semibold'] justify-center leading-[0] not-italic relative shrink-0 text-[#1e2436] text-[18px] whitespace-nowrap" data-node-id="624:97064">
                          <p className="leading-[24px]">客户表现</p>
                        </div>
                      </div>
                      <div className="content-stretch flex gap-[4px] items-center justify-center px-[2px] relative rounded-[4px] shrink-0" data-node-id="624:97086" data-name="link">
                        <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] not-italic relative shrink-0 text-[#646e87] text-[12px] whitespace-nowrap" data-node-id="I624:97086;1341:12603">
                          <p className="leading-[18px]">更多</p>
                        </div>
                        <div className="relative shrink-0 size-[12px]" data-node-id="I624:97086;1341:12605" data-name="common-linear-arrow-right">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCommonLinearArrowStraightRight} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative shrink-0 w-full" data-node-id="1301:103702">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[10px] items-start relative size-full">
                      <Table className="bg-white content-stretch flex flex-col items-start relative shrink-0 w-full">
                        <div className="bg-[#f8f8fb] border-[#f6f6f9] border-b border-solid content-stretch flex h-[36px] items-start overflow-clip relative rounded-[4px] shrink-0 w-full" data-node-id="1301:103722" data-name="row">
                          <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-[200px] px-[12px] py-[10px] relative" data-node-id="1301:103725" data-name="table-cell-header">
                            <div className="content-stretch flex gap-[4px] h-full items-center relative shrink-0 w-[136px]" data-node-id="I1301:103725;567:4277" data-name="Content">
                              <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#646e87] text-[12px] text-ellipsis whitespace-nowrap" data-node-id="I1301:103725;566:12188">
                                <p className="leading-[18px]">客户信息</p>
                              </div>
                            </div>
                          </div>
                          <div className="content-stretch flex h-full items-center justify-end min-w-[120px] px-[12px] py-[10px] relative shrink-0 w-[140px]" data-node-id="1301:103727" data-name="table-cell-header">
                            <div className="content-stretch flex gap-[4px] h-full items-center justify-end relative shrink-0" data-node-id="I1301:103727;581:9298" data-name="Content">
                              <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#646e87] text-[12px] text-ellipsis whitespace-nowrap" data-node-id="I1301:103727;581:9299">
                                <p className="leading-[18px]">日均 REV</p>
                              </div>
                            </div>
                          </div>
                          <div className="content-stretch flex h-full items-center min-w-[120px] px-[12px] py-[10px] relative shrink-0 w-[120px]" data-node-id="1301:103728" data-name="table-cell-header">
                            <div className="content-stretch flex flex-[1_0_0] gap-[4px] h-full items-center justify-end min-w-px relative" data-node-id="I1301:103728;567:4277" data-name="Content">
                              <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#646e87] text-[12px] text-ellipsis whitespace-nowrap" data-node-id="I1301:103728;566:12188">
                                <p className="leading-[18px]">涨跌值</p>
                              </div>
                            </div>
                          </div>
                          <div className="content-stretch flex h-full items-center justify-end min-w-[120px] px-[12px] py-[10px] relative shrink-0 w-[140px]" data-node-id="1301:103729" data-name="table-cell-header">
                            <div className="content-stretch flex gap-[4px] h-full items-center justify-end relative shrink-0" data-node-id="I1301:103729;581:9298" data-name="Content">
                              <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#646e87] text-[12px] text-ellipsis whitespace-nowrap" data-node-id="I1301:103729;581:9299">
                                <p className="leading-[18px]">日均 TPV</p>
                              </div>
                            </div>
                          </div>
                          <div className="content-stretch flex h-full items-center min-w-[120px] px-[12px] py-[10px] relative shrink-0 w-[140px]" data-node-id="1301:103734" data-name="table-cell-header">
                            <div className="content-stretch flex flex-[1_0_0] gap-[4px] h-full items-center justify-end min-w-px relative" data-node-id="I1301:103734;567:4277" data-name="Content">
                              <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#646e87] text-[12px] text-ellipsis whitespace-nowrap" data-node-id="I1301:103734;566:12188">
                                <p className="leading-[18px]">涨跌值</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="border-[#f6f6f9] border-b border-solid content-stretch flex h-[44px] items-start min-h-[44px] relative shrink-0 w-full" data-node-id="1301:103735" data-name="row">
                          <div className="border-0 border-[#f6f6f9] border-solid content-stretch flex flex-[1_0_0] h-full items-center min-w-[200px] px-[12px] py-[10px] relative" data-node-id="1301:103738" data-name="table-cell-body">
                            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] h-full items-start justify-center min-w-px relative" data-node-id="I1301:103738;2985:32162" data-name="Content">
                              <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I1301:103738;574:4502" data-name="Content">
                                <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#1e2436] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="I1301:103738;574:4503">
                                  <p className="leading-[20px] overflow-hidden text-ellipsis">阿里巴巴网络技术有限公司</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="border-0 border-[#f6f6f9] border-solid content-stretch flex h-full items-center min-w-[120px] px-[12px] py-[10px] relative shrink-0 w-[140px]" data-node-id="1301:103742" data-name="table-cell-body">
                            <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-end justify-center min-w-px relative" data-node-id="I1301:103742;2985:32159" data-name="Content">
                              <div className="content-stretch flex gap-[4px] items-center justify-end relative shrink-0 w-full" data-node-id="I1301:103742;581:9396" data-name="Content">
                                <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] min-w-px not-italic relative text-[#1e2436] text-[14px] text-right" data-node-id="I1301:103742;581:9397">
                                  <p className="leading-[20px]">16,600</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="border-0 border-[#f6f6f9] border-solid content-stretch flex h-full items-center min-w-[120px] px-[12px] py-[10px] relative shrink-0 w-[120px]" data-node-id="1301:103743" data-name="table-cell-body">
                            <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-end justify-center min-w-px relative" data-node-id="I1301:103743;2985:32159" data-name="Content">
                              <div className="content-stretch flex gap-[4px] items-center justify-end relative shrink-0 w-full" data-node-id="I1301:103743;581:9396" data-name="Content">
                                <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] min-w-px not-italic relative text-[#e5485d] text-[14px] text-right" data-node-id="I1301:103743;581:9397">
                                  <p className="leading-[20px]">+12.2%</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="border-0 border-[#f6f6f9] border-solid content-stretch flex h-full items-center min-w-[120px] px-[12px] py-[10px] relative shrink-0 w-[140px]" data-node-id="1301:103744" data-name="table-cell-body">
                            <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-end justify-center min-w-px relative" data-node-id="I1301:103744;2985:32159" data-name="Content">
                              <div className="content-stretch flex gap-[4px] items-center justify-end relative shrink-0 w-full" data-node-id="I1301:103744;581:9396" data-name="Content">
                                <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] min-w-px not-italic relative text-[#1e2436] text-[14px] text-right" data-node-id="I1301:103744;581:9397">
                                  <p className="leading-[20px]">16,600</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="border-0 border-[#f6f6f9] border-solid content-stretch flex h-full items-center min-w-[120px] px-[12px] py-[10px] relative shrink-0 w-[140px]" data-node-id="1301:103745" data-name="table-cell-body">
                            <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-end justify-center min-w-px relative" data-node-id="I1301:103745;2985:32159" data-name="Content">
                              <div className="content-stretch flex gap-[4px] items-center justify-end relative shrink-0 w-full" data-node-id="I1301:103745;581:9396" data-name="Content">
                                <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] min-w-px not-italic relative text-[#18a765] text-[14px] text-right" data-node-id="I1301:103745;581:9397">
                                  <p className="leading-[20px]">-12.2%</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="border-[#f6f6f9] border-b border-solid content-stretch flex h-[44px] items-start min-h-[44px] relative shrink-0 w-full" data-node-id="1301:103746" data-name="row">
                          <div className="border-0 border-[#f6f6f9] border-solid content-stretch flex flex-[1_0_0] h-full items-center min-w-[200px] px-[12px] py-[10px] relative" data-node-id="1301:103749" data-name="table-cell-body">
                            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] h-full items-start justify-center min-w-px relative" data-node-id="I1301:103749;2985:32162" data-name="Content">
                              <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I1301:103749;574:4502" data-name="Content">
                                <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#1e2436] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="I1301:103749;574:4503">
                                  <p className="leading-[20px] overflow-hidden text-ellipsis">阿里巴巴网络技术有限公司</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="border-0 border-[#f6f6f9] border-solid content-stretch flex h-full items-center min-w-[120px] px-[12px] py-[10px] relative shrink-0 w-[140px]" data-node-id="1301:103753" data-name="table-cell-body">
                            <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-end justify-center min-w-px relative" data-node-id="I1301:103753;2985:32159" data-name="Content">
                              <div className="content-stretch flex gap-[4px] items-center justify-end relative shrink-0 w-full" data-node-id="I1301:103753;581:9396" data-name="Content">
                                <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] min-w-px not-italic relative text-[#1e2436] text-[14px] text-right" data-node-id="I1301:103753;581:9397">
                                  <p className="leading-[20px]">16,600</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="border-0 border-[#f6f6f9] border-solid content-stretch flex h-full items-center min-w-[120px] px-[12px] py-[10px] relative shrink-0 w-[120px]" data-node-id="1301:103754" data-name="table-cell-body">
                            <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-end justify-center min-w-px relative" data-node-id="I1301:103754;2985:32159" data-name="Content">
                              <div className="content-stretch flex gap-[4px] items-center justify-end relative shrink-0 w-full" data-node-id="I1301:103754;581:9396" data-name="Content">
                                <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] min-w-px not-italic relative text-[#e5485d] text-[14px] text-right" data-node-id="I1301:103754;581:9397">
                                  <p className="leading-[20px]">+12.2%</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="border-0 border-[#f6f6f9] border-solid content-stretch flex h-full items-center min-w-[120px] px-[12px] py-[10px] relative shrink-0 w-[140px]" data-node-id="1301:103755" data-name="table-cell-body">
                            <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-end justify-center min-w-px relative" data-node-id="I1301:103755;2985:32159" data-name="Content">
                              <div className="content-stretch flex gap-[4px] items-center justify-end relative shrink-0 w-full" data-node-id="I1301:103755;581:9396" data-name="Content">
                                <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] min-w-px not-italic relative text-[#1e2436] text-[14px] text-right" data-node-id="I1301:103755;581:9397">
                                  <p className="leading-[20px]">16,600</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="border-0 border-[#f6f6f9] border-solid content-stretch flex h-full items-center min-w-[120px] px-[12px] py-[10px] relative shrink-0 w-[140px]" data-node-id="1301:103756" data-name="table-cell-body">
                            <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-end justify-center min-w-px relative" data-node-id="I1301:103756;2985:32159" data-name="Content">
                              <div className="content-stretch flex gap-[4px] items-center justify-end relative shrink-0 w-full" data-node-id="I1301:103756;581:9396" data-name="Content">
                                <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] min-w-px not-italic relative text-[#18a765] text-[14px] text-right" data-node-id="I1301:103756;581:9397">
                                  <p className="leading-[20px]">-12.2%</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="border-[#f6f6f9] border-b border-solid content-stretch flex h-[44px] items-start min-h-[44px] relative shrink-0 w-full" data-node-id="1301:103757" data-name="row">
                          <div className="border-0 border-[#f6f6f9] border-solid content-stretch flex flex-[1_0_0] h-full items-center min-w-[200px] px-[12px] py-[10px] relative" data-node-id="1301:103760" data-name="table-cell-body">
                            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] h-full items-start justify-center min-w-px relative" data-node-id="I1301:103760;2985:32162" data-name="Content">
                              <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I1301:103760;574:4502" data-name="Content">
                                <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#1e2436] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="I1301:103760;574:4503">
                                  <p className="leading-[20px] overflow-hidden text-ellipsis">阿里巴巴网络技术有限公司</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="border-0 border-[#f6f6f9] border-solid content-stretch flex h-full items-center min-w-[120px] px-[12px] py-[10px] relative shrink-0 w-[140px]" data-node-id="1301:103764" data-name="table-cell-body">
                            <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-end justify-center min-w-px relative" data-node-id="I1301:103764;2985:32159" data-name="Content">
                              <div className="content-stretch flex gap-[4px] items-center justify-end relative shrink-0 w-full" data-node-id="I1301:103764;581:9396" data-name="Content">
                                <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] min-w-px not-italic relative text-[#1e2436] text-[14px] text-right" data-node-id="I1301:103764;581:9397">
                                  <p className="leading-[20px]">16,600</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="border-0 border-[#f6f6f9] border-solid content-stretch flex h-full items-center min-w-[120px] px-[12px] py-[10px] relative shrink-0 w-[120px]" data-node-id="1301:103765" data-name="table-cell-body">
                            <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-end justify-center min-w-px relative" data-node-id="I1301:103765;2985:32159" data-name="Content">
                              <div className="content-stretch flex gap-[4px] items-center justify-end relative shrink-0 w-full" data-node-id="I1301:103765;581:9396" data-name="Content">
                                <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] min-w-px not-italic relative text-[#e5485d] text-[14px] text-right" data-node-id="I1301:103765;581:9397">
                                  <p className="leading-[20px]">+12.2%</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="border-0 border-[#f6f6f9] border-solid content-stretch flex h-full items-center min-w-[120px] px-[12px] py-[10px] relative shrink-0 w-[140px]" data-node-id="1301:103766" data-name="table-cell-body">
                            <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-end justify-center min-w-px relative" data-node-id="I1301:103766;2985:32159" data-name="Content">
                              <div className="content-stretch flex gap-[4px] items-center justify-end relative shrink-0 w-full" data-node-id="I1301:103766;581:9396" data-name="Content">
                                <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] min-w-px not-italic relative text-[#1e2436] text-[14px] text-right" data-node-id="I1301:103766;581:9397">
                                  <p className="leading-[20px]">16,600</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="border-0 border-[#f6f6f9] border-solid content-stretch flex h-full items-center min-w-[120px] px-[12px] py-[10px] relative shrink-0 w-[140px]" data-node-id="1301:103767" data-name="table-cell-body">
                            <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-end justify-center min-w-px relative" data-node-id="I1301:103767;2985:32159" data-name="Content">
                              <div className="content-stretch flex gap-[4px] items-center justify-end relative shrink-0 w-full" data-node-id="I1301:103767;581:9396" data-name="Content">
                                <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] min-w-px not-italic relative text-[#18a765] text-[14px] text-right" data-node-id="I1301:103767;581:9397">
                                  <p className="leading-[20px]">-12.2%</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="border-[#f6f6f9] border-b border-solid content-stretch flex h-[44px] items-start min-h-[44px] relative shrink-0 w-full" data-node-id="1301:103768" data-name="row">
                          <div className="border-0 border-[#f6f6f9] border-solid content-stretch flex flex-[1_0_0] h-full items-center min-w-[200px] px-[12px] py-[10px] relative" data-node-id="1301:103771" data-name="table-cell-body">
                            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] h-full items-start justify-center min-w-px relative" data-node-id="I1301:103771;2985:32162" data-name="Content">
                              <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I1301:103771;574:4502" data-name="Content">
                                <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#1e2436] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="I1301:103771;574:4503">
                                  <p className="leading-[20px] overflow-hidden text-ellipsis">阿里巴巴网络技术有限公司</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="border-0 border-[#f6f6f9] border-solid content-stretch flex h-full items-center min-w-[120px] px-[12px] py-[10px] relative shrink-0 w-[140px]" data-node-id="1301:103775" data-name="table-cell-body">
                            <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-end justify-center min-w-px relative" data-node-id="I1301:103775;2985:32159" data-name="Content">
                              <div className="content-stretch flex gap-[4px] items-center justify-end relative shrink-0 w-full" data-node-id="I1301:103775;581:9396" data-name="Content">
                                <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] min-w-px not-italic relative text-[#1e2436] text-[14px] text-right" data-node-id="I1301:103775;581:9397">
                                  <p className="leading-[20px]">16,600</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="border-0 border-[#f6f6f9] border-solid content-stretch flex h-full items-center min-w-[120px] px-[12px] py-[10px] relative shrink-0 w-[120px]" data-node-id="1301:103776" data-name="table-cell-body">
                            <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-end justify-center min-w-px relative" data-node-id="I1301:103776;2985:32159" data-name="Content">
                              <div className="content-stretch flex gap-[4px] items-center justify-end relative shrink-0 w-full" data-node-id="I1301:103776;581:9396" data-name="Content">
                                <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] min-w-px not-italic relative text-[#e5485d] text-[14px] text-right" data-node-id="I1301:103776;581:9397">
                                  <p className="leading-[20px]">+12.2%</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="border-0 border-[#f6f6f9] border-solid content-stretch flex h-full items-center min-w-[120px] px-[12px] py-[10px] relative shrink-0 w-[140px]" data-node-id="1301:103777" data-name="table-cell-body">
                            <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-end justify-center min-w-px relative" data-node-id="I1301:103777;2985:32159" data-name="Content">
                              <div className="content-stretch flex gap-[4px] items-center justify-end relative shrink-0 w-full" data-node-id="I1301:103777;581:9396" data-name="Content">
                                <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] min-w-px not-italic relative text-[#1e2436] text-[14px] text-right" data-node-id="I1301:103777;581:9397">
                                  <p className="leading-[20px]">16,600</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="border-0 border-[#f6f6f9] border-solid content-stretch flex h-full items-center min-w-[120px] px-[12px] py-[10px] relative shrink-0 w-[140px]" data-node-id="1301:103778" data-name="table-cell-body">
                            <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-end justify-center min-w-px relative" data-node-id="I1301:103778;2985:32159" data-name="Content">
                              <div className="content-stretch flex gap-[4px] items-center justify-end relative shrink-0 w-full" data-node-id="I1301:103778;581:9396" data-name="Content">
                                <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] min-w-px not-italic relative text-[#18a765] text-[14px] text-right" data-node-id="I1301:103778;581:9397">
                                  <p className="leading-[20px]">-12.2%</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="border-[#f6f6f9] border-b border-solid content-stretch flex h-[44px] items-start min-h-[44px] relative shrink-0 w-full" data-node-id="1301:103779" data-name="row">
                          <div className="border-0 border-[#f6f6f9] border-solid content-stretch flex flex-[1_0_0] h-full items-center min-w-[200px] px-[12px] py-[10px] relative" data-node-id="1301:103782" data-name="table-cell-body">
                            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] h-full items-start justify-center min-w-px relative" data-node-id="I1301:103782;2985:32162" data-name="Content">
                              <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I1301:103782;574:4502" data-name="Content">
                                <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#1e2436] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="I1301:103782;574:4503">
                                  <p className="leading-[20px] overflow-hidden text-ellipsis">阿里巴巴网络技术有限公司</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="border-0 border-[#f6f6f9] border-solid content-stretch flex h-full items-center min-w-[120px] px-[12px] py-[10px] relative shrink-0 w-[140px]" data-node-id="1301:103786" data-name="table-cell-body">
                            <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-end justify-center min-w-px relative" data-node-id="I1301:103786;2985:32159" data-name="Content">
                              <div className="content-stretch flex gap-[4px] items-center justify-end relative shrink-0 w-full" data-node-id="I1301:103786;581:9396" data-name="Content">
                                <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] min-w-px not-italic relative text-[#1e2436] text-[14px] text-right" data-node-id="I1301:103786;581:9397">
                                  <p className="leading-[20px]">16,600</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="border-0 border-[#f6f6f9] border-solid content-stretch flex h-full items-center min-w-[120px] px-[12px] py-[10px] relative shrink-0 w-[120px]" data-node-id="1301:103787" data-name="table-cell-body">
                            <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-end justify-center min-w-px relative" data-node-id="I1301:103787;2985:32159" data-name="Content">
                              <div className="content-stretch flex gap-[4px] items-center justify-end relative shrink-0 w-full" data-node-id="I1301:103787;581:9396" data-name="Content">
                                <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] min-w-px not-italic relative text-[#e5485d] text-[14px] text-right" data-node-id="I1301:103787;581:9397">
                                  <p className="leading-[20px]">+12.2%</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="border-0 border-[#f6f6f9] border-solid content-stretch flex h-full items-center min-w-[120px] px-[12px] py-[10px] relative shrink-0 w-[140px]" data-node-id="1301:103788" data-name="table-cell-body">
                            <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-end justify-center min-w-px relative" data-node-id="I1301:103788;2985:32159" data-name="Content">
                              <div className="content-stretch flex gap-[4px] items-center justify-end relative shrink-0 w-full" data-node-id="I1301:103788;581:9396" data-name="Content">
                                <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] min-w-px not-italic relative text-[#1e2436] text-[14px] text-right" data-node-id="I1301:103788;581:9397">
                                  <p className="leading-[20px]">16,600</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="border-0 border-[#f6f6f9] border-solid content-stretch flex h-full items-center min-w-[120px] px-[12px] py-[10px] relative shrink-0 w-[140px]" data-node-id="1301:103789" data-name="table-cell-body">
                            <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-end justify-center min-w-px relative" data-node-id="I1301:103789;2985:32159" data-name="Content">
                              <div className="content-stretch flex gap-[4px] items-center justify-end relative shrink-0 w-full" data-node-id="I1301:103789;581:9396" data-name="Content">
                                <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] min-w-px not-italic relative text-[#18a765] text-[14px] text-right" data-node-id="I1301:103789;581:9397">
                                  <p className="leading-[20px]">-12.2%</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Table>
                    </div>
                  </div>
                </div>
                <div className="bg-white border border-[#edeef3] border-solid content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col gap-[16px] items-start p-[21px] relative rounded-[8px] shrink-0 w-full" data-node-id="624:97320" data-name="知识中心">
                  <div className="relative shrink-0 w-full" data-node-id="624:97321" data-name="标题">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative size-full">
                      <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-node-id="624:97322">
                        <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Semibold'] justify-center leading-[0] not-italic relative shrink-0 text-[#1e2436] text-[18px] whitespace-nowrap" data-node-id="624:97323">
                          <p className="leading-[24px]">知识中心</p>
                        </div>
                      </div>
                      <div className="content-stretch flex gap-[4px] items-center justify-center px-[2px] relative rounded-[4px] shrink-0" data-node-id="624:97325" data-name="link">
                        <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] not-italic relative shrink-0 text-[#3c455d] text-[12px] whitespace-nowrap" data-node-id="I624:97325;1341:12603">
                          <p className="leading-[18px]">更多</p>
                        </div>
                        <div className="relative shrink-0 size-[12px]" data-node-id="I624:97325;1341:12605" data-name="common-linear-arrow-right">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCommonLinearArrowStraightRight1} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative shrink-0 w-full" data-node-id="624:97326" data-name="内容">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-start relative size-full">
                      <div className="bg-[#f8f8fb] content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-[280px] p-[16px] relative rounded-[6px]" data-node-id="624:97327">
                        <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-node-id="624:97328">
                          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Semibold'] justify-center leading-[0] min-w-px not-italic relative text-[#1e2436] text-[16px]" data-node-id="624:97329">
                            <p className="leading-[24px]">学习专区</p>
                          </div>
                          <div className="content-stretch flex gap-[4px] items-center justify-center px-[2px] relative rounded-[4px] shrink-0" data-node-id="624:97330" data-name="link">
                            <div className="relative shrink-0 size-[12px]" data-node-id="I624:97330;1341:12602" data-name="common-linear-refresh" />
                            <div className="[word-break:break-word] flex flex-col font-['Source_Han_Sans_CN:Medium'] justify-center leading-[0] not-italic relative shrink-0 text-[#646e87] text-[12px] whitespace-nowrap" data-node-id="I624:97330;1341:12603">
                              <p className="leading-[18px]">换一批</p>
                            </div>
                          </div>
                        </div>
                        <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-node-id="624:97331">
                          <div className="h-[40px] relative rounded-[4px] shrink-0 w-[56px]" data-node-id="624:97332">
                            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[4px] size-full" src={imgRectangle21} />
                          </div>
                          <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col font-['PingFang_SC:Regular'] gap-[2px] items-start justify-center leading-[0] min-w-px not-italic relative whitespace-nowrap" data-node-id="624:97333">
                            <div className="flex flex-col justify-center relative shrink-0 text-[#0036fe] text-[12px]" data-node-id="624:97334">
                              <p className="leading-[18px]">产品能力</p>
                            </div>
                            <div className="flex flex-col justify-center min-w-full overflow-hidden relative shrink-0 text-[#1e2436] text-[14px] text-ellipsis w-[min-content]" data-node-id="624:97335">
                              <p className="leading-[20px] overflow-hidden text-ellipsis">韩国新上线#支付方式#，教你一招，售卖谈判策略！</p>
                            </div>
                          </div>
                        </div>
                        <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-node-id="624:97336">
                          <div className="h-[40px] relative rounded-[4px] shrink-0 w-[56px]" data-node-id="624:97337">
                            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[4px] size-full" src={imgRectangle22} />
                          </div>
                          <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col font-['PingFang_SC:Regular'] gap-[2px] items-start justify-center leading-[0] min-w-px not-italic relative whitespace-nowrap" data-node-id="624:97338">
                            <div className="flex flex-col justify-center relative shrink-0 text-[#0036fe] text-[12px]" data-node-id="624:97339">
                              <p className="leading-[18px]">产品能力</p>
                            </div>
                            <div className="flex flex-col justify-center min-w-full overflow-hidden relative shrink-0 text-[#1e2436] text-[14px] text-ellipsis w-[min-content]" data-node-id="624:97340">
                              <p className="leading-[20px] overflow-hidden text-ellipsis">韩国新上线#支付方式#，教你一招，售卖谈判策略！</p>
                            </div>
                          </div>
                        </div>
                        <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-node-id="624:97341">
                          <div className="h-[40px] relative rounded-[4px] shrink-0 w-[56px]" data-node-id="624:97342">
                            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[4px] size-full" src={imgRectangle23} />
                          </div>
                          <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col font-['PingFang_SC:Regular'] gap-[2px] items-start justify-center leading-[0] min-w-px not-italic relative whitespace-nowrap" data-node-id="624:97343">
                            <div className="flex flex-col justify-center relative shrink-0 text-[#0036fe] text-[12px]" data-node-id="624:97344">
                              <p className="leading-[18px]">产品能力</p>
                            </div>
                            <div className="flex flex-col justify-center min-w-full overflow-hidden relative shrink-0 text-[#1e2436] text-[14px] text-ellipsis w-[min-content]" data-node-id="624:97345">
                              <p className="leading-[20px] overflow-hidden text-ellipsis">韩国新上线#支付方式#，教你一招，售卖谈判策略！</p>
                            </div>
                          </div>
                        </div>
                        <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-node-id="624:97346">
                          <div className="h-[40px] relative rounded-[4px] shrink-0 w-[56px]" data-node-id="624:97347">
                            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[4px] size-full" src={imgRectangle25} />
                          </div>
                          <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col font-['PingFang_SC:Regular'] gap-[2px] items-start justify-center leading-[0] min-w-px not-italic relative whitespace-nowrap" data-node-id="624:97348">
                            <div className="flex flex-col justify-center relative shrink-0 text-[#0036fe] text-[12px]" data-node-id="624:97349">
                              <p className="leading-[18px]">产品能力</p>
                            </div>
                            <div className="flex flex-col justify-center min-w-full overflow-hidden relative shrink-0 text-[#1e2436] text-[14px] text-ellipsis w-[min-content]" data-node-id="624:97350">
                              <p className="leading-[20px] overflow-hidden text-ellipsis">韩国新上线#支付方式#，教你一招，售卖谈判策略！</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-[#f8f8fb] content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-[280px] p-[16px] relative rounded-[6px]" data-node-id="624:97351">
                        <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-node-id="624:97352">
                          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Semibold'] justify-center leading-[0] min-w-px not-italic relative text-[#1e2436] text-[16px]" data-node-id="624:97353">
                            <p className="leading-[24px]">竞品专区</p>
                          </div>
                          <div className="content-stretch flex gap-[4px] items-center justify-center px-[2px] relative rounded-[4px] shrink-0" data-node-id="624:97354" data-name="link">
                            <div className="relative shrink-0 size-[12px]" data-node-id="I624:97354;1341:12602" data-name="common-linear-refresh" />
                            <div className="[word-break:break-word] flex flex-col font-['Source_Han_Sans_CN:Medium'] justify-center leading-[0] not-italic relative shrink-0 text-[#646e87] text-[12px] whitespace-nowrap" data-node-id="I624:97354;1341:12603">
                              <p className="leading-[18px]">换一批</p>
                            </div>
                          </div>
                        </div>
                        <div className="content-stretch flex items-start relative shrink-0 w-full" data-node-id="624:97355">
                          <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col font-['PingFang_SC:Regular'] gap-[2px] items-start justify-center leading-[0] min-w-px not-italic relative whitespace-nowrap" data-node-id="624:97356">
                            <div className="flex flex-col justify-center relative shrink-0 text-[#646e87] text-[12px]" data-node-id="624:97357">
                              <p className="leading-[18px]">airwallex</p>
                            </div>
                            <div className="flex flex-col justify-center min-w-full overflow-hidden relative shrink-0 text-[#1e2436] text-[14px] text-ellipsis w-[min-content]" data-node-id="624:97358">
                              <p className="leading-[20px] overflow-hidden text-ellipsis">AW上线集团管理视图！</p>
                            </div>
                          </div>
                        </div>
                        <div className="content-stretch flex items-start relative shrink-0 w-full" data-node-id="624:97359">
                          <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col font-['PingFang_SC:Regular'] gap-[2px] items-start justify-center leading-[0] min-w-px not-italic relative whitespace-nowrap" data-node-id="624:97360">
                            <div className="flex flex-col justify-center relative shrink-0 text-[#646e87] text-[12px]" data-node-id="624:97361">
                              <p className="leading-[18px]">airwallex</p>
                            </div>
                            <div className="flex flex-col justify-center min-w-full overflow-hidden relative shrink-0 text-[#1e2436] text-[14px] text-ellipsis w-[min-content]" data-node-id="624:97362">
                              <p className="leading-[20px] overflow-hidden text-ellipsis">AW上线菲律宾Gcash,售卖价格为3.5%+0.5USD！</p>
                            </div>
                          </div>
                        </div>
                        <div className="content-stretch flex items-start relative shrink-0 w-full" data-node-id="624:97363">
                          <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col font-['PingFang_SC:Regular'] gap-[2px] items-start justify-center leading-[0] min-w-px not-italic relative whitespace-nowrap" data-node-id="624:97364">
                            <div className="flex flex-col justify-center relative shrink-0 text-[#646e87] text-[12px]" data-node-id="624:97365">
                              <p className="leading-[18px]">airwallex</p>
                            </div>
                            <div className="flex flex-col justify-center min-w-full overflow-hidden relative shrink-0 text-[#1e2436] text-[14px] text-ellipsis w-[min-content]" data-node-id="624:97366">
                              <p className="leading-[20px] overflow-hidden text-ellipsis">AW上线集团管理视图！</p>
                            </div>
                          </div>
                        </div>
                        <div className="content-stretch flex items-start relative shrink-0 w-full" data-node-id="624:97367">
                          <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col font-['PingFang_SC:Regular'] gap-[2px] items-start justify-center leading-[0] min-w-px not-italic relative whitespace-nowrap" data-node-id="624:97368">
                            <div className="flex flex-col justify-center relative shrink-0 text-[#646e87] text-[12px]" data-node-id="624:97369">
                              <p className="leading-[18px]">airwallex</p>
                            </div>
                            <div className="flex flex-col justify-center min-w-full overflow-hidden relative shrink-0 text-[#1e2436] text-[14px] text-ellipsis w-[min-content]" data-node-id="624:97370">
                              <p className="leading-[20px] overflow-hidden text-ellipsis">AW上线集团管理视图！</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[12px] items-start justify-center justify-self-stretch relative self-start shrink-0" data-node-id="624:97371">
                <div className="bg-white border border-[#edeef3] border-solid content-stretch flex flex-col gap-[4px] items-start overflow-clip pb-[9px] pt-[21px] px-[21px] relative rounded-[8px] shadow-[0px_1px_1px_0px_rgba(20,41,79,0.02),0px_2px_4px_0px_rgba(20,41,79,0.01)] shrink-0 w-full" data-node-id="624:97392" data-name="新客拓展">
                  <div className="relative shrink-0 w-full" data-node-id="624:97393" data-name="标题">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center pb-[12px] relative size-full">
                      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-node-id="624:97394" data-name="标题">
                        <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="624:97395" data-name="标题">
                          <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Semibold'] justify-center leading-[0] not-italic relative shrink-0 text-[#1e2436] text-[18px] whitespace-nowrap" data-node-id="624:97396">
                            <p className="leading-[24px]">待办任务</p>
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex gap-[4px] items-center justify-center px-[2px] relative rounded-[4px] shrink-0" data-node-id="624:97400" data-name="link">
                        <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] not-italic relative shrink-0 text-[#646e87] text-[12px] whitespace-nowrap" data-node-id="I624:97400;1341:12598">
                          <p className="leading-[18px]">更多</p>
                        </div>
                        <div className="relative shrink-0 size-[12px]" data-node-id="I624:97400;1341:12600" data-name="common-linear-arrow-right">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCommonLinearArrowStraightRight} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="border-[#e7e8ef] border-b border-solid relative shrink-0 w-full" data-node-id="624:97411" data-name="tabs-line">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
                      <div className="content-stretch flex flex-[1_0_0] gap-[24px] items-center min-w-px relative" data-node-id="I624:97411;522:7080" data-name="tabs水平插槽">
                        <div className="content-stretch flex flex-col gap-[4px] items-center justify-center max-w-[160px] min-w-[32px] pb-[12px] relative shrink-0" data-node-id="I624:97411;522:7080;624:97402" data-name="tabs-line-cell">
                          <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] min-w-full not-italic overflow-hidden relative shrink-0 text-[#1e2436] text-[14px] text-center text-ellipsis w-[min-content] whitespace-nowrap" data-node-id="I624:97411;522:7080;624:97404">
                            <p className="leading-[20px] overflow-hidden text-ellipsis">全部</p>
                          </div>
                          <div className="absolute bg-[#0036fe] bottom-0 h-[3px] left-0 right-0 rounded-tl-[2px] rounded-tr-[2px]" data-node-id="I624:97411;522:7080;624:97407" />
                        </div>
                        <div className="content-stretch flex gap-[4px] items-center justify-center max-w-[160px] min-w-[32px] pb-[12px] relative shrink-0" data-node-id="I624:97411;522:7080;624:97408" data-name="tabs-line-cell">
                          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#646e87] text-[14px] text-center text-ellipsis whitespace-nowrap" data-node-id="I624:97411;522:7080;624:97408;520:3460">
                            <p className="leading-[20px] overflow-hidden text-ellipsis">客户建联</p>
                          </div>
                        </div>
                        <div className="content-stretch flex gap-[4px] items-center justify-center max-w-[160px] min-w-[32px] pb-[12px] relative shrink-0" data-node-id="I624:97411;522:7080;624:97409" data-name="tabs-line-cell">
                          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#646e87] text-[14px] text-center text-ellipsis whitespace-nowrap" data-node-id="I624:97411;522:7080;624:97409;520:3460">
                            <p className="leading-[20px] overflow-hidden text-ellipsis">产品合作</p>
                          </div>
                        </div>
                        <div className="content-stretch flex gap-[4px] items-center justify-center max-w-[160px] min-w-[32px] pb-[12px] relative shrink-0" data-node-id="I624:97411;522:7080;624:97410" data-name="tabs-line-cell">
                          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#646e87] text-[14px] text-center text-ellipsis whitespace-nowrap" data-node-id="I624:97411;522:7080;624:97410;520:3460">
                            <p className="leading-[20px] overflow-hidden text-ellipsis">审批驳回</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="min-w-[320px] relative shrink-0 w-full" data-node-id="655:117766" data-name="任务">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start min-w-[inherit] overflow-clip relative rounded-[inherit] size-full">
                      <div className="content-stretch flex gap-[12px] h-[64px] items-center min-w-[320px] overflow-clip relative rounded-[8px] shrink-0 w-full" data-node-id="655:117767" data-name="任务">
                        <div className="bg-[#fff1f3] content-stretch flex items-center justify-center p-[8px] relative rounded-[6px] shrink-0" data-node-id="655:117768" data-name="图标">
                          <div className="relative shrink-0 size-[16px]" data-node-id="655:117769" data-name="sidebar-linear-profile-user">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSidebarLinearProfileUser} />
                          </div>
                        </div>
                        <div className="border-[#f6f6f9] border-b border-solid content-stretch flex flex-[1_0_0] flex-col gap-[2px] h-full items-start min-w-px py-[12px] relative" data-node-id="655:117770" data-name="任务">
                          <div className="content-stretch flex items-start relative shrink-0 w-full" data-node-id="655:117772" data-name="标题">
                            <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#1e2436] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="655:117773">
                              <p className="leading-[20px] overflow-hidden text-ellipsis">客户建联，逾期回收公海</p>
                            </div>
                          </div>
                          <div className="content-stretch flex gap-[8px] h-[18px] items-center relative shrink-0 w-full" data-node-id="655:117774" data-name="辅助内容区">
                            <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-node-id="655:117775" data-name="文字">
                              <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] not-italic relative shrink-0 text-[#646e87] text-[12px] whitespace-nowrap" data-node-id="655:117776">
                                <p className="leading-[18px]">未来生活集团，剩余3天完成客户建联</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex gap-[12px] h-[64px] items-center min-w-[320px] overflow-clip relative rounded-[8px] shrink-0 w-full" data-node-id="655:117779" data-name="任务">
                        <div className="bg-[#f8f8fb] content-stretch flex items-center justify-center p-[8px] relative rounded-[6px] shrink-0" data-node-id="655:117780" data-name="图标">
                          <div className="relative shrink-0 size-[16px]" data-node-id="655:117781" data-name="sidebar-linear-seal">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSidebarLinearSeal} />
                          </div>
                        </div>
                        <div className="border-[#f6f6f9] border-b border-solid content-stretch flex flex-[1_0_0] flex-col gap-[2px] h-full items-start min-w-px py-[12px] relative" data-node-id="655:117782" data-name="任务">
                          <div className="content-stretch flex items-start relative shrink-0 w-full" data-node-id="655:117784" data-name="标题">
                            <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#1e2436] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="655:117785">
                              <p className="leading-[20px] overflow-hidden text-ellipsis">产品合作材料驳回整改</p>
                            </div>
                          </div>
                          <div className="content-stretch flex gap-[8px] h-[18px] items-center relative shrink-0 w-full" data-node-id="655:117786" data-name="辅助内容区">
                            <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-node-id="655:117787" data-name="文字">
                              <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] not-italic relative shrink-0 text-[#646e87] text-[12px] whitespace-nowrap" data-node-id="655:117788">
                                <p className="leading-[18px]">TestPOS新产品合作，补充域名所有权证明</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex gap-[12px] h-[64px] items-center min-w-[320px] overflow-clip relative rounded-[8px] shrink-0 w-full" data-node-id="655:117791" data-name="任务">
                        <div className="bg-[#f8f8fb] content-stretch flex items-center justify-center p-[8px] relative rounded-[6px] shrink-0" data-node-id="655:117792" data-name="图标">
                          <div className="relative shrink-0 size-[16px]" data-node-id="655:117793" data-name="common-linear-box-add">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCommonLinearBoxAdd} />
                          </div>
                        </div>
                        <div className="border-[#f6f6f9] border-b border-solid content-stretch flex flex-[1_0_0] flex-col gap-[2px] h-full items-start min-w-px py-[12px] relative" data-node-id="655:117794" data-name="任务">
                          <div className="content-stretch flex items-start relative shrink-0 w-full" data-node-id="655:117796" data-name="标题">
                            <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#1e2436] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="655:117797">
                              <p className="leading-[20px] overflow-hidden text-ellipsis">服务协议待确认</p>
                            </div>
                          </div>
                          <div className="content-stretch flex gap-[8px] h-[18px] items-center relative shrink-0 w-full" data-node-id="655:117798" data-name="辅助内容区">
                            <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-node-id="655:117799" data-name="文字">
                              <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] not-italic relative shrink-0 text-[#646e87] text-[12px] whitespace-nowrap" data-node-id="655:117800">
                                <p className="leading-[18px]">TestPOS新产品合作，服务协议待您审核确认</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex gap-[12px] h-[64px] items-center min-w-[320px] overflow-clip relative rounded-[8px] shrink-0 w-full" data-node-id="655:117803" data-name="任务">
                        <div className="bg-[#f8f8fb] content-stretch flex items-center justify-center p-[8px] relative rounded-[6px] shrink-0" data-node-id="655:117804" data-name="图标">
                          <div className="relative shrink-0 size-[16px]" data-node-id="655:117805" data-name="sidebar-linear-seal">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSidebarLinearSeal} />
                          </div>
                        </div>
                        <div className="border-[#f6f6f9] border-b border-solid content-stretch flex flex-[1_0_0] flex-col gap-[2px] h-full items-start min-w-px py-[12px] relative" data-node-id="655:117806" data-name="任务">
                          <div className="content-stretch flex items-start relative shrink-0 w-full" data-node-id="655:117808" data-name="标题">
                            <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#1e2436] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="655:117809">
                              <p className="leading-[20px] overflow-hidden text-ellipsis">报价单驳回待整改</p>
                            </div>
                          </div>
                          <div className="content-stretch flex gap-[8px] h-[18px] items-center relative shrink-0 w-full" data-node-id="655:117810" data-name="辅助内容区">
                            <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-node-id="655:117811" data-name="文字">
                              <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] not-italic relative shrink-0 text-[#646e87] text-[12px] whitespace-nowrap" data-node-id="655:117812">
                                <p className="leading-[18px]">TestPOS已有商户增购</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex gap-[12px] h-[64px] items-center min-w-[320px] overflow-clip relative rounded-[8px] shrink-0 w-full" data-node-id="655:117815" data-name="任务">
                        <div className="bg-[#f8f8fb] content-stretch flex items-center justify-center p-[8px] relative rounded-[6px] shrink-0" data-node-id="655:117816" data-name="图标">
                          <div className="relative shrink-0 size-[16px]" data-node-id="655:117817" data-name="common-linear-box-add">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCommonLinearBoxAdd} />
                          </div>
                        </div>
                        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] h-full items-start min-w-px py-[12px] relative" data-node-id="655:117818" data-name="任务">
                          <div className="content-stretch flex items-start relative shrink-0 w-full" data-node-id="655:117820" data-name="标题">
                            <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#1e2436] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="655:117821">
                              <p className="leading-[20px] overflow-hidden text-ellipsis">MCC变更待确认</p>
                            </div>
                          </div>
                          <div className="content-stretch flex gap-[8px] h-[18px] items-center relative shrink-0 w-full" data-node-id="655:117822" data-name="辅助内容区">
                            <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-node-id="655:117823" data-name="文字">
                              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#646e87] text-[12px] text-ellipsis whitespace-nowrap" data-node-id="655:117824">
                                <p className="leading-[18px] overflow-hidden text-ellipsis">TestPOS新产品合作，KYCB审核通过，MCC有变更待处理</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white border border-[#edeef3] border-solid content-stretch drop-shadow-[0px_1px_0.5px_rgba(20,41,79,0.02),0px_2px_2px_rgba(20,41,79,0.01)] flex flex-col gap-[16px] items-start px-[13px] py-[21px] relative rounded-[8px] shrink-0 w-full" data-node-id="624:97474" data-name="咨询服务">
                  <div className="relative shrink-0 w-full" data-node-id="624:97475">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start px-[8px] relative size-full">
                      <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-node-id="624:97476" data-name="标题">
                        <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-w-px relative" data-node-id="624:97477">
                          <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Semibold'] justify-center leading-[0] not-italic relative shrink-0 text-[#1e2436] text-[18px] whitespace-nowrap" data-node-id="624:97478">
                            <p className="leading-[24px]">常用功能</p>
                          </div>
                        </div>
                        <div className="content-stretch flex gap-[4px] items-center justify-center px-[2px] relative rounded-[4px] shrink-0" data-node-id="624:97480" data-name="link">
                          <div className="relative shrink-0 size-[12px]" data-node-id="I624:97480;1341:12602" data-name="sidebar-linear-settings" />
                          <div className="[word-break:break-word] flex flex-col font-['Source_Han_Sans_CN:Medium'] justify-center leading-[0] not-italic relative shrink-0 text-[#646e87] text-[12px] whitespace-nowrap" data-node-id="I624:97480;1341:12603">
                            <p className="leading-[18px]">自定义</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative rounded-[8px] shrink-0 w-full" data-node-id="1229:93215" data-name="下拉布局">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid gap-x-[12px] gap-y-[12px] grid grid-cols-[repeat(4,minmax(0,1fr))] grid-rows-[repeat(2,fit-content(100%))] overflow-clip relative rounded-[inherit] size-full">
                      <div className="content-stretch flex flex-col gap-[4px] items-center justify-self-stretch min-w-[72px] px-[8px] relative rounded-[8px] self-stretch shrink-0" data-node-id="1229:93216" data-name="dropdown-menu-item">
                        <div className="bg-[#f8f8fb] content-stretch flex items-center justify-center p-[8px] relative rounded-[6px] shrink-0" data-node-id="1229:93218" data-name="图标">
                          <Group8 className="relative shrink-0 size-[24px]" />
                        </div>
                        <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-node-id="1229:93220" data-name="账户">
                          <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#1e2436] text-[12px] text-center text-ellipsis w-full whitespace-nowrap" data-node-id="1229:93221">
                            <p className="leading-[18px] overflow-hidden text-ellipsis">产品合作</p>
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col gap-[4px] items-center justify-self-stretch min-w-[72px] px-[8px] relative rounded-[8px] self-stretch shrink-0" data-node-id="1229:93239" data-name="dropdown-menu-item">
                        <div className="bg-[#f8f8fb] content-stretch flex items-center justify-center p-[8px] relative rounded-[6px] shrink-0" data-node-id="1229:93241" data-name="图标">
                          <Group8 className="relative shrink-0 size-[24px]" property1="Frame 2147208044" />
                        </div>
                        <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-node-id="1229:93243" data-name="账户">
                          <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#1e2436] text-[12px] text-center text-ellipsis w-full whitespace-nowrap" data-node-id="1229:93244">
                            <p className="leading-[18px] overflow-hidden text-ellipsis">报价评估</p>
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col gap-[4px] items-center justify-self-stretch min-w-[72px] px-[8px] relative rounded-[8px] self-stretch shrink-0" data-node-id="1229:93262" data-name="dropdown-menu-item">
                        <div className="bg-[#f8f8fb] content-stretch flex items-center justify-center p-[8px] relative rounded-[6px] shrink-0" data-node-id="1229:93264" data-name="图标">
                          <Group8 className="relative shrink-0 size-[24px]" property1="receipt-minus" />
                        </div>
                        <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-node-id="1229:93266" data-name="账户">
                          <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#1e2436] text-[12px] text-center text-ellipsis w-full whitespace-nowrap" data-node-id="1229:93267">
                            <p className="leading-[18px] overflow-hidden text-ellipsis">批量调价</p>
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col gap-[4px] items-center justify-self-stretch min-w-[72px] px-[8px] relative rounded-[8px] self-stretch shrink-0" data-node-id="1229:93285" data-name="dropdown-menu-item">
                        <div className="bg-[#f8f8fb] content-stretch flex items-center justify-center p-[8px] relative rounded-[6px] shrink-0" data-node-id="1229:93287" data-name="图标">
                          <Group8 className="relative shrink-0 size-[24px]" property1="wallet-add" />
                        </div>
                        <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-node-id="1229:93289" data-name="账户">
                          <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#1e2436] text-[12px] text-center text-ellipsis w-full whitespace-nowrap" data-node-id="1229:93290">
                            <p className="leading-[18px] overflow-hidden text-ellipsis">增购</p>
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col gap-[4px] items-center justify-self-stretch min-w-[72px] px-[8px] relative rounded-[8px] self-stretch shrink-0" data-node-id="1229:93308" data-name="dropdown-menu-item">
                        <div className="bg-[#f8f8fb] content-stretch flex items-center justify-center p-[8px] relative rounded-[6px] shrink-0" data-node-id="1229:93310" data-name="图标">
                          <Group8 className="relative shrink-0 size-[24px]" property1="cards" />
                        </div>
                        <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-node-id="1229:93312" data-name="账户">
                          <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#1e2436] text-[12px] text-center text-ellipsis w-full whitespace-nowrap" data-node-id="1229:93313">
                            <p className="leading-[18px] overflow-hidden text-ellipsis">新开商户</p>
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col gap-[4px] items-center justify-self-stretch min-w-[72px] px-[8px] relative rounded-[8px] self-stretch shrink-0" data-node-id="1229:93331" data-name="dropdown-menu-item">
                        <div className="bg-[#f8f8fb] content-stretch flex items-center justify-center p-[8px] relative rounded-[6px] shrink-0" data-node-id="1229:93333" data-name="图标">
                          <Group8 className="relative shrink-0 size-[24px]" property1="save-add" />
                        </div>
                        <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-node-id="1229:93335" data-name="账户">
                          <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#1e2436] text-[12px] text-center text-ellipsis w-full whitespace-nowrap" data-node-id="1229:93336">
                            <p className="leading-[18px] overflow-hidden text-ellipsis">邀请入驻</p>
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col gap-[4px] items-center justify-self-stretch min-w-[72px] px-[8px] relative rounded-[8px] self-stretch shrink-0" data-node-id="1229:93354" data-name="dropdown-menu-item">
                        <div className="bg-[#f8f8fb] content-stretch flex items-center justify-center p-[8px] relative rounded-[6px] shrink-0" data-node-id="1229:93356" data-name="图标">
                          <Group8 className="relative shrink-0 size-[24px]" property1="bag-2" />
                        </div>
                        <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-node-id="1229:93358" data-name="账户">
                          <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#1e2436] text-[12px] text-center text-ellipsis w-full whitespace-nowrap" data-node-id="1229:93359">
                            <p className="leading-[18px] overflow-hidden text-ellipsis">能力申请</p>
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col gap-[4px] items-center justify-self-stretch min-w-[72px] px-[8px] relative rounded-[8px] self-stretch shrink-0" data-node-id="1229:93377" data-name="dropdown-menu-item">
                        <div className="bg-[#f8f8fb] content-stretch flex items-center justify-center p-[8px] relative rounded-[6px] shrink-0" data-node-id="1229:93379" data-name="图标">
                          <Group8 className="relative shrink-0 size-[24px]" property1="more" />
                        </div>
                        <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-node-id="1229:93381" data-name="账户">
                          <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#1e2436] text-[12px] text-center text-ellipsis w-full whitespace-nowrap" data-node-id="1229:93382">
                            <p className="leading-[18px] overflow-hidden text-ellipsis">更多功能</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white border border-[#edeef3] border-solid content-stretch drop-shadow-[0px_1px_0.5px_rgba(20,41,79,0.02),0px_2px_2px_rgba(20,41,79,0.01)] flex flex-col gap-[16px] items-start p-[21px] relative rounded-[8px] shrink-0 w-full" data-node-id="636:113964" data-name="客户事件">
                  <div className="relative shrink-0 w-full" data-node-id="636:113965" data-name="标题">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative size-full">
                      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-node-id="636:113966" data-name="标题">
                        <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="636:113967" data-name="标题">
                          <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Semibold'] justify-center leading-[0] not-italic relative shrink-0 text-[#1e2436] text-[18px] whitespace-nowrap" data-node-id="636:113968">
                            <p className="leading-[24px]">客户异动</p>
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex gap-[4px] items-center justify-center px-[2px] relative rounded-[4px] shrink-0" data-node-id="636:113972" data-name="link">
                        <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] not-italic relative shrink-0 text-[#646e87] text-[12px] whitespace-nowrap" data-node-id="I636:113972;1341:12598">
                          <p className="leading-[18px]">更多</p>
                        </div>
                        <div className="relative shrink-0 size-[12px]" data-node-id="I636:113972;1341:12600" data-name="common-linear-arrow-right">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCommonLinearArrowStraightRight} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative shrink-0 w-full" data-node-id="636:113999">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start relative size-full">
                      <div className="content-stretch flex flex-col gap-[4px] items-start justify-center overflow-clip relative rounded-[8px] shrink-0 w-full" data-node-id="636:114000" data-name="event">
                        <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-node-id="636:114001">
                          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#1e2436] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="636:114003">
                            <p className="leading-[20px] overflow-hidden text-ellipsis">菲律宾Gcash收单跌0</p>
                          </div>
                          <div className="content-stretch flex gap-[4px] items-center relative rounded-[9999px] shrink-0" data-node-id="636:114007" data-name="tag">
                            <div className="bg-[#e5485d] content-stretch flex flex-col items-center justify-center p-[2px] relative rounded-[8px] shrink-0" data-node-id="636:114008" data-name="badge">
                              <div className="flex items-center justify-center relative shrink-0" data-node-id="636:114009">
                                <div className="-scale-y-100 flex-none rotate-180">
                                  <div className="bg-[#d9d9d9] relative size-0" data-name="dot" />
                                </div>
                              </div>
                            </div>
                            <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] not-italic relative shrink-0 text-[#e5485d] text-[12px] whitespace-nowrap" data-node-id="636:114010">
                              <p className="leading-[18px]">未通知</p>
                            </div>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0 w-full" data-node-id="636:114014">
                          <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-node-id="636:114015">
                            <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#646e87] text-[12px] text-ellipsis whitespace-nowrap" data-node-id="636:114018">
                              <p className="leading-[18px] overflow-hidden text-ellipsis">菲律宾Gcash渠道下线引起支付方式的下线时需要对客通知。菲律宾Gcash渠道下线引起支付方式的下线时需要对客通知。</p>
                            </div>
                          </div>
                          <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-node-id="636:114019">
                            <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] not-italic relative shrink-0 text-[#646e87] text-[12px] whitespace-nowrap" data-node-id="636:114020">
                              <p className="leading-[18px]">影响客户 32</p>
                            </div>
                            <div className="flex h-[10px] items-center justify-center relative shrink-0 w-0" data-node-id="636:114021">
                              <div className="flex-none rotate-90">
                                <div className="h-0 relative w-[10px]">
                                  <div className="absolute inset-[-1px_0_0_0]">
                                    <img alt="" className="block max-w-none size-full" src={imgLine25} />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] min-w-px not-italic relative text-[#646e87] text-[12px]" data-node-id="636:114024">
                              <p className="leading-[18px]">UTC +0:00 2025-06-09 10:29</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="h-px relative shrink-0 w-full" data-node-id="1268:41776" data-name="divider">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgDivider} />
                      </div>
                      <div className="content-stretch flex flex-col gap-[4px] items-start justify-center overflow-clip relative rounded-[8px] shrink-0 w-full" data-node-id="1268:41740" data-name="event">
                        <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-node-id="1268:41741">
                          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#1e2436] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="1268:41743">
                            <p className="leading-[20px] overflow-hidden text-ellipsis">菲律宾Gcash收单跌0</p>
                          </div>
                          <div className="content-stretch flex gap-[4px] items-center relative rounded-[9999px] shrink-0" data-node-id="1268:41747" data-name="tag">
                            <div className="bg-[#e5485d] content-stretch flex flex-col items-center justify-center p-[2px] relative rounded-[8px] shrink-0" data-node-id="1268:41748" data-name="badge">
                              <div className="flex items-center justify-center relative shrink-0" data-node-id="1268:41749">
                                <div className="-scale-y-100 flex-none rotate-180">
                                  <div className="bg-[#d9d9d9] relative size-0" data-name="dot" />
                                </div>
                              </div>
                            </div>
                            <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] not-italic relative shrink-0 text-[#e5485d] text-[12px] whitespace-nowrap" data-node-id="1268:41750">
                              <p className="leading-[18px]">未通知</p>
                            </div>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0 w-full" data-node-id="1268:41754">
                          <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-node-id="1268:41755">
                            <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#646e87] text-[12px] text-ellipsis whitespace-nowrap" data-node-id="1268:41758">
                              <p className="leading-[18px] overflow-hidden text-ellipsis">菲律宾Gcash渠道下线引起支付方式的下线时需要对客通知。菲律宾Gcash渠道下线引起支付方式的下线时需要对客通知。</p>
                            </div>
                          </div>
                          <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-node-id="1268:41759">
                            <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] not-italic relative shrink-0 text-[#646e87] text-[12px] whitespace-nowrap" data-node-id="1268:41760">
                              <p className="leading-[18px]">影响客户 32</p>
                            </div>
                            <div className="flex h-[10px] items-center justify-center relative shrink-0 w-0" data-node-id="1268:41761">
                              <div className="flex-none rotate-90">
                                <div className="h-0 relative w-[10px]">
                                  <div className="absolute inset-[-1px_0_0_0]">
                                    <img alt="" className="block max-w-none size-full" src={imgLine25} />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] min-w-px not-italic relative text-[#646e87] text-[12px]" data-node-id="1268:41764">
                              <p className="leading-[18px]">UTC +0:00 2025-06-09 10:29</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="h-px relative shrink-0 w-full" data-node-id="636:114035" data-name="divider">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgDivider} />
                      </div>
                      <div className="content-stretch flex flex-col gap-[4px] items-start justify-center overflow-clip relative rounded-[8px] shrink-0 w-full" data-node-id="636:114036" data-name="event">
                        <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-node-id="636:114037">
                          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#1e2436] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="636:114039">
                            <p className="leading-[20px] overflow-hidden text-ellipsis">菲律宾Gcash收单跌0</p>
                          </div>
                          <div className="content-stretch flex gap-[4px] items-center relative rounded-[9999px] shrink-0" data-node-id="636:114043" data-name="tag">
                            <div className="bg-[#18a765] content-stretch flex flex-col items-center justify-center p-[2px] relative rounded-[8px] shrink-0" data-node-id="636:114044" data-name="badge">
                              <div className="flex items-center justify-center relative shrink-0" data-node-id="636:114045">
                                <div className="-scale-y-100 flex-none rotate-180">
                                  <div className="bg-[#d9d9d9] relative size-0" data-name="dot" />
                                </div>
                              </div>
                            </div>
                            <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] not-italic relative shrink-0 text-[#18a765] text-[12px] whitespace-nowrap" data-node-id="636:114046">
                              <p className="leading-[18px]">已通知</p>
                            </div>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0 w-full" data-node-id="636:114060">
                          <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-node-id="636:114061">
                            <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#646e87] text-[12px] text-ellipsis whitespace-nowrap" data-node-id="636:114064">
                              <p className="leading-[18px] overflow-hidden text-ellipsis">菲律宾Gcash渠道下线引起支付方式的下线时需要对客通知。菲律宾Gcash渠道下线引起支付方式的下线时需要对客通知。</p>
                            </div>
                          </div>
                          <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-node-id="636:114065">
                            <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] not-italic relative shrink-0 text-[#646e87] text-[12px] whitespace-nowrap" data-node-id="636:114066">
                              <p className="leading-[18px]">影响客户 32</p>
                            </div>
                            <div className="flex h-[10px] items-center justify-center relative shrink-0 w-0" data-node-id="636:114067">
                              <div className="flex-none rotate-90">
                                <div className="h-0 relative w-[10px]">
                                  <div className="absolute inset-[-1px_0_0_0]">
                                    <img alt="" className="block max-w-none size-full" src={imgLine25} />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] min-w-px not-italic relative text-[#646e87] text-[12px]" data-node-id="636:114070">
                              <p className="leading-[18px]">UTC +0:00 2025-06-09 10:29</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="h-px relative shrink-0 w-full" data-node-id="636:114071" data-name="divider">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgDivider} />
                      </div>
                      <div className="content-stretch flex flex-col gap-[4px] items-start justify-center overflow-clip relative rounded-[8px] shrink-0 w-full" data-node-id="636:114072" data-name="event">
                        <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-node-id="636:114073">
                          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#1e2436] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="636:114075">
                            <p className="leading-[20px] overflow-hidden text-ellipsis">菲律宾Gcash收单跌0</p>
                          </div>
                          <div className="content-stretch flex gap-[4px] items-center relative rounded-[9999px] shrink-0" data-node-id="636:114079" data-name="tag">
                            <div className="bg-[#18a765] content-stretch flex flex-col items-center justify-center p-[2px] relative rounded-[8px] shrink-0" data-node-id="636:114080" data-name="badge">
                              <div className="flex items-center justify-center relative shrink-0" data-node-id="636:114081">
                                <div className="-scale-y-100 flex-none rotate-180">
                                  <div className="bg-[#d9d9d9] relative size-0" data-name="dot" />
                                </div>
                              </div>
                            </div>
                            <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] not-italic relative shrink-0 text-[#18a765] text-[12px] whitespace-nowrap" data-node-id="636:114082">
                              <p className="leading-[18px]">已通知</p>
                            </div>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0 w-full" data-node-id="636:114096">
                          <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-node-id="636:114097">
                            <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#646e87] text-[12px] text-ellipsis whitespace-nowrap" data-node-id="636:114100">
                              <p className="leading-[18px] overflow-hidden text-ellipsis">菲律宾Gcash渠道下线引起支付方式的下线时需要对客通知。菲律宾Gcash渠道下线引起支付方式的下线时需要对客通知。</p>
                            </div>
                          </div>
                          <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-node-id="636:114101">
                            <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] not-italic relative shrink-0 text-[#646e87] text-[12px] whitespace-nowrap" data-node-id="636:114102">
                              <p className="leading-[18px]">影响客户 32</p>
                            </div>
                            <div className="flex h-[10px] items-center justify-center relative shrink-0 w-0" data-node-id="636:114103">
                              <div className="flex-none rotate-90">
                                <div className="h-0 relative w-[10px]">
                                  <div className="absolute inset-[-1px_0_0_0]">
                                    <img alt="" className="block max-w-none size-full" src={imgLine26} />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] min-w-px not-italic relative text-[#646e87] text-[12px]" data-node-id="636:114106">
                              <p className="leading-[18px]">UTC +0:00 2025-06-09 10:29</p>
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
    </div>
  );
}