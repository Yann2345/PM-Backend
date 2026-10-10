const assetPathPrefix = `${import.meta.env.BASE_URL}assets/home`;
const imgProperty1Default = `${assetPathPrefix}/09b4d.svg`;
const imgVuesaxBulkReceiptMinus = `${assetPathPrefix}/d8cae.svg`;
const imgWalletAdd = `${assetPathPrefix}/a1d2f.svg`;
const imgCards = `${assetPathPrefix}/80ff0.svg`;
const imgVuesaxBulkSaveAdd = `${assetPathPrefix}/dbb98.svg`;
const imgRectangle1504Stroke = `${assetPathPrefix}/96426.svg`;
const imgBag2 = `${assetPathPrefix}/5816c.svg`;
const imgEllipse858 = `${assetPathPrefix}/464d6.svg`;
const imgProperty1Frame2147208044 = `${assetPathPrefix}/cc6ac.svg`;
const imgProperty1More = `${assetPathPrefix}/0159e.svg`;
const img = `${assetPathPrefix}/0c4fe.svg`;
const imgClock = `${assetPathPrefix}/20386.svg`;
const imgStar = `${assetPathPrefix}/ea6d7.svg`;
const imgClock1 = `${assetPathPrefix}/3a60d.svg`;
const imgCommonFilledDownloading = `${assetPathPrefix}/3ecae.svg`;
const imgTickCircle = `${assetPathPrefix}/178f0.svg`;
const imgCloseCircle = `${assetPathPrefix}/26f30.svg`;
const imgCommonLinearLocationLeft = `${assetPathPrefix}/0af68.svg`;
const imgCommonLinearArrowLeft = `${assetPathPrefix}/c6e8e.svg`;
const imgCommonLinearArrowRight = `${assetPathPrefix}/dd78e.svg`;
const imgCommonLinearLocationRight = `${assetPathPrefix}/c2c24.svg`;
const imgIcon = `${assetPathPrefix}/4e849.svg`;
const imgRectangle24 = `${assetPathPrefix}/983f2.png`;
const imgAvatar = `${assetPathPrefix}/avatar.png`;
const imgRectangle21 = `${assetPathPrefix}/2ee70.png`;
const imgRectangle22 = `${assetPathPrefix}/ddd2c.png`;
const imgRectangle23 = `${assetPathPrefix}/80b20.png`;
const imgRectangle25 = `${assetPathPrefix}/831af.png`;
const imgGroup = `${assetPathPrefix}/bd4dd.svg`;
const imgGroupLight = `${import.meta.env.BASE_URL}assets/form/282f0.svg`;
const imgGroup1Light = `${import.meta.env.BASE_URL}assets/form/35434.svg`;
const imgGroup1 = `${assetPathPrefix}/87fe3.svg`;
const imgCommonLinearMenu = `${assetPathPrefix}/531e2.svg`;
const imgVideoCircle = `${assetPathPrefix}/56994.svg`;
const imgGrid6 = `${assetPathPrefix}/17aa3.svg`;
const imgCommonLinearFile = `${assetPathPrefix}/b71a9.svg`;
const imgTaskSquare = `${assetPathPrefix}/bc535.svg`;
const imgCommonLinearArrowRight1 = `${assetPathPrefix}/104a3.svg`;
const imgSearchNormal = `${assetPathPrefix}/c7403.svg`;
const imgNotification = `${assetPathPrefix}/4d75d.svg`;
const imgCommonLinearMessageQuestion = `${assetPathPrefix}/a92c9.svg`;
const imgSidebarLinearSettings = `${assetPathPrefix}/6638a.svg`;
const imgCommonLinearArrowDown = `${assetPathPrefix}/8c44f.svg`;
const imgRectangle7 = `${assetPathPrefix}/62a23.svg`;
const imgGroup2 = `${assetPathPrefix}/61a5f.svg`;
const imgPolygon2 = `${assetPathPrefix}/f2c57.svg`;
const imgPolygon3 = `${assetPathPrefix}/3d8fe.svg`;
const imgRefund = `${assetPathPrefix}/91567.svg`;
const imgCommonLinearArrowStraightRight = `${assetPathPrefix}/86c09.svg`;
const imgLine1 = `${assetPathPrefix}/2971d.svg`;
const imgVector11 = `${assetPathPrefix}/51c97.svg`;
const imgVector10 = `${assetPathPrefix}/72f65.svg`;
const imgCommonLinearArrowStraightRight1 = `${assetPathPrefix}/5a06d.svg`;
const imgSidebarLinearProfileUser = `${assetPathPrefix}/c0135.svg`;
const imgSidebarLinearSeal = `${assetPathPrefix}/0a2cd.svg`;
const imgCommonLinearBoxAdd = `${assetPathPrefix}/03387.svg`;
const imgLine25 = `${assetPathPrefix}/0a0e1.svg`;
const imgDivider = `${assetPathPrefix}/e9acb.svg`;
const imgLine26 = `${assetPathPrefix}/3d165.svg`;
const imgCommonLinearRefresh = `${assetPathPrefix}/08222.svg`;

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
    <div className={className || "relative size-[24px]"} id={isMore ? "node-1_19938" : isFrame2147208044 ? "node-1_19932" : isBag2 ? "node-1_19918" : isSaveAdd ? "node-1_19909" : isCards ? "node-1_19898" : isWalletAdd ? "node-1_19892" : isReceiptMinus ? "node-1_19884" : "node-1_19874"}>
      {["Default", "Frame 2147208044", "more"].includes(property1) && <img alt="" className="absolute block inset-0 max-w-none size-full" src={isMore ? imgProperty1More : isFrame2147208044 ? imgProperty1Frame2147208044 : imgProperty1Default} />}
      {isReceiptMinus && (
        <div className="absolute contents inset-0" data-node-id="1:19885" data-name="vuesax/bulk/receipt-minus">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVuesaxBulkReceiptMinus} />
        </div>
      )}
      {isWalletAdd && (
        <div className="absolute contents left-[2px] top-[0.44px]" data-node-id="1:19893" data-name="vuesax/bulk/wallet-add">
          <div className="absolute inset-[1.84%_8.33%_8.33%_8.33%]" data-node-id="1:19894" data-name="wallet-add">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgWalletAdd} />
          </div>
        </div>
      )}
      {isCards && (
        <div className="absolute contents inset-[12.5%_8.33%]" data-node-id="1:19899" data-name="vuesax/bulk/cards">
          <div className="absolute inset-[12.5%_8.33%]" data-node-id="1:19900" data-name="cards">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCards} />
          </div>
        </div>
      )}
      {isSaveAdd && (
        <div className="absolute contents inset-0" data-node-id="1:19910" data-name="vuesax/bulk/save-add">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVuesaxBulkSaveAdd} />
        </div>
      )}
      {isBag2 && (
        <>
          <div className="absolute h-[7.518px] left-[7px] top-[2px] w-[10.04px]" data-node-id="1:19919" data-name="Rectangle 1504 (Stroke)">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRectangle1504Stroke} />
          </div>
          <div className="absolute contents inset-[31.58%_13.16%_8.33%_13.15%]" data-node-id="1:19920" data-name="vuesax/bulk/bag-2">
            <div className="absolute inset-[31.58%_13.16%_8.33%_13.15%]" data-node-id="1:19921" data-name="bag-2">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBag2} />
            </div>
          </div>
          <div className="absolute left-[7px] size-[2.5px] top-[11px]" data-node-id="1:19923">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse858} />
          </div>
          <div className="absolute left-[14.5px] size-[2.5px] top-[11px]" data-node-id="1:19924">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse858} />
          </div>
        </>
      )}
    </div>
  );
}

type TableCellSorterProps = {
  className?: string;
  propValue?: "默认";
};

function TableCellSorter({ className, propValue = "默认" }: TableCellSorterProps) {
  return (
    <div className={className || "relative size-[12px]"} data-node-id="1:16328">
      <img alt="" className="absolute block inset-0 max-w-none size-full" src={img} />
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
    <div className={className || "bg-white content-stretch flex flex-col items-start relative w-[1120px]"} data-node-id="1:17888">
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="1:17889" data-name="水平布局插槽">
        {children || (
          <>
            <div className="bg-[#f7f9fc] border-[#edeff2] border-b border-solid content-stretch flex items-start overflow-clip relative rounded-[8px] shrink-0 w-full" data-node-id="1:17890" data-name="row">
              <div className="content-stretch flex items-center min-h-[40px] px-[12px] py-[10px] relative shrink-0" data-node-id="1:17892" data-name="table-cell-header">
                <div className="flex flex-row items-center self-stretch" data-node-id="I1:17892;1382:11072">
                  <div className="content-stretch flex h-full items-center relative shrink-0" data-name="Content">
                    <div className="relative shrink-0 size-[16px]" data-node-id="I1:17892;1382:11073" data-name="checkbox-item">
                      <div className="absolute bg-white border border-[#d4dee9] border-solid inset-0 rounded-[4px]" data-node-id="I1:17892;1382:11073;170:2053" data-name="Checkbox" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-[1_0_0] items-center min-h-[40px] min-w-[240px] px-[12px] py-[10px] relative" data-node-id="1:17893" data-name="table-cell-header">
                <div className="flex flex-row items-center self-stretch" data-node-id="I1:17893;567:4277">
                  <div className="content-stretch flex gap-[4px] h-full items-center relative shrink-0 w-[136px]" data-name="Content">
                    <div className="[word-break:break-word] flex flex-col font-['Noto_Sans_SC:Medium'] font-medium justify-center leading-[0] overflow-hidden relative shrink-0 text-[#667691] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="I1:17893;566:12188">
                      <p className="leading-[20px]">主文本</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-[1_0_0] items-center min-h-[40px] min-w-[120px] px-[12px] py-[10px] relative" data-node-id="1:17894" data-name="table-cell-header">
                <div className="flex flex-row items-center self-stretch" data-node-id="I1:17894;567:4277">
                  <div className="content-stretch flex gap-[4px] h-full items-center relative shrink-0 w-[136px]" data-name="Content">
                    <div className="[word-break:break-word] flex flex-col font-['Noto_Sans_SC:Medium'] font-medium justify-center leading-[0] overflow-hidden relative shrink-0 text-[#667691] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="I1:17894;566:12188">
                      <p className="leading-[20px]">业务标签</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-[1_0_0] items-center min-h-[40px] min-w-[120px] px-[12px] py-[10px] relative" data-node-id="1:17895" data-name="table-cell-header">
                <div className="flex flex-row items-center self-stretch" data-node-id="I1:17895;567:4277">
                  <div className="content-stretch flex gap-[4px] h-full items-center relative shrink-0 w-[136px]" data-name="Content">
                    <div className="[word-break:break-word] flex flex-col font-['Noto_Sans_SC:Medium'] font-medium justify-center leading-[0] overflow-hidden relative shrink-0 text-[#667691] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="I1:17895;566:12188">
                      <p className="leading-[20px]">负责人</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-[1_0_0] items-center min-h-[40px] min-w-[120px] px-[12px] py-[10px] relative" data-node-id="1:17896" data-name="table-cell-header">
                <div className="flex flex-row items-center self-stretch" data-node-id="I1:17896;567:4277">
                  <div className="content-stretch flex gap-[4px] h-full items-center relative shrink-0 w-[136px]" data-name="Content">
                    <div className="[word-break:break-word] flex flex-col font-['Noto_Sans_SC:Medium'] font-medium justify-center leading-[0] overflow-hidden relative shrink-0 text-[#667691] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="I1:17896;566:12188">
                      <p className="leading-[20px]">产品</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-[1_0_0] items-center min-h-[40px] min-w-[160px] px-[12px] py-[10px] relative" data-node-id="1:17897" data-name="table-cell-header">
                <div className="flex flex-row items-center self-stretch" data-node-id="I1:17897;567:4277">
                  <div className="content-stretch flex gap-[4px] h-full items-center relative shrink-0 w-[136px]" data-name="Content">
                    <div className="[word-break:break-word] flex flex-col font-['Noto_Sans_SC:Medium'] font-medium justify-center leading-[0] overflow-hidden relative shrink-0 text-[#667691] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="I1:17897;566:12188">
                      <p className="leading-[20px]">进度标签</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex items-center min-h-[40px] px-[12px] py-[10px] relative shrink-0 w-[160px]" data-node-id="1:17898" data-name="table-cell-header">
                <div className="flex flex-row items-center self-stretch" data-node-id="I1:17898;567:4275">
                  <div className="content-stretch flex gap-[4px] h-full items-center relative shrink-0 w-[136px]" data-name="Content">
                    <div className="[word-break:break-word] flex flex-col font-['Noto_Sans_SC:Medium'] font-medium justify-center leading-[0] overflow-hidden relative shrink-0 text-[#667691] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="I1:17898;566:13545">
                      <p className="leading-[20px]">时间</p>
                    </div>
                    <TableCellSorter className="relative shrink-0 size-[12px]" />
                  </div>
                </div>
              </div>
              <div className="content-stretch flex items-center min-h-[40px] px-[12px] py-[10px] relative shrink-0 w-[80px]" data-node-id="1:17903" data-name="table-cell-header">
                <div className="flex flex-row items-center self-stretch" data-node-id="I1:17903;567:4275">
                  <div className="content-stretch flex gap-[4px] h-full items-center relative shrink-0" data-name="Content">
                    <div className="[word-break:break-word] flex flex-col font-['Noto_Sans_SC:Medium'] font-medium justify-center leading-[0] overflow-hidden relative shrink-0 text-[#667691] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="I1:17903;566:13545">
                      <p className="leading-[20px]">操作</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-[#edeff2] border-b border-solid content-stretch flex items-start min-h-[40px] relative shrink-0 w-full" data-node-id="1:17904" data-name="row">
              <div className="border-0 border-[#edeff2] border-solid content-stretch flex items-center px-[12px] py-[10px] relative self-stretch shrink-0" data-node-id="1:17906" data-name="table-cell-body">
                <div className="content-stretch flex h-full items-center relative shrink-0" data-node-id="I1:17906;578:10663" data-name="Content">
                  <div className="relative shrink-0 size-[16px]" data-node-id="I1:17906;578:10871" data-name="checkbox-item">
                    <div className="absolute bg-white border border-[#d4dee9] border-solid inset-0 rounded-[4px]" data-node-id="I1:17906;578:10871;170:2053" data-name="Checkbox" />
                  </div>
                </div>
              </div>
              <div className="border-0 border-[#edeff2] border-solid content-stretch flex flex-[1_0_0] items-center min-w-[240px] px-[12px] py-[10px] relative" data-node-id="1:17907" data-name="table-cell-body">
                <div className="flex flex-[1_0_0] flex-row items-center self-stretch" data-node-id="I1:17907;2985:32162">
                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] h-full items-start justify-center min-w-px relative" data-name="Content">
                    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I1:17907;574:4502" data-name="Content">
                      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Noto_Sans_SC:SemiBold'] font-semibold justify-center leading-[0] min-w-px overflow-hidden relative text-[#1a2c44] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="I1:17907;574:4503">
                        <p className="leading-[20px] overflow-hidden text-ellipsis">阿里巴巴网络技术有限公司</p>
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I1:17907;2985:32766" data-name="caption">
                      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Noto_Sans_SC:Regular'] font-normal justify-center leading-[0] min-w-px relative text-[#667691] text-[14px]" data-node-id="I1:17907;2985:32768">
                        <p className="leading-[20px]">说明文字说明文字说明文字</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-0 border-[#edeff2] border-solid content-stretch flex flex-[1_0_0] items-center min-w-[120px] px-[12px] py-[10px] relative self-stretch" data-node-id="1:17908" data-name="table-cell-body">
                <div className="content-center flex flex-[1_0_0] flex-wrap gap-y-[4px] h-full items-center min-w-px relative" data-node-id="I1:17908;574:4925" data-name="标签插槽">
                  <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="I1:17908;574:4925;1:17910" data-name="会员等级">
                    <div className="bg-[#def2ff] content-stretch flex gap-[4px] items-center px-[6px] py-px relative rounded-[4px] shrink-0" data-node-id="I1:17908;574:4925;1:17910;2835:111866" data-name="tag">
                      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans_SC:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#005ad6] text-[14px] whitespace-nowrap" data-node-id="I1:17908;574:4925;1:17910;2835:111866;510:8448">
                        <p className="leading-[20px]">普通</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-0 border-[#edeff2] border-solid content-stretch flex flex-[1_0_0] items-center min-w-[120px] px-[12px] py-[10px] relative self-stretch" data-node-id="1:17911" data-name="table-cell-body">
                <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-node-id="I1:17911;2985:32162" data-name="Content">
                  <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I1:17911;574:4502" data-name="Content">
                    <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Noto_Sans_SC:Regular'] font-normal justify-center leading-[0] min-w-px overflow-hidden relative text-[#1a2c44] text-[14px] text-ellipsis" data-node-id="I1:17911;574:4503">
                      <p className="leading-[20px]">张三</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-0 border-[#edeff2] border-solid content-stretch flex flex-[1_0_0] items-center min-w-[120px] px-[12px] py-[10px] relative self-stretch" data-node-id="1:17912" data-name="table-cell-body">
                <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-node-id="I1:17912;2985:32162" data-name="Content">
                  <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I1:17912;574:4502" data-name="Content">
                    <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Noto_Sans_SC:Regular'] font-normal justify-center leading-[0] min-w-px overflow-hidden relative text-[#1a2c44] text-[14px] text-ellipsis" data-node-id="I1:17912;574:4503">
                      <p className="leading-[20px]">23</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-0 border-[#edeff2] border-solid content-stretch flex flex-[1_0_0] items-center min-w-[160px] px-[12px] py-[10px] relative self-stretch" data-node-id="1:17913" data-name="table-cell-body">
                <div className="content-center flex flex-[1_0_0] flex-wrap gap-[4px] h-full items-center min-w-px relative" data-node-id="I1:17913;138:22235" data-name="标签插槽">
                  <div className="relative shrink-0 size-[12px]" data-node-id="I1:17913;138:22655" data-name="common-filled-clock">
                    <div className="absolute inset-[8.33%]" data-node-id="I1:17913;138:22655;110:4551" data-name="clock">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgClock} />
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-node-id="I1:17913;138:22236" data-name="tag">
                    <div className="[word-break:break-word] flex flex-col font-['Noto_Sans_SC:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#1a2c44] text-[14px] whitespace-nowrap" data-node-id="I1:17913;138:22236;12616:46156">
                      <p className="leading-[20px]">初步接触</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-0 border-[#edeff2] border-solid content-stretch flex items-center min-w-[100px] px-[12px] py-[10px] relative self-stretch shrink-0 w-[160px]" data-node-id="1:17914" data-name="table-cell-body">
                <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-node-id="I1:17914;2985:32163" data-name="Content">
                  <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I1:17914;1312:14702" data-name="Content">
                    <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Noto_Sans_SC:Regular'] font-normal justify-center leading-[0] min-w-px relative text-[#1a2c44] text-[14px]" data-node-id="I1:17914;1312:14703">
                      <p className="leading-[20px]">2025-02-14 10:20:11</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-0 border-[#edeff2] border-solid content-stretch flex items-center px-[12px] py-[10px] relative self-stretch shrink-0" data-node-id="1:17915" data-name="table-cell-body">
                <div className="content-stretch flex items-center justify-end relative shrink-0" data-node-id="I1:17915;578:10532" data-name="button-group">
                  <div className="content-stretch flex gap-[12px] items-center justify-end relative shrink-0" data-node-id="I1:17915;578:10532;12640:3505" data-name="按钮布局插槽">
                    <div className="[word-break:break-word] flex flex-col font-['Noto_Sans_SC:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#0c71ff] text-[14px] text-center whitespace-nowrap" data-node-id="I1:17915;578:10532;12640:3505;1:17917">
                      <p className="leading-[20px]">详情</p>
                    </div>
                    <div className="relative shrink-0 size-[16px]" data-node-id="I1:17915;578:10532;12640:3505;1:17918" data-name="common-filled-more">
                      <div className="-translate-y-1/2 absolute h-[3.333px] left-[6.25%] right-[6.25%] top-1/2" data-node-id="I1:17915;578:10532;12640:3505;1:17918;110:4468" data-name="star">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgStar} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#f7f9fc] border-[#edeff2] border-b border-solid content-stretch flex items-start min-h-[40px] relative rounded-[8px] shrink-0 w-full" data-node-id="1:17919" data-name="row">
              <div className="border-0 border-[#edeff2] border-solid content-stretch flex items-center px-[12px] py-[10px] relative self-stretch shrink-0" data-node-id="1:17921" data-name="table-cell-body">
                <div className="content-stretch flex h-full items-center relative shrink-0" data-node-id="I1:17921;578:10663" data-name="Content">
                  <div className="relative shrink-0 size-[16px]" data-node-id="I1:17921;578:10871" data-name="checkbox-item">
                    <div className="absolute bg-white border border-[#d4dee9] border-solid inset-0 rounded-[4px]" data-node-id="I1:17921;578:10871;170:2053" data-name="Checkbox" />
                  </div>
                </div>
              </div>
              <div className="border-0 border-[#edeff2] border-solid content-stretch flex flex-[1_0_0] items-center min-w-[240px] px-[12px] py-[10px] relative" data-node-id="1:17922" data-name="table-cell-body">
                <div className="flex flex-[1_0_0] flex-row items-center self-stretch" data-node-id="I1:17922;2985:32162">
                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] h-full items-start justify-center min-w-px relative" data-name="Content">
                    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I1:17922;574:4502" data-name="Content">
                      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Noto_Sans_SC:SemiBold'] font-semibold justify-center leading-[0] min-w-px overflow-hidden relative text-[#1a2c44] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="I1:17922;574:4503">
                        <p className="leading-[20px] overflow-hidden text-ellipsis">鼠标悬浮效果</p>
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I1:17922;2985:32766" data-name="caption">
                      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Noto_Sans_SC:Regular'] font-normal justify-center leading-[0] min-w-px relative text-[#667691] text-[14px]" data-node-id="I1:17922;2985:32768">
                        <p className="leading-[20px]">说明文字说明文字说明文字</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-0 border-[#edeff2] border-solid content-stretch flex flex-[1_0_0] items-center min-w-[120px] px-[12px] py-[10px] relative self-stretch" data-node-id="1:17923" data-name="table-cell-body">
                <div className="content-center flex flex-[1_0_0] flex-wrap gap-y-[4px] h-full items-center min-w-px relative" data-node-id="I1:17923;574:4925" data-name="标签插槽">
                  <div className="content-stretch flex flex-col items-center justify-center relative rounded-[4px] shrink-0" data-node-id="I1:17923;574:4925;1:17925" data-name="会员等级">
                    <div className="bg-[#dbf7eb] content-stretch flex gap-[4px] items-center px-[6px] py-px relative rounded-[4px] shrink-0" data-node-id="I1:17923;574:4925;1:17925;2835:111945" data-name="tag">
                      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans_SC:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#30b57c] text-[14px] whitespace-nowrap" data-node-id="I1:17923;574:4925;1:17925;2835:111945;510:8950">
                        <p className="leading-[20px]">SMA</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-0 border-[#edeff2] border-solid content-stretch flex flex-[1_0_0] items-center min-w-[120px] px-[12px] py-[10px] relative self-stretch" data-node-id="1:17926" data-name="table-cell-body">
                <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-node-id="I1:17926;2985:32162" data-name="Content">
                  <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I1:17926;574:4502" data-name="Content">
                    <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Noto_Sans_SC:Regular'] font-normal justify-center leading-[0] min-w-px overflow-hidden relative text-[#1a2c44] text-[14px] text-ellipsis" data-node-id="I1:17926;574:4503">
                      <p className="leading-[20px]">张三</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-0 border-[#edeff2] border-solid content-stretch flex flex-[1_0_0] items-center min-w-[120px] px-[12px] py-[10px] relative self-stretch" data-node-id="1:17927" data-name="table-cell-body">
                <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-node-id="I1:17927;2985:32162" data-name="Content">
                  <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I1:17927;574:4502" data-name="Content">
                    <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Noto_Sans_SC:Regular'] font-normal justify-center leading-[0] min-w-px overflow-hidden relative text-[#1a2c44] text-[14px] text-ellipsis" data-node-id="I1:17927;574:4503">
                      <p className="leading-[20px]">2</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-0 border-[#edeff2] border-solid content-stretch flex flex-[1_0_0] items-center min-w-[160px] px-[12px] py-[10px] relative self-stretch" data-node-id="1:17928" data-name="table-cell-body">
                <div className="content-center flex flex-[1_0_0] flex-wrap gap-[4px] h-full items-center min-w-px relative" data-node-id="I1:17928;138:22678" data-name="标签插槽">
                  <div className="relative shrink-0 size-[12px]" data-node-id="I1:17928;138:22679" data-name="common-filled-clock">
                    <div className="absolute inset-[8.33%]" data-node-id="I1:17928;138:22679;110:4551" data-name="clock">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgClock1} />
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-node-id="I1:17928;138:22680" data-name="tag">
                    <div className="[word-break:break-word] flex flex-col font-['Noto_Sans_SC:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#1a2c44] text-[14px] whitespace-nowrap" data-node-id="I1:17928;138:22680;12616:46156">
                      <p className="leading-[20px]">意向沟通</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-0 border-[#edeff2] border-solid content-stretch flex items-center min-w-[100px] px-[12px] py-[10px] relative self-stretch shrink-0 w-[160px]" data-node-id="1:17929" data-name="table-cell-body">
                <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-node-id="I1:17929;2985:32163" data-name="Content">
                  <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I1:17929;1312:14702" data-name="Content">
                    <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Noto_Sans_SC:Regular'] font-normal justify-center leading-[0] min-w-px relative text-[#1a2c44] text-[14px]" data-node-id="I1:17929;1312:14703">
                      <p className="leading-[20px]">2025-02-14 10:20:11</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-0 border-[#edeff2] border-solid content-stretch flex items-center px-[12px] py-[10px] relative self-stretch shrink-0" data-node-id="1:17930" data-name="table-cell-body">
                <div className="content-stretch flex items-center justify-end relative shrink-0" data-node-id="I1:17930;578:10532" data-name="button-group">
                  <div className="content-stretch flex gap-[12px] items-center justify-end relative shrink-0" data-node-id="I1:17930;578:10532;12640:3505" data-name="按钮布局插槽">
                    <div className="[word-break:break-word] flex flex-col font-['Noto_Sans_SC:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#0c71ff] text-[14px] text-center whitespace-nowrap" data-node-id="I1:17930;578:10532;12640:3505;1:17932">
                      <p className="leading-[20px]">详情</p>
                    </div>
                    <div className="relative shrink-0 size-[16px]" data-node-id="I1:17930;578:10532;12640:3505;1:17933" data-name="common-filled-more">
                      <div className="-translate-y-1/2 absolute h-[3.333px] left-[6.25%] right-[6.25%] top-1/2" data-node-id="I1:17930;578:10532;12640:3505;1:17933;110:4468" data-name="star">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgStar} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-[#edeff2] border-b border-solid content-stretch flex items-start min-h-[40px] relative shrink-0 w-full" data-node-id="1:17934" data-name="row">
              <div className="border-0 border-[#edeff2] border-solid content-stretch flex items-center px-[12px] py-[10px] relative self-stretch shrink-0" data-node-id="1:17936" data-name="table-cell-body">
                <div className="content-stretch flex h-full items-center relative shrink-0" data-node-id="I1:17936;578:10663" data-name="Content">
                  <div className="relative shrink-0 size-[16px]" data-node-id="I1:17936;578:10871" data-name="checkbox-item">
                    <div className="absolute bg-white border border-[#d4dee9] border-solid inset-0 rounded-[4px]" data-node-id="I1:17936;578:10871;170:2053" data-name="Checkbox" />
                  </div>
                </div>
              </div>
              <div className="border-0 border-[#edeff2] border-solid content-stretch flex flex-[1_0_0] items-center min-w-[240px] px-[12px] py-[10px] relative" data-node-id="1:17937" data-name="table-cell-body">
                <div className="flex flex-[1_0_0] flex-row items-center self-stretch" data-node-id="I1:17937;2985:32162">
                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] h-full items-start justify-center min-w-px relative" data-name="Content">
                    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I1:17937;574:4502" data-name="Content">
                      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Noto_Sans_SC:SemiBold'] font-semibold justify-center leading-[0] min-w-px overflow-hidden relative text-[#1a2c44] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="I1:17937;574:4503">
                        <p className="leading-[20px] overflow-hidden text-ellipsis">阿里巴巴网络技术有限公司</p>
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I1:17937;2985:32766" data-name="caption">
                      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Noto_Sans_SC:Regular'] font-normal justify-center leading-[0] min-w-px relative text-[#667691] text-[14px]" data-node-id="I1:17937;2985:32768">
                        <p className="leading-[20px]">说明文字说明文字说明文字</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-0 border-[#edeff2] border-solid content-stretch flex flex-[1_0_0] items-center min-w-[120px] px-[12px] py-[10px] relative self-stretch" data-node-id="1:17938" data-name="table-cell-body">
                <div className="content-center flex flex-[1_0_0] flex-wrap gap-y-[4px] h-full items-center min-w-px relative" data-node-id="I1:17938;574:4925" data-name="标签插槽">
                  <div className="content-stretch flex flex-col items-center justify-center relative rounded-[4px] shrink-0" data-node-id="I1:17938;574:4925;1:17940" data-name="会员等级">
                    <div className="bg-[#ece5ff] content-stretch flex gap-[4px] items-center px-[6px] py-px relative rounded-[4px] shrink-0" data-node-id="I1:17938;574:4925;1:17940;2835:112001" data-name="tag">
                      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans_SC:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#7949fa] text-[14px] whitespace-nowrap" data-node-id="I1:17938;574:4925;1:17940;2835:112001;510:8448">
                        <p className="leading-[20px]">KA</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-0 border-[#edeff2] border-solid content-stretch flex flex-[1_0_0] items-center min-w-[120px] px-[12px] py-[10px] relative self-stretch" data-node-id="1:17941" data-name="table-cell-body">
                <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-node-id="I1:17941;2985:32162" data-name="Content">
                  <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I1:17941;574:4502" data-name="Content">
                    <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Noto_Sans_SC:Regular'] font-normal justify-center leading-[0] min-w-px overflow-hidden relative text-[#1a2c44] text-[14px] text-ellipsis" data-node-id="I1:17941;574:4503">
                      <p className="leading-[20px]">张三</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-0 border-[#edeff2] border-solid content-stretch flex flex-[1_0_0] items-center min-w-[120px] px-[12px] py-[10px] relative self-stretch" data-node-id="1:17942" data-name="table-cell-body">
                <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-node-id="I1:17942;2985:32162" data-name="Content">
                  <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I1:17942;574:4502" data-name="Content">
                    <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Noto_Sans_SC:Regular'] font-normal justify-center leading-[0] min-w-px overflow-hidden relative text-[#1a2c44] text-[14px] text-ellipsis" data-node-id="I1:17942;574:4503">
                      <p className="leading-[20px]">3</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-0 border-[#edeff2] border-solid content-stretch flex flex-[1_0_0] items-center min-w-[160px] px-[12px] py-[10px] relative self-stretch" data-node-id="1:17943" data-name="table-cell-body">
                <div className="content-center flex flex-[1_0_0] flex-wrap gap-[4px] h-full items-center min-w-px relative" data-node-id="I1:17943;138:22701" data-name="标签插槽">
                  <div className="relative shrink-0 size-[12px]" data-node-id="I1:17943;138:22710" data-name="common-filled-downloading">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCommonFilledDownloading} />
                  </div>
                  <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-node-id="I1:17943;138:22703" data-name="tag">
                    <div className="[word-break:break-word] flex flex-col font-['Noto_Sans_SC:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#1a2c44] text-[14px] whitespace-nowrap" data-node-id="I1:17943;138:22703;12616:46156">
                      <p className="leading-[20px]">入驻签约</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-0 border-[#edeff2] border-solid content-stretch flex items-center min-w-[100px] px-[12px] py-[10px] relative self-stretch shrink-0 w-[160px]" data-node-id="1:17944" data-name="table-cell-body">
                <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-node-id="I1:17944;2985:32163" data-name="Content">
                  <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I1:17944;1312:14702" data-name="Content">
                    <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Noto_Sans_SC:Regular'] font-normal justify-center leading-[0] min-w-px relative text-[#1a2c44] text-[14px]" data-node-id="I1:17944;1312:14703">
                      <p className="leading-[20px]">2025-02-14 10:20:11</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-0 border-[#edeff2] border-solid content-stretch flex items-center px-[12px] py-[10px] relative self-stretch shrink-0" data-node-id="1:17945" data-name="table-cell-body">
                <div className="content-stretch flex items-center justify-end relative shrink-0" data-node-id="I1:17945;578:10532" data-name="button-group">
                  <div className="content-stretch flex gap-[12px] items-center justify-end relative shrink-0" data-node-id="I1:17945;578:10532;12640:3505" data-name="按钮布局插槽">
                    <div className="[word-break:break-word] flex flex-col font-['Noto_Sans_SC:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#0c71ff] text-[14px] text-center whitespace-nowrap" data-node-id="I1:17945;578:10532;12640:3505;1:17947">
                      <p className="leading-[20px]">详情</p>
                    </div>
                    <div className="relative shrink-0 size-[16px]" data-node-id="I1:17945;578:10532;12640:3505;1:17948" data-name="common-filled-more">
                      <div className="-translate-y-1/2 absolute h-[3.333px] left-[6.25%] right-[6.25%] top-1/2" data-node-id="I1:17945;578:10532;12640:3505;1:17948;110:4468" data-name="star">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgStar} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-[#edeff2] border-b border-solid content-stretch flex items-start min-h-[40px] relative shrink-0 w-full" data-node-id="1:17949" data-name="row">
              <div className="border-0 border-[#edeff2] border-solid content-stretch flex items-center px-[12px] py-[10px] relative self-stretch shrink-0" data-node-id="1:17951" data-name="table-cell-body">
                <div className="content-stretch flex h-full items-center relative shrink-0" data-node-id="I1:17951;578:10663" data-name="Content">
                  <div className="relative shrink-0 size-[16px]" data-node-id="I1:17951;578:10871" data-name="checkbox-item">
                    <div className="absolute bg-white border border-[#d4dee9] border-solid inset-0 rounded-[4px]" data-node-id="I1:17951;578:10871;170:2053" data-name="Checkbox" />
                  </div>
                </div>
              </div>
              <div className="border-0 border-[#edeff2] border-solid content-stretch flex flex-[1_0_0] items-center min-w-[240px] px-[12px] py-[10px] relative" data-node-id="1:17952" data-name="table-cell-body">
                <div className="flex flex-[1_0_0] flex-row items-center self-stretch" data-node-id="I1:17952;2985:32162">
                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] h-full items-start justify-center min-w-px relative" data-name="Content">
                    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I1:17952;574:4502" data-name="Content">
                      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Noto_Sans_SC:SemiBold'] font-semibold justify-center leading-[0] min-w-px overflow-hidden relative text-[#1a2c44] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="I1:17952;574:4503">
                        <p className="leading-[20px] overflow-hidden text-ellipsis">阿里巴巴网络技术有限公司</p>
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I1:17952;2985:32766" data-name="caption">
                      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Noto_Sans_SC:Regular'] font-normal justify-center leading-[0] min-w-px relative text-[#667691] text-[14px]" data-node-id="I1:17952;2985:32768">
                        <p className="leading-[20px]">说明文字说明文字说明文字</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-0 border-[#edeff2] border-solid content-stretch flex flex-[1_0_0] items-center min-w-[120px] px-[12px] py-[10px] relative self-stretch" data-node-id="1:17953" data-name="table-cell-body">
                <div className="content-center flex flex-[1_0_0] flex-wrap gap-y-[4px] h-full items-center min-w-px relative" data-node-id="I1:17953;574:4925" data-name="标签插槽">
                  <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="I1:17953;574:4925;1:17955" data-name="会员等级">
                    <div className="bg-[#def2ff] content-stretch flex gap-[4px] items-center px-[6px] py-px relative rounded-[4px] shrink-0" data-node-id="I1:17953;574:4925;1:17955;2835:111866" data-name="tag">
                      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans_SC:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#005ad6] text-[14px] whitespace-nowrap" data-node-id="I1:17953;574:4925;1:17955;2835:111866;510:8448">
                        <p className="leading-[20px]">普通</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-0 border-[#edeff2] border-solid content-stretch flex flex-[1_0_0] items-center min-w-[120px] px-[12px] py-[10px] relative self-stretch" data-node-id="1:17956" data-name="table-cell-body">
                <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-node-id="I1:17956;2985:32162" data-name="Content">
                  <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I1:17956;574:4502" data-name="Content">
                    <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Noto_Sans_SC:Regular'] font-normal justify-center leading-[0] min-w-px overflow-hidden relative text-[#1a2c44] text-[14px] text-ellipsis" data-node-id="I1:17956;574:4503">
                      <p className="leading-[20px]">张三</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-0 border-[#edeff2] border-solid content-stretch flex flex-[1_0_0] items-center min-w-[120px] px-[12px] py-[10px] relative self-stretch" data-node-id="1:17957" data-name="table-cell-body">
                <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-node-id="I1:17957;2985:32162" data-name="Content">
                  <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I1:17957;574:4502" data-name="Content">
                    <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Noto_Sans_SC:Regular'] font-normal justify-center leading-[0] min-w-px overflow-hidden relative text-[#1a2c44] text-[14px] text-ellipsis" data-node-id="I1:17957;574:4503">
                      <p className="leading-[20px]">1</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-0 border-[#edeff2] border-solid content-stretch flex flex-[1_0_0] items-center min-w-[160px] px-[12px] py-[10px] relative self-stretch" data-node-id="1:17958" data-name="table-cell-body">
                <div className="content-center flex flex-[1_0_0] flex-wrap gap-[4px] h-full items-center min-w-px relative" data-node-id="I1:17958;138:22720" data-name="标签插槽">
                  <div className="relative shrink-0 size-[12px]" data-node-id="I1:17958;138:22728" data-name="common-filled-tick-circle">
                    <div className="absolute inset-[8.33%]" data-node-id="I1:17958;138:22728;110:4089" data-name="tick-circle">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgTickCircle} />
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-node-id="I1:17958;138:22722" data-name="tag">
                    <div className="[word-break:break-word] flex flex-col font-['Noto_Sans_SC:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#1a2c44] text-[14px] whitespace-nowrap" data-node-id="I1:17958;138:22722;12616:46156">
                      <p className="leading-[20px]">运营/增长</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-0 border-[#edeff2] border-solid content-stretch flex items-center min-w-[100px] px-[12px] py-[10px] relative self-stretch shrink-0 w-[160px]" data-node-id="1:17959" data-name="table-cell-body">
                <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-node-id="I1:17959;2985:32163" data-name="Content">
                  <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I1:17959;1312:14702" data-name="Content">
                    <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Noto_Sans_SC:Regular'] font-normal justify-center leading-[0] min-w-px relative text-[#1a2c44] text-[14px]" data-node-id="I1:17959;1312:14703">
                      <p className="leading-[20px]">2025-02-14 10:20:11</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-0 border-[#edeff2] border-solid content-stretch flex items-center px-[12px] py-[10px] relative self-stretch shrink-0" data-node-id="1:17960" data-name="table-cell-body">
                <div className="content-stretch flex items-center justify-end relative shrink-0" data-node-id="I1:17960;578:10532" data-name="button-group">
                  <div className="content-stretch flex gap-[12px] items-center justify-end relative shrink-0" data-node-id="I1:17960;578:10532;12640:3505" data-name="按钮布局插槽">
                    <div className="[word-break:break-word] flex flex-col font-['Noto_Sans_SC:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#0c71ff] text-[14px] text-center whitespace-nowrap" data-node-id="I1:17960;578:10532;12640:3505;1:17962">
                      <p className="leading-[20px]">详情</p>
                    </div>
                    <div className="relative shrink-0 size-[16px]" data-node-id="I1:17960;578:10532;12640:3505;1:17963" data-name="common-filled-more">
                      <div className="-translate-y-1/2 absolute h-[3.333px] left-[6.25%] right-[6.25%] top-1/2" data-node-id="I1:17960;578:10532;12640:3505;1:17963;110:4468" data-name="star">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgStar} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-[#edeff2] border-b border-solid content-stretch flex items-start min-h-[40px] relative shrink-0 w-full" data-node-id="1:17964" data-name="row">
              <div className="border-0 border-[#edeff2] border-solid content-stretch flex items-center px-[12px] py-[10px] relative self-stretch shrink-0" data-node-id="1:17966" data-name="table-cell-body">
                <div className="content-stretch flex h-full items-center relative shrink-0" data-node-id="I1:17966;578:10663" data-name="Content">
                  <div className="relative shrink-0 size-[16px]" data-node-id="I1:17966;578:10871" data-name="checkbox-item">
                    <div className="absolute bg-white border border-[#d4dee9] border-solid inset-0 rounded-[4px]" data-node-id="I1:17966;578:10871;170:2053" data-name="Checkbox" />
                  </div>
                </div>
              </div>
              <div className="border-0 border-[#edeff2] border-solid content-stretch flex flex-[1_0_0] items-center min-w-[240px] px-[12px] py-[10px] relative" data-node-id="1:17967" data-name="table-cell-body">
                <div className="flex flex-[1_0_0] flex-row items-center self-stretch" data-node-id="I1:17967;2985:32162">
                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] h-full items-start justify-center min-w-px relative" data-name="Content">
                    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I1:17967;574:4502" data-name="Content">
                      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Noto_Sans_SC:SemiBold'] font-semibold justify-center leading-[0] min-w-px overflow-hidden relative text-[#1a2c44] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="I1:17967;574:4503">
                        <p className="leading-[20px] overflow-hidden text-ellipsis">阿里巴巴网络技术有限公司</p>
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I1:17967;2985:32766" data-name="caption">
                      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Noto_Sans_SC:Regular'] font-normal justify-center leading-[0] min-w-px relative text-[#667691] text-[14px]" data-node-id="I1:17967;2985:32768">
                        <p className="leading-[20px]">说明文字说明文字说明文字</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-0 border-[#edeff2] border-solid content-stretch flex flex-[1_0_0] items-center min-w-[120px] px-[12px] py-[10px] relative self-stretch" data-node-id="1:17968" data-name="table-cell-body">
                <div className="content-center flex flex-[1_0_0] flex-wrap gap-y-[4px] h-full items-center min-w-px relative" data-node-id="I1:17968;574:4925" data-name="标签插槽">
                  <div className="bg-[#ffec9d] content-stretch flex flex-col items-center justify-center relative rounded-[4px] shrink-0" data-node-id="I1:17968;574:4925;1:17970" data-name="会员等级">
                    <div className="bg-[#ffead0] content-stretch flex gap-[4px] items-center px-[6px] py-px relative rounded-[4px] shrink-0" data-node-id="I1:17968;574:4925;1:17970;2835:112011" data-name="tag">
                      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans_SC:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#e27d00] text-[14px] whitespace-nowrap" data-node-id="I1:17968;574:4925;1:17970;2835:112011;510:8448">
                        <p className="leading-[20px]">SKA</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-0 border-[#edeff2] border-solid content-stretch flex flex-[1_0_0] items-center min-w-[120px] px-[12px] py-[10px] relative self-stretch" data-node-id="1:17971" data-name="table-cell-body">
                <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-node-id="I1:17971;2985:32162" data-name="Content">
                  <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I1:17971;574:4502" data-name="Content">
                    <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Noto_Sans_SC:Regular'] font-normal justify-center leading-[0] min-w-px overflow-hidden relative text-[#1a2c44] text-[14px] text-ellipsis" data-node-id="I1:17971;574:4503">
                      <p className="leading-[20px]">张三</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-0 border-[#edeff2] border-solid content-stretch flex flex-[1_0_0] items-center min-w-[120px] px-[12px] py-[10px] relative self-stretch" data-node-id="1:17972" data-name="table-cell-body">
                <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-node-id="I1:17972;2985:32162" data-name="Content">
                  <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I1:17972;574:4502" data-name="Content">
                    <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Noto_Sans_SC:Regular'] font-normal justify-center leading-[0] min-w-px overflow-hidden relative text-[#1a2c44] text-[14px] text-ellipsis" data-node-id="I1:17972;574:4503">
                      <p className="leading-[20px]">6</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-0 border-[#edeff2] border-solid content-stretch flex flex-[1_0_0] items-center min-w-[160px] px-[12px] py-[10px] relative self-stretch" data-node-id="1:17973" data-name="table-cell-body">
                <div className="content-center flex flex-[1_0_0] flex-wrap gap-[4px] h-full items-center min-w-px relative" data-node-id="I1:17973;138:22734" data-name="标签插槽">
                  <div className="relative shrink-0 size-[12px]" data-node-id="I1:17973;138:22742" data-name="common-filled-close-circle">
                    <div className="absolute inset-[8.33%]" data-node-id="I1:17973;138:22742;110:4128" data-name="close-circle">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCloseCircle} />
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-node-id="I1:17973;138:22736" data-name="tag">
                    <div className="[word-break:break-word] flex flex-col font-['Noto_Sans_SC:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#1a2c44] text-[14px] whitespace-nowrap" data-node-id="I1:17973;138:22736;12616:46156">
                      <p className="leading-[20px]">沉睡/流失</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-0 border-[#edeff2] border-solid content-stretch flex items-center min-w-[100px] px-[12px] py-[10px] relative self-stretch shrink-0 w-[160px]" data-node-id="1:17974" data-name="table-cell-body">
                <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-node-id="I1:17974;2985:32163" data-name="Content">
                  <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I1:17974;1312:14702" data-name="Content">
                    <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Noto_Sans_SC:Regular'] font-normal justify-center leading-[0] min-w-px relative text-[#1a2c44] text-[14px]" data-node-id="I1:17974;1312:14703">
                      <p className="leading-[20px]">2025-02-14 10:20:11</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-0 border-[#edeff2] border-solid content-stretch flex items-center px-[12px] py-[10px] relative self-stretch shrink-0" data-node-id="1:17975" data-name="table-cell-body">
                <div className="content-stretch flex items-center justify-end relative shrink-0" data-node-id="I1:17975;578:10532" data-name="button-group">
                  <div className="content-stretch flex gap-[12px] items-center justify-end relative shrink-0" data-node-id="I1:17975;578:10532;12640:3505" data-name="按钮布局插槽">
                    <div className="[word-break:break-word] flex flex-col font-['Noto_Sans_SC:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#0c71ff] text-[14px] text-center whitespace-nowrap" data-node-id="I1:17975;578:10532;12640:3505;1:17977">
                      <p className="leading-[20px]">详情</p>
                    </div>
                    <div className="relative shrink-0 size-[16px]" data-node-id="I1:17975;578:10532;12640:3505;1:17978" data-name="common-filled-more">
                      <div className="-translate-y-1/2 absolute h-[3.333px] left-[6.25%] right-[6.25%] top-1/2" data-node-id="I1:17975;578:10532;12640:3505;1:17978;110:4468" data-name="star">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgStar} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-[#edeff2] border-b border-solid content-stretch flex items-start min-h-[40px] relative shrink-0 w-full" data-node-id="1:17979" data-name="row">
              <div className="border-0 border-[#edeff2] border-solid content-stretch flex items-center px-[12px] py-[10px] relative self-stretch shrink-0" data-node-id="1:17981" data-name="table-cell-body">
                <div className="content-stretch flex h-full items-center relative shrink-0" data-node-id="I1:17981;578:10663" data-name="Content">
                  <div className="relative shrink-0 size-[16px]" data-node-id="I1:17981;578:10871" data-name="checkbox-item">
                    <div className="absolute bg-white border border-[#d4dee9] border-solid inset-0 rounded-[4px]" data-node-id="I1:17981;578:10871;170:2053" data-name="Checkbox" />
                  </div>
                </div>
              </div>
              <div className="border-0 border-[#edeff2] border-solid content-stretch flex flex-[1_0_0] items-center min-w-[240px] px-[12px] py-[10px] relative" data-node-id="1:17982" data-name="table-cell-body">
                <div className="flex flex-[1_0_0] flex-row items-center self-stretch" data-node-id="I1:17982;2985:32162">
                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] h-full items-start justify-center min-w-px relative" data-name="Content">
                    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I1:17982;574:4502" data-name="Content">
                      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Noto_Sans_SC:SemiBold'] font-semibold justify-center leading-[0] min-w-px overflow-hidden relative text-[#1a2c44] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="I1:17982;574:4503">
                        <p className="leading-[20px] overflow-hidden text-ellipsis">阿里巴巴网络技术有限公司</p>
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I1:17982;2985:32766" data-name="caption">
                      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Noto_Sans_SC:Regular'] font-normal justify-center leading-[0] min-w-px relative text-[#667691] text-[14px]" data-node-id="I1:17982;2985:32768">
                        <p className="leading-[20px]">说明文字说明文字说明文字</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-0 border-[#edeff2] border-solid content-stretch flex flex-[1_0_0] items-center min-w-[120px] px-[12px] py-[10px] relative self-stretch" data-node-id="1:17983" data-name="table-cell-body">
                <div className="content-center flex flex-[1_0_0] flex-wrap gap-y-[4px] h-full items-center min-w-px relative" data-node-id="I1:17983;574:4925" data-name="标签插槽">
                  <div className="bg-[#ffec9d] content-stretch flex flex-col items-center justify-center relative rounded-[4px] shrink-0" data-node-id="I1:17983;574:4925;1:17985" data-name="会员等级">
                    <div className="bg-[#ffead0] content-stretch flex gap-[4px] items-center px-[6px] py-px relative rounded-[4px] shrink-0" data-node-id="I1:17983;574:4925;1:17985;2835:112011" data-name="tag">
                      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans_SC:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#e27d00] text-[14px] whitespace-nowrap" data-node-id="I1:17983;574:4925;1:17985;2835:112011;510:8448">
                        <p className="leading-[20px]">SKA</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-0 border-[#edeff2] border-solid content-stretch flex flex-[1_0_0] items-center min-w-[120px] px-[12px] py-[10px] relative self-stretch" data-node-id="1:17986" data-name="table-cell-body">
                <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-node-id="I1:17986;2985:32162" data-name="Content">
                  <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I1:17986;574:4502" data-name="Content">
                    <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Noto_Sans_SC:Regular'] font-normal justify-center leading-[0] min-w-px overflow-hidden relative text-[#1a2c44] text-[14px] text-ellipsis" data-node-id="I1:17986;574:4503">
                      <p className="leading-[20px]">张三</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-0 border-[#edeff2] border-solid content-stretch flex flex-[1_0_0] items-center min-w-[120px] px-[12px] py-[10px] relative self-stretch" data-node-id="1:17987" data-name="table-cell-body">
                <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-node-id="I1:17987;2985:32162" data-name="Content">
                  <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I1:17987;574:4502" data-name="Content">
                    <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Noto_Sans_SC:Regular'] font-normal justify-center leading-[0] min-w-px overflow-hidden relative text-[#1a2c44] text-[14px] text-ellipsis" data-node-id="I1:17987;574:4503">
                      <p className="leading-[20px]">12</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-0 border-[#edeff2] border-solid content-stretch flex flex-[1_0_0] items-center min-w-[160px] px-[12px] py-[10px] relative self-stretch" data-node-id="1:17988" data-name="table-cell-body">
                <div className="content-center flex flex-[1_0_0] flex-wrap gap-[4px] h-full items-center min-w-px relative" data-node-id="I1:17988;138:22678" data-name="标签插槽">
                  <div className="relative shrink-0 size-[12px]" data-node-id="I1:17988;138:22679" data-name="common-filled-clock">
                    <div className="absolute inset-[8.33%]" data-node-id="I1:17988;138:22679;110:4551" data-name="clock">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgClock1} />
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-node-id="I1:17988;138:22680" data-name="tag">
                    <div className="[word-break:break-word] flex flex-col font-['Noto_Sans_SC:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#1a2c44] text-[14px] whitespace-nowrap" data-node-id="I1:17988;138:22680;12616:46156">
                      <p className="leading-[20px]">意向沟通</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-0 border-[#edeff2] border-solid content-stretch flex items-center min-w-[100px] px-[12px] py-[10px] relative self-stretch shrink-0 w-[160px]" data-node-id="1:17989" data-name="table-cell-body">
                <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px relative" data-node-id="I1:17989;2985:32163" data-name="Content">
                  <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I1:17989;1312:14702" data-name="Content">
                    <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Noto_Sans_SC:Regular'] font-normal justify-center leading-[0] min-w-px relative text-[#1a2c44] text-[14px]" data-node-id="I1:17989;1312:14703">
                      <p className="leading-[20px]">2025-02-14 10:20:11</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-0 border-[#edeff2] border-solid content-stretch flex items-center px-[12px] py-[10px] relative self-stretch shrink-0" data-node-id="1:17990" data-name="table-cell-body">
                <div className="content-stretch flex items-center justify-end relative shrink-0" data-node-id="I1:17990;578:10532" data-name="button-group">
                  <div className="content-stretch flex gap-[12px] items-center justify-end relative shrink-0" data-node-id="I1:17990;578:10532;12640:3505" data-name="按钮布局插槽">
                    <div className="[word-break:break-word] flex flex-col font-['Noto_Sans_SC:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#0c71ff] text-[14px] text-center whitespace-nowrap" data-node-id="I1:17990;578:10532;12640:3505;1:17992">
                      <p className="leading-[20px]">详情</p>
                    </div>
                    <div className="relative shrink-0 size-[16px]" data-node-id="I1:17990;578:10532;12640:3505;1:17993" data-name="common-filled-more">
                      <div className="-translate-y-1/2 absolute h-[3.333px] left-[6.25%] right-[6.25%] top-1/2" data-node-id="I1:17990;578:10532;12640:3505;1:17993;110:4468" data-name="star">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgStar} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white border-[#edeff2] border-solid border-t content-stretch flex gap-[8px] items-center p-[12px] relative shrink-0 w-[1120px]" data-node-id="1:17994" data-name="Paginator">
              <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-node-id="1:17995" data-name="showTotal">
                <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Source_Han_Sans_CN:Regular'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#667691] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="1:17996">
                  <p className="leading-[20px] overflow-hidden text-ellipsis">共50条</p>
                </div>
              </div>
              <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-node-id="1:17997" data-name="paginator">
                <div className="content-stretch flex items-center justify-center p-[8px] relative rounded-[8px] shrink-0" data-node-id="1:17998" data-name="_paginator-iconbutton">
                  <div className="relative shrink-0 size-[12px]" data-node-id="I1:17998;884:9112" data-name="common-linear-location-left">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCommonLinearLocationLeft} />
                  </div>
                </div>
                <div className="content-stretch flex items-center justify-center p-[8px] relative rounded-[8px] shrink-0" data-node-id="1:17999" data-name="_paginator-iconbutton">
                  <div className="relative shrink-0 size-[12px]" data-node-id="I1:17999;884:9104" data-name="common-linear-arrow-left">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCommonLinearArrowLeft} />
                  </div>
                </div>
                <div className="border border-[#0c71ff] border-solid content-stretch flex flex-col items-center justify-center relative rounded-[8px] shrink-0 size-[28px]" data-node-id="1:18000" data-name="_paginator-cell-text">
                  <div className="[word-break:break-word] flex flex-col font-['Source_Han_Sans_CN:Regular'] justify-center leading-[0] not-italic relative shrink-0 text-[#0c71ff] text-[14px] whitespace-nowrap" data-node-id="I1:18000;884:9333">
                    <p className="leading-[20px]">1</p>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-center justify-center relative rounded-[8px] shrink-0 size-[28px]" data-node-id="1:18001" data-name="_paginator-cell-text">
                  <div className="[word-break:break-word] flex flex-col font-['Source_Han_Sans_CN:Regular'] justify-center leading-[0] not-italic relative shrink-0 text-[#667691] text-[14px] whitespace-nowrap" data-node-id="I1:18001;884:9339">
                    <p className="leading-[20px]">2</p>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-center justify-center relative rounded-[8px] shrink-0 size-[28px]" data-node-id="1:18002" data-name="_paginator-cell-text">
                  <div className="[word-break:break-word] flex flex-col font-['Source_Han_Sans_CN:Regular'] justify-center leading-[0] not-italic relative shrink-0 text-[#667691] text-[14px] whitespace-nowrap" data-node-id="I1:18002;884:9339">
                    <p className="leading-[20px]">3</p>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-center justify-center relative rounded-[8px] shrink-0 size-[28px]" data-node-id="1:18003" data-name="_paginator-cell-text">
                  <div className="[word-break:break-word] flex flex-col font-['Source_Han_Sans_CN:Regular'] justify-center leading-[0] not-italic relative shrink-0 text-[#667691] text-[14px] whitespace-nowrap" data-node-id="I1:18003;884:9339">
                    <p className="leading-[20px]">4</p>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-center justify-center relative rounded-[8px] shrink-0 size-[28px]" data-node-id="1:18004" data-name="_paginator-cell-text">
                  <div className="[word-break:break-word] flex flex-col font-['Source_Han_Sans_CN:Regular'] justify-center leading-[0] not-italic relative shrink-0 text-[#667691] text-[14px] whitespace-nowrap" data-node-id="I1:18004;884:9339">
                    <p className="leading-[20px]">5</p>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-center justify-center relative rounded-[8px] shrink-0 size-[28px]" data-node-id="1:18005" data-name="_paginator-cell-text">
                  <div className="[word-break:break-word] flex flex-col font-['Source_Han_Sans_CN:Regular'] justify-center leading-[0] not-italic relative shrink-0 text-[#667691] text-[14px] whitespace-nowrap" data-node-id="I1:18005;884:9339">
                    <p className="leading-[20px]">...</p>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-center justify-center relative rounded-[8px] shrink-0 size-[28px]" data-node-id="1:18006" data-name="_paginator-cell-text">
                  <div className="[word-break:break-word] flex flex-col font-['Source_Han_Sans_CN:Regular'] justify-center leading-[0] not-italic relative shrink-0 text-[#667691] text-[14px] whitespace-nowrap" data-node-id="I1:18006;884:9339">
                    <p className="leading-[20px]">20</p>
                  </div>
                </div>
                <div className="content-stretch flex items-center justify-center p-[8px] relative rounded-[8px] shrink-0" data-node-id="1:18007" data-name="_paginator-iconbutton">
                  <div className="relative shrink-0 size-[12px]" data-node-id="I1:18007;884:9120" data-name="common-linear-arrow-right">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCommonLinearArrowRight} />
                  </div>
                </div>
                <div className="content-stretch flex items-center justify-center p-[8px] relative rounded-[8px] shrink-0" data-node-id="1:18008" data-name="_paginator-iconbutton">
                  <div className="relative shrink-0 size-[12px]" data-node-id="I1:18008;884:9128" data-name="common-linear-location-right">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCommonLinearLocationRight} />
                  </div>
                </div>
              </div>
              <div className="bg-white border border-[#d4dee9] border-solid content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative rounded-[8px] shrink-0 w-[88px]" data-node-id="1:18009" data-name="sizeCanChange">
                <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-node-id="I1:18009;237:3950" data-name="Content">
                  <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Source_Han_Sans_CN:Regular'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#667691] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="I1:18009;237:3952">
                    <p className="leading-[20px] overflow-hidden text-ellipsis">20条/页</p>
                  </div>
                </div>
                <div className="relative shrink-0 size-[12px]" data-node-id="I1:18009;237:3954" data-name="Icon">
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

type HomeScreenProps = {
  onNavigateDetail: () => void;
  onNavigateForm: () => void;
  onNavigateList: () => void;
  onThemeChange: (theme: "dark" | "light") => void;
  theme: "dark" | "light";
};

export default function Component1({ onNavigateDetail, onNavigateForm, onNavigateList, onThemeChange, theme }: HomeScreenProps) {
  return (
    <div className="bg-[#15171e] content-stretch flex flex-col items-start relative size-full" data-node-id="1:22901" data-name="首页">
      <div className="content-stretch flex flex-[1_0_0] items-start min-h-px relative w-full" data-node-id="1:22902">
        <div className="content-stretch flex flex-col h-full items-start px-[12px] relative shrink-0 w-[216px]" data-node-id="1:22903" data-name="Menu">
          <div className="content-stretch flex gap-[8px] items-center pb-[12px] pl-[6px] pr-[12px] pt-[16px] relative shrink-0 w-full" data-node-id="1:22904" data-name="logo">
            <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-node-id="1:22905">
              <div className="h-[24px] relative shrink-0 w-[90px]" data-node-id="1:22906" data-name="Logo">
                <div className="absolute contents inset-[8.33%_3.14%_8.33%_2.78%]" data-node-id="I1:22906;4343:5333" data-name="Group">
                  <div className="absolute inset-[8.33%_76.18%_8.33%_2.78%]" data-node-id="I1:22906;4343:5334" data-name="Group">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={theme === "light" ? imgGroupLight : imgGroup} />
                  </div>
                  <div className="absolute inset-[29.7%_3.14%_14.2%_28.64%]" data-node-id="I1:22906;4343:5337" data-name="Group">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={theme === "light" ? imgGroup1Light : imgGroup1} />
                  </div>
                </div>
              </div>
            </div>
            <div className="relative shrink-0 size-[14px]" data-node-id="1:22911" data-name="common-linear-menu">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCommonLinearMenu} />
            </div>
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px overflow-x-clip overflow-y-auto pt-[8px] relative w-full" data-node-id="1:22912" data-name="Navigation">
            <div className="bg-[rgba(60,69,93,0.3)] content-stretch flex gap-[8px] h-[40px] items-center pr-[8px] relative rounded-[6px] shrink-0 w-full" data-node-id="1:22913" data-name="navigation-item-1st-level">
              <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-node-id="I1:22913;908:27495" data-name="Content">
                <div className="content-stretch flex items-center pl-[12px] pr-[8px] py-[8px] relative shrink-0" data-node-id="I1:22913;908:27496" data-name="Icon">
                  <div className="content-stretch flex items-center justify-center relative shrink-0" data-node-id="I1:22913;908:27497" data-name="尺寸=md">
                    <div className="overflow-clip relative shrink-0 size-[16px]" data-node-id="I1:22913;908:27497;114:779" data-name="sidebar-filled-home">
                      <div className="absolute contents inset-[5.43%_5.37%_5.42%_5.37%]" data-node-id="I1:22913;908:27497;114:779;110:4683" data-name="home">
                        <div className="absolute inset-[5.43%_5.37%_5.42%_5.37%]" data-node-id="I1:22913;908:27497;114:779;110:4684" data-name="video-circle">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVideoCircle} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[14px] text-ellipsis text-white whitespace-nowrap" data-node-id="I1:22913;908:27499">
                  <p className="leading-[20px] overflow-hidden text-ellipsis">首页</p>
                </div>
              </div>
            </div>
            <a className="content-stretch cursor-pointer flex gap-[8px] h-[40px] items-center pr-[8px] relative rounded-[8px] shrink-0 w-full" data-node-id="1:22914" data-name="navigation-item-1st-level" onClick={onNavigateList}>
              <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-node-id="I1:22914;908:27469" data-name="Content">
                <div className="content-stretch flex items-center justify-center pl-[12px] pr-[8px] py-[8px] relative shrink-0" data-node-id="I1:22914;908:27470" data-name="Icon">
                  <div className="content-stretch flex items-center justify-center relative shrink-0" data-node-id="I1:22914;908:27471" data-name="尺寸=md">
                    <div className="relative shrink-0 size-[16px]" data-node-id="I1:22914;908:27471;114:779" data-name="common-linear-grid">
                      <div className="absolute contents inset-[8.33%]" data-node-id="I1:22914;908:27471;114:779;14415:35668" data-name="vuesax/linear/grid-6">
                        <div className="absolute inset-[8.33%]" data-node-id="I1:22914;908:27471;114:779;14415:35669" data-name="grid-6">
                          <div className="absolute inset-[-5%]">
                            <img alt="" className="block max-w-none size-full" src={imgGrid6} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#bdc2d1] text-[14px] text-ellipsis text-left whitespace-nowrap" data-node-id="I1:22914;908:27472">
                  <p className="leading-[20px] overflow-hidden text-ellipsis">列表页</p>
                </div>
              </div>
            </a>
            <div className="sidebar-nav-link content-stretch cursor-pointer flex gap-[8px] h-[40px] items-center pr-[8px] relative rounded-[8px] shrink-0 w-full" data-node-id="1:22915" data-name="navigation-item-1st-level" onClick={onNavigateDetail}>
              <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-node-id="I1:22915;908:27469" data-name="Content">
                <div className="content-stretch flex items-center justify-center pl-[12px] pr-[8px] py-[8px] relative shrink-0" data-node-id="I1:22915;908:27470" data-name="Icon">
                  <div className="content-stretch flex items-center justify-center relative shrink-0" data-node-id="I1:22915;908:27471" data-name="尺寸=md">
                    <div className="relative shrink-0 size-[16px]" data-node-id="I1:22915;908:27471;114:779" data-name="common-linear-file">
                      <img alt="" className="design-icon-native" src={imgCommonLinearFile} />
                    </div>
                  </div>
                </div>
                <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#bdc2d1] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="I1:22915;908:27472">
                  <p className="leading-[20px] overflow-hidden text-ellipsis">详情页</p>
                </div>
              </div>
            </div>
            <div className="sidebar-nav-link content-stretch cursor-pointer flex gap-[8px] h-[40px] items-center pr-[8px] relative rounded-[8px] shrink-0 w-full" data-node-id="1:22916" data-name="navigation-item-1st-level" onClick={onNavigateForm}>
              <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-node-id="I1:22916;908:27469" data-name="Content">
                <div className="content-stretch flex items-center justify-center pl-[12px] pr-[8px] py-[8px] relative shrink-0" data-node-id="I1:22916;908:27470" data-name="Icon">
                  <div className="content-stretch flex items-center justify-center relative shrink-0" data-node-id="I1:22916;908:27471" data-name="尺寸=md">
                    <div className="relative shrink-0 size-[16px]" data-node-id="I1:22916;908:27471;114:779" data-name="common-linear-todo">
                      <div className="absolute inset-[4.17%]" data-node-id="I1:22916;908:27471;114:779;1290:14543" data-name="task-square">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgTaskSquare} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#bdc2d1] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="I1:22916;908:27472">
                  <p className="leading-[20px] overflow-hidden text-ellipsis">表单页</p>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start pb-[16px] pt-[12px] relative shrink-0 w-full" data-node-id="1:22925">
            <div className="content-stretch flex h-[28px] items-center relative shrink-0 w-full" data-node-id="1:22933" data-name="tabs-capsule">
              <div className="bg-[rgba(60,69,93,0.3)] content-stretch flex flex-[1_0_0] gap-[2px] items-center min-w-px overflow-clip p-[2px] relative rounded-[6px]" data-node-id="I1:22933;1220:72564" data-name="tabs水平插槽">
                <div className="flex flex-[1_0_0] flex-row items-center self-stretch" data-node-id="I1:22933;1220:72564;1:22927">
                  <button aria-pressed={theme === "dark"} className="bg-[#15171e] content-stretch flex flex-[1_0_0] gap-[4px] h-full items-center justify-center max-w-[160px] min-w-[48px] px-[12px] py-[3px] relative rounded-[4px] shadow-[0px_2px_4px_0px_rgba(18,50,108,0.01),0px_8px_16px_0px_rgba(18,50,108,0.02)]" data-name="tabs-capsule-cell" data-theme-option="dark" onClick={() => onThemeChange("dark")} type="button">
                    <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[12px] text-center text-ellipsis text-white whitespace-nowrap" data-node-id="I1:22933;1220:72564;1:22927;1220:72548">
                      <p className="leading-[18px] overflow-hidden text-ellipsis">暗色风格</p>
                    </div>
                  </button>
                </div>
                <div className="flex flex-[1_0_0] flex-row items-center self-stretch" data-node-id="I1:22933;1220:72564;1:22928">
                  <button aria-pressed={theme === "light"} className="content-stretch cursor-pointer flex flex-[1_0_0] gap-[4px] h-full items-center justify-center max-w-[160px] min-w-[48px] px-[12px] py-[4px] relative rounded-[4px]" data-name="tabs-capsule-cell" data-theme-option="light" onClick={() => onThemeChange("light")} type="button">
                    <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#bdc2d1] text-[12px] text-center text-ellipsis whitespace-nowrap" data-node-id="I1:22933;1220:72564;1:22928;1220:72538">
                      <p className="leading-[18px] overflow-hidden text-ellipsis">亮色风格</p>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#f0f1f7] content-stretch flex flex-[1_0_0] flex-col h-full items-start min-w-px overflow-clip relative" data-node-id="1:22934" data-name="右">
          <div className="absolute h-[283px] left-0 overflow-clip right-0 top-0" data-node-id="1:22935" data-name="背景">
            <div className="absolute bg-gradient-to-r from-[#f5f6fa] h-[227px] left-0 right-0 to-[#f3f3fa] top-0" data-node-id="1:22936" />
            <div className="absolute h-[130px] left-0 right-0 top-[97px]" data-node-id="1:22937">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle24} />
            </div>
          </div>
          <div className="border-[#e3e6ed] border-b border-solid content-stretch flex gap-[8px] h-[56px] items-center px-[32px] shrink-0 sticky top-0 w-full" data-node-id="1:22940" data-name="PageHeader">
            <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px relative" data-node-id="1:22941">
              <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-w-px relative" data-node-id="1:22943" data-name="面包屑">
                <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#646e87] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="1:22945">
                  <p className="leading-[20px] overflow-hidden text-ellipsis">首页</p>
                </div>
                <div className="relative shrink-0 size-[12px]" data-node-id="1:22946" data-name="common-linear-arrow-right">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCommonLinearArrowRight1} />
                </div>
                <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#1e2436] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="1:22949">
                  <p className="leading-[20px] overflow-hidden text-ellipsis">{theme === "light" ? "客户详情" : "首页"}</p>
                </div>
              </div>
              <button className="bg-[#eaebf1] content-stretch cursor-pointer flex gap-[4px] h-[32px] items-center px-[12px] py-[6px] relative rounded-[6px] shrink-0 w-[140px]" data-node-id="1:22950" data-name="input-search">
                <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-node-id="I1:22950;654:20563" data-name="Content">
                  <div className="relative shrink-0 size-[16px]" data-node-id="I1:22950;654:20564" data-name="common-linear-search">
                    <div className="absolute inset-[4.17%]" data-node-id="I1:22950;654:20564;110:1324" data-name="search-normal">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSearchNormal} />
                    </div>
                  </div>
                  <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#646e87] text-[14px] text-ellipsis text-left whitespace-nowrap" data-node-id="I1:22950;654:20565">
                    <p className="leading-[20px] overflow-hidden text-ellipsis">搜索 ⌘+K</p>
                  </div>
                </div>
              </button>
            </div>
            <div className="content-stretch flex gap-[8px] h-full items-center relative shrink-0" data-node-id="1:22968" data-name="功能区">
              <div className="bg-[#eaebf1] content-stretch flex gap-[8px] items-center justify-center p-[6px] relative rounded-[6px] shrink-0 size-[32px]" data-node-id="1:22972" data-name="Icon-item">
                <div className="relative shrink-0 size-[16px]" data-node-id="1:22973" data-name="common-linear-notification">
                  <div className="absolute inset-[3.92%_12.43%_3.92%_12.39%]" data-node-id="I1:22973;110:1422" data-name="notification">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgNotification} />
                  </div>
                </div>
              </div>
              <div className="bg-[#eaebf1] content-stretch flex gap-[8px] items-center justify-center p-[6px] relative rounded-[6px] shrink-0 size-[32px]" data-node-id="1:22975" data-name="Icon-item">
                <div className="relative shrink-0 size-[16px]" data-node-id="1:22976" data-name="common-linear-message-question">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCommonLinearMessageQuestion} />
                </div>
              </div>
              <div className="bg-[#eaebf1] content-stretch flex gap-[4px] items-center justify-center p-[6px] relative rounded-[6px] shrink-0 size-[32px]" data-node-id="1:22984" data-name="Icon-item">
                <div className="relative shrink-0 size-[16px]" data-node-id="1:22985" data-name="sidebar-linear-settings">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSidebarLinearSettings} />
                </div>
              </div>
              <div className="bg-[#eaebf1] content-stretch flex gap-[4px] items-center pl-[4px] pr-[6px] py-[4px] relative rounded-[16px] shrink-0" data-node-id="1:22993" data-name="Icon-item">
                <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="I1:22993;4358:4272" data-name="个人">
                  <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 size-[24px]" data-node-id="I1:22993;1740:15931" data-name="avatar">
                    <div className="flex-[1_0_0] h-full min-w-px relative rounded-[32px]" data-node-id="I1:22993;1740:15931;509:320" data-name="Avatar">
                      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[32px] size-full" src={imgAvatar} />
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="I1:22993;4358:3405" data-name="文本信息">
                    <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#3c455d] text-[12px] text-center text-ellipsis whitespace-nowrap" data-node-id="I1:22993;4358:3406">
                      <p className="leading-[18px] overflow-hidden text-ellipsis">张三</p>
                    </div>
                  </div>
                </div>
                <div className="relative shrink-0 size-[16px]" data-node-id="I1:22993;1740:15932" data-name="common-linear-arrow-down">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCommonLinearArrowDown} />
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[20px] items-start min-h-px overflow-x-clip overflow-y-auto px-[32px] py-[20px] relative w-full" data-node-id="1:23045">
            <div className="content-stretch flex gap-[16px] items-center relative rounded-[4px] shrink-0 w-full" data-node-id="1:23046">
              <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start justify-center min-w-px relative" data-node-id="1:23047">
                <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Bold'] font-semibold justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#1e2436] text-[24px] w-[min-content]" data-node-id="1:23048">
                  <p className="leading-[32px]">上午好，李闪闪 👏</p>
                </div>
              </div>
            </div>
            <div className="gap-x-[12px] gap-y-[12px] grid grid-cols-[__minmax(0,0.67fr)_minmax(0,0.33fr)] grid-rows-[repeat(1,fit-content(100%))] pb-[20px] relative shrink-0 w-full" data-node-id="1:23165">
              <div className="content-stretch flex flex-col gap-[12px] items-start justify-self-stretch relative self-start shrink-0" data-node-id="1:23166">
                <div className="performance-overview bg-white border border-[#edeef3] border-solid content-stretch drop-shadow-[0px_1px_0.5px_rgba(20,41,79,0.02),0px_2px_2px_rgba(20,41,79,0.01)] flex flex-col gap-[16px] items-start p-[21px] relative rounded-[8px] shrink-0 w-full" data-node-id="1:23167" data-name="目标绩效">
                  <div className="relative shrink-0 w-full" data-node-id="1:23168" data-name="标题">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-start relative size-full">
                      <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-node-id="1:23169" data-name="标题">
                        <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="1:23170" data-name="标题">
                          <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#1e2436] text-[18px] whitespace-nowrap" data-node-id="1:23171">
                            <p className="leading-[24px]">目标绩效</p>
                          </div>
                        </div>
                        <div className="content-center flex flex-wrap gap-[2px_8px] items-center relative shrink-0" data-node-id="1:23178" data-name="描述">
                          <div className="performance-rank bg-[#fef5e0] border border-[#feeabb] border-solid content-stretch flex gap-[2px] items-center px-[6px] py-px relative rounded-[9999px] shrink-0" data-node-id="1:23191">
                            <div className="overflow-clip relative shrink-0 size-[14px]" data-node-id="1:23192" data-name="排名">
                              <div className="absolute bottom-0 contents left-0 top-0" data-node-id="I1:23192;636:16010">
                                <div className="absolute inset-[66.67%_16.67%_0_16.67%]" data-node-id="I1:23192;636:16011">
                                  <div className="absolute inset-[0_0_7.71%_0]">
                                    <img alt="" className="block max-w-none size-full" src={imgRectangle7} />
                                  </div>
                                </div>
                                <div className="absolute inset-[2.58%_6.7%]">
                                  <img alt="" className="block max-w-none size-full" src={imgGroup2} />
                                </div>
                                <div className="-translate-x-1/2 absolute aspect-[18/18] bottom-[10.42%] left-1/2 top-[10.42%]" data-node-id="I1:23192;636:16013">
                                  <div className="absolute inset-[1.63%_5.65%_-0.48%_5.65%]">
                                    <img alt="" className="block max-w-none size-full" src={imgPolygon2} />
                                  </div>
                                </div>
                                <div className="absolute inset-[16.67%]" data-node-id="I1:23192;636:16014">
                                  <div className="absolute inset-[1.93%_6.7%]">
                                    <img alt="" className="block max-w-none size-full" src={imgPolygon3} />
                                  </div>
                                </div>
                                <div className="[word-break:break-word] absolute flex flex-col font-['Noto_Sans:Bold'] inset-[29.17%_33.33%] justify-center leading-[0] not-italic text-[#c47b14] text-[8.17px]" data-node-id="I1:23192;636:16015">
                                  <p className="leading-[11.667px]">1</p>
                                </div>
                              </div>
                            </div>
                            <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] not-italic relative shrink-0 text-[#c47b14] text-[12px] whitespace-nowrap" data-node-id="1:23193">
                              <p className="leading-[18px]">排行1/15</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex h-[28px] items-center relative shrink-0" data-node-id="1:23207" data-name="tabs-capsule">
                        <div className="bg-[#f6f6f9] border-0 border-[#eaebf1] border-solid content-stretch flex gap-[2px] h-full items-center overflow-clip p-[1.5px] relative rounded-[6px] shrink-0" data-node-id="I1:23207;522:9341" data-name="tabs水平插槽">
                          <div className="bg-white content-stretch flex gap-[4px] h-full items-center justify-center max-w-[160px] min-w-[48px] px-[8px] py-[3px] relative rounded-[4px] shrink-0" data-node-id="I1:23207;522:9341;1:23200" data-name="tabs-capsule-cell">
                            <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#1e2436] text-[12px] text-center text-ellipsis whitespace-nowrap" data-node-id="I1:23207;522:9341;1:23200;522:9597">
                              <p className="leading-[18px] overflow-hidden text-ellipsis">本季度</p>
                            </div>
                          </div>
                          <div className="content-stretch flex gap-[4px] h-full items-center justify-center max-w-[160px] min-w-[48px] px-[8px] py-[3px] relative rounded-[4px] shrink-0" data-node-id="I1:23207;522:9341;1:23201" data-name="tabs-capsule-cell">
                            <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#646e87] text-[12px] text-ellipsis whitespace-nowrap" data-node-id="I1:23207;522:9341;1:23201;522:9565">
                              <p className="leading-[18px] overflow-hidden text-ellipsis">本财年</p>
                            </div>
                          </div>
                          <div className="content-stretch flex gap-[4px] h-full items-center justify-center max-w-[160px] min-w-[48px] px-[8px] py-[3px] relative rounded-[4px] shrink-0" data-node-id="I1:23207;522:9341;1:23202" data-name="tabs-capsule-cell">
                            <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#646e87] text-[12px] text-ellipsis whitespace-nowrap" data-node-id="I1:23207;522:9341;1:23202;522:9565">
                              <p className="leading-[18px] overflow-hidden text-ellipsis">Q1季度</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative shrink-0 w-full" data-node-id="1:23339">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                      <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-node-id="1:23340">
                        <div className="performance-card bg-white border border-[#eaebf1] border-solid content-stretch flex flex-[1_0_0] gap-[8px] items-end min-w-[152px] p-[16px] relative rounded-[8px]" data-node-id="1:23441" data-name="绩效卡片">
                          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative" data-node-id="1:23442">
                            <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="1:23443" data-name="标题">
                              <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] not-italic relative shrink-0 text-[#3c455d] text-[14px] whitespace-nowrap" data-node-id="1:23444">
                                <p className="leading-[20px]">整体达成 TPV</p>
                              </div>
                            </div>
                            <div className="content-end flex flex-wrap gap-[2px_8px] items-end relative shrink-0 w-full" data-node-id="1:23446" data-name="金额">
                              <div className="content-stretch flex gap-[2px] items-end relative shrink-0" data-node-id="1:23447">
                                <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#1e2436] text-[28px] whitespace-nowrap" data-node-id="1:23448">
                                  <p className="leading-[32px]">1000.80</p>
                                </div>
                                <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-node-id="1:23449">
                                  <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#1e2436] text-[28px] w-full" data-node-id="1:23450">
                                    <p className="leading-[32px]">{`w `}</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-node-id="1:23464">
                              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="1:23465">
                                <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-node-id="1:23466">
                                  <div className="content-center flex flex-wrap gap-[2px_8px] items-center relative shrink-0 w-full" data-node-id="1:23467" data-name="涨跌幅">
                                    <div className="[word-break:break-word] content-stretch flex gap-[4px] items-center leading-[0] not-italic relative shrink-0 text-[#3c455d] text-[12px] whitespace-nowrap" data-node-id="1:23468">
                                      <div className="flex flex-col font-['PingFang_SC:Regular'] justify-center relative shrink-0" data-node-id="1:23469">
                                        <p className="leading-[18px]">目标</p>
                                      </div>
                                      <div className="flex flex-col font-['Inter:Medium'] font-medium justify-center relative shrink-0" data-node-id="1:23470">
                                        <p className="leading-[18px]">1800.00W</p>
                                      </div>
                                    </div>
                                    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="1:23471">
                                      <div className="[word-break:break-word] content-stretch flex gap-[4px] items-center leading-[0] not-italic relative shrink-0 text-[#3c455d] text-[12px] whitespace-nowrap" data-node-id="1:23472">
                                        <div className="flex flex-col font-['PingFang_SC:Regular'] justify-center relative shrink-0" data-node-id="1:23473">
                                          <p className="leading-[18px]">完成率</p>
                                        </div>
                                        <div className="flex flex-col font-['Inter:Medium'] font-medium justify-center relative shrink-0" data-node-id="1:23474">
                                          <p className="leading-[18px]">70.5%</p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="bg-[#f3f3f7] content-stretch flex flex-col h-[6px] items-start pl-px pr-[140px] relative rounded-[11px] shrink-0 w-[170px]" data-node-id="1:23485">
                                <div className="performance-progress-fill bg-[#0036fe] h-[6px] relative rounded-[11px] shrink-0 w-[127px]" data-node-id="1:23486" />
                              </div>
                            </div>
                          </div>
                          <div className="performance-chart h-[90px] relative shrink-0 w-[118.96px]" data-node-id="1:23521" data-name="Refund">
                            <div className="absolute inset-[-0.56%_-0.42%_0_-0.42%]">
                              <img alt="" className="performance-chart-image block max-w-none size-full" src={imgRefund} />
                            </div>
                          </div>
                        </div>
                        <div className="performance-card bg-white border border-[#eaebf1] border-solid content-stretch flex flex-[1_0_0] gap-[8px] items-end min-w-[152px] p-[16px] relative rounded-[8px]" data-node-id="1:23524" data-name="绩效卡片">
                          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative" data-node-id="1:23525">
                            <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="1:23526" data-name="标题">
                              <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] not-italic relative shrink-0 text-[#3c455d] text-[14px] whitespace-nowrap" data-node-id="1:23527">
                                <p className="leading-[20px]">新拓达成 TPV</p>
                              </div>
                            </div>
                            <div className="content-end flex flex-wrap gap-[2px_8px] items-end relative shrink-0 w-full" data-node-id="1:23529" data-name="金额">
                              <div className="content-stretch flex gap-[2px] items-end relative shrink-0" data-node-id="1:23530">
                                <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#1e2436] text-[28px] whitespace-nowrap" data-node-id="1:23531">
                                  <p className="leading-[32px]">700.00</p>
                                </div>
                                <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-node-id="1:23532">
                                  <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#1e2436] text-[28px] w-full" data-node-id="1:23533">
                                    <p className="leading-[32px]">{`w `}</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-node-id="1:23547">
                              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="1:23548">
                                <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-node-id="1:23549">
                                  <div className="content-center flex flex-wrap gap-[2px_8px] items-center relative shrink-0 w-full" data-node-id="1:23550" data-name="涨跌幅">
                                    <div className="[word-break:break-word] content-stretch flex gap-[4px] items-center leading-[0] not-italic relative shrink-0 text-[#3c455d] text-[12px] whitespace-nowrap" data-node-id="1:23551">
                                      <div className="flex flex-col font-['PingFang_SC:Regular'] justify-center relative shrink-0" data-node-id="1:23552">
                                        <p className="leading-[18px]">目标</p>
                                      </div>
                                      <div className="flex flex-col font-['Inter:Medium'] font-medium justify-center relative shrink-0" data-node-id="1:23553">
                                        <p className="leading-[18px]">1800.00W</p>
                                      </div>
                                    </div>
                                    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="1:23554">
                                      <div className="[word-break:break-word] content-stretch flex gap-[4px] items-center leading-[0] not-italic relative shrink-0 text-[#3c455d] text-[12px] whitespace-nowrap" data-node-id="1:23555">
                                        <div className="flex flex-col font-['PingFang_SC:Regular'] justify-center relative shrink-0" data-node-id="1:23556">
                                          <p className="leading-[18px]">完成率</p>
                                        </div>
                                        <div className="flex flex-col font-['Inter:Medium'] font-medium justify-center relative shrink-0" data-node-id="1:23557">
                                          <p className="leading-[18px]">30.2%</p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="bg-[#f3f3f7] content-stretch flex flex-col h-[6px] items-start pl-px pr-[140px] relative rounded-[11px] shrink-0 w-[170px]" data-node-id="1:23568">
                                <div className="performance-progress-fill bg-[#e5485d] h-[6px] relative rounded-[11px] shrink-0 w-[43px]" data-node-id="1:23569" />
                              </div>
                            </div>
                          </div>
                          <div className="performance-chart h-[90px] relative shrink-0 w-[118.96px]" data-node-id="1:23604" data-name="Refund">
                            <div className="absolute inset-[-0.56%_-0.42%_0_-0.42%]">
                              <img alt="" className="performance-chart-image block max-w-none size-full" src={imgRefund} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white border border-[#edeef3] border-solid content-stretch drop-shadow-[0px_1px_0.5px_rgba(20,41,79,0.02),0px_2px_2px_rgba(20,41,79,0.01)] flex flex-col gap-[16px] items-start p-[20px] relative rounded-[8px] shrink-0 w-full" data-node-id="1:24140">
                  <div className="home-module-titlebar content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-node-id="1:24141">
                    <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Bold'] font-semibold justify-center leading-[0] min-w-px not-italic relative text-[#1e2436] text-[18px]" data-node-id="1:24142">
                      <p className="leading-[24px]">客户数据</p>
                    </div>
                    <div className="content-stretch flex gap-[4px] items-center justify-center px-[2px] relative rounded-[4px] shrink-0" data-node-id="1:24143" data-name="link">
                      <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] not-italic relative shrink-0 text-[#646e87] text-[12px] whitespace-nowrap" data-node-id="I1:24143;1341:12603">
                        <p className="leading-[18px]">更多</p>
                      </div>
                      <div className="relative shrink-0 size-[12px]" data-node-id="I1:24143;1341:12605" data-name="common-linear-arrow-right">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCommonLinearArrowStraightRight} />
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-node-id="1:24144">
                    <div className="content-center flex flex-wrap gap-[20px] items-center relative shrink-0 w-full" data-node-id="1:24145">
                      <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-start min-w-[80px] overflow-clip relative rounded-[4px]" data-node-id="1:24146" data-name="数据统计卡片">
                        <div className="flex-[1_0_0] min-w-px relative" data-node-id="1:24149">
                          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
                            <div className="content-stretch flex items-center relative shrink-0 w-full" data-node-id="1:24150" data-name="标题">
                              <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-w-px relative" data-node-id="1:24151" data-name="标题">
                                <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] not-italic relative shrink-0 text-[#3c455d] text-[14px] whitespace-nowrap" data-node-id="1:24152">
                                  <p className="leading-[18px]">全部客户</p>
                                </div>
                              </div>
                            </div>
                            <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#1e2436] text-[20px] whitespace-nowrap" data-node-id="1:24154">
                              <p className="leading-[30px]">123</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-start min-w-[80px] overflow-clip relative rounded-[4px]" data-node-id="1:24155" data-name="数据统计卡片">
                        <div className="flex-[1_0_0] min-w-px relative" data-node-id="1:24158">
                          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
                            <div className="content-stretch flex items-center relative shrink-0 w-full" data-node-id="1:24159" data-name="标题">
                              <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-w-px relative" data-node-id="1:24160" data-name="标题">
                                <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] not-italic relative shrink-0 text-[#3c455d] text-[14px] whitespace-nowrap" data-node-id="1:24161">
                                  <p className="leading-[18px]">初步接触</p>
                                </div>
                              </div>
                            </div>
                            <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#1e2436] text-[20px] w-full" data-node-id="1:24163">
                              <p className="leading-[30px]">8</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-start min-w-[80px] overflow-clip relative rounded-[4px]" data-node-id="1:24164" data-name="数据统计卡片">
                        <div className="flex-[1_0_0] min-w-px relative" data-node-id="1:24167">
                          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
                            <div className="content-stretch flex items-center relative shrink-0 w-full" data-node-id="1:24168" data-name="标题">
                              <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-w-px relative" data-node-id="1:24169" data-name="标题">
                                <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] not-italic relative shrink-0 text-[#3c455d] text-[14px] whitespace-nowrap" data-node-id="1:24170">
                                  <p className="leading-[18px]">意向沟通</p>
                                </div>
                              </div>
                            </div>
                            <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#1e2436] text-[20px] w-full" data-node-id="1:24172">
                              <p className="leading-[30px]">10</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-start min-w-[80px] overflow-clip relative rounded-[4px]" data-node-id="1:24173" data-name="数据统计卡片">
                        <div className="flex-[1_0_0] min-w-px relative" data-node-id="1:24176">
                          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
                            <div className="content-stretch flex items-center relative shrink-0 w-full" data-node-id="1:24177" data-name="标题">
                              <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-w-px relative" data-node-id="1:24178" data-name="标题">
                                <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] not-italic relative shrink-0 text-[#3c455d] text-[14px] whitespace-nowrap" data-node-id="1:24179">
                                  <p className="leading-[18px]">入驻签约</p>
                                </div>
                              </div>
                            </div>
                            <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#1e2436] text-[20px] w-full" data-node-id="1:24181">
                              <p className="leading-[30px]">4</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-start min-w-[80px] overflow-clip relative rounded-[4px]" data-node-id="1:24182" data-name="数据统计卡片">
                        <div className="flex-[1_0_0] min-w-px relative" data-node-id="1:24185">
                          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
                            <div className="content-stretch flex items-center relative shrink-0 w-full" data-node-id="1:24186" data-name="标题">
                              <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-w-px relative" data-node-id="1:24187" data-name="标题">
                                <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] not-italic relative shrink-0 text-[#3c455d] text-[14px] whitespace-nowrap" data-node-id="1:24188">
                                  <p className="leading-[18px]">运营增长</p>
                                </div>
                              </div>
                            </div>
                            <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#1e2436] text-[20px] w-full" data-node-id="1:24190">
                              <p className="leading-[30px]">70</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-start min-w-[80px] overflow-clip relative rounded-[4px]" data-node-id="1:24191" data-name="数据统计卡片">
                        <div className="flex-[1_0_0] min-w-px relative" data-node-id="1:24194">
                          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
                            <div className="content-stretch flex items-center relative shrink-0 w-full" data-node-id="1:24195" data-name="标题">
                              <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-w-px relative" data-node-id="1:24196" data-name="标题">
                                <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] not-italic relative shrink-0 text-[#3c455d] text-[14px] whitespace-nowrap" data-node-id="1:24197">
                                  <p className="leading-[18px]">沉睡流失</p>
                                </div>
                              </div>
                            </div>
                            <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#1e2436] text-[20px] w-full" data-node-id="1:24199">
                              <p className="leading-[30px]">8</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col h-[120px] items-start relative shrink-0 w-full" data-node-id="1:24200">
                      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px relative w-full" data-node-id="1:24202">
                        <div className="flex-[1_0_0] min-h-px relative w-full" data-node-id="1:24203" data-name="Line">
                          <div className="absolute content-stretch flex gap-[4px] inset-[3.31%_0.66px_3.31%_0] items-end" data-node-id="1:24204" data-name="Line">
                            <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-end min-w-px relative" data-node-id="1:24212" data-name="X & Line">
                              <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-start justify-end min-h-px relative w-full" data-node-id="1:24213" data-name="Line">
                                <div className="h-[14px] relative shrink-0 w-full" data-node-id="1:24224">
                                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLine1} />
                                </div>
                              </div>
                              <div className="[word-break:break-word] content-stretch flex font-['Poppins:Regular'] font-normal items-start leading-[14px] relative shrink-0 text-[#646e87] text-[10px] w-full" data-node-id="1:24226" data-name="X">
                                <p className="flex-[1_0_0] min-w-px relative" data-node-id="1:24227">
                                  1月
                                </p>
                                <p className="flex-[1_0_0] min-w-px relative" data-node-id="1:24228">
                                  1月
                                </p>
                                <p className="flex-[1_0_0] min-w-px relative" data-node-id="1:24229">
                                  1月
                                </p>
                                <p className="flex-[1_0_0] min-w-px relative" data-node-id="1:24230">
                                  1月
                                </p>
                                <p className="flex-[1_0_0] min-w-px relative" data-node-id="1:24231">
                                  1月
                                </p>
                                <p className="flex-[1_0_0] min-w-px relative" data-node-id="1:24232">
                                  1月
                                </p>
                                <p className="flex-[1_0_0] min-w-px relative" data-node-id="1:24233">
                                  1月
                                </p>
                                <p className="flex-[1_0_0] min-w-px relative" data-node-id="1:24234">
                                  1月
                                </p>
                                <p className="flex-[1_0_0] min-w-px relative" data-node-id="1:24235">
                                  1月
                                </p>
                                <p className="flex-[1_0_0] min-w-px relative" data-node-id="1:24236">
                                  1月
                                </p>
                                <p className="flex-[1_0_0] min-w-px relative" data-node-id="1:24237">
                                  1月
                                </p>
                                <p className="flex-[1_0_0] min-w-px relative" data-node-id="1:24238">
                                  1月
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="absolute contents left-0 right-[0.16px] top-[9px]" data-node-id="1:24243" data-name="Refund">
                            <div className="absolute h-[88px] left-0 right-[0.16px] top-[9px]" data-node-id="1:24244">
                              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector11} />
                            </div>
                            <div className="absolute h-[45px] left-0 right-[0.16px] top-[9px]" data-node-id="1:24245">
                              <div className="absolute inset-[-2.22%_-0.14%]">
                                <img alt="" className="block max-w-none size-full" src={imgVector10} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="absolute content-stretch flex gap-[4px] items-center px-[2px] right-[0.16px] top-0" data-node-id="1:24256" data-name="Columns / Legend">
                        <div className="bg-[#0036fe] relative rounded-[6px] shrink-0 size-[6px]" data-node-id="I1:24256;15733:39415" />
                        <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] not-italic relative shrink-0 text-[#3c455d] text-[12px] whitespace-nowrap" data-node-id="I1:24256;11443:95993">
                          <p className="leading-[18px]">客户走势</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="customer-performance-module bg-white border border-[#edeef3] border-solid content-stretch drop-shadow-[0px_1px_0.5px_rgba(20,41,79,0.02),0px_2px_2px_rgba(20,41,79,0.01)] flex flex-col gap-[16px] items-start p-[21px] relative rounded-[8px] shrink-0 w-full" data-node-id="1:24257" data-name="客户表现">
                  <div className="relative shrink-0 w-full" data-node-id="1:24258">
                    <div className="home-module-titlebar bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
                      <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-w-px relative" data-node-id="1:24259">
                        <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#1e2436] text-[18px] whitespace-nowrap" data-node-id="1:24260">
                          <p className="leading-[24px]">客户表现</p>
                        </div>
                      </div>
                      <div className="content-stretch flex gap-[4px] items-center justify-center px-[2px] relative rounded-[4px] shrink-0" data-node-id="1:24282" data-name="link">
                        <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] not-italic relative shrink-0 text-[#646e87] text-[12px] whitespace-nowrap" data-node-id="I1:24282;1341:12603">
                          <p className="leading-[18px]">更多</p>
                        </div>
                        <div className="relative shrink-0 size-[12px]" data-node-id="I1:24282;1341:12605" data-name="common-linear-arrow-right">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCommonLinearArrowStraightRight} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative shrink-0 w-full" data-node-id="1:24401">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[10px] items-start relative size-full">
                      <Table className="bg-white content-stretch flex flex-col items-start relative shrink-0 w-full">
                        <div className="bg-[#f8f8fb] border-[#f6f6f9] border-b border-solid content-stretch flex h-[36px] items-start overflow-clip relative rounded-[4px] shrink-0 w-full" data-node-id="1:24421" data-name="row">
                          <div className="content-stretch flex flex-[1_0_0] h-full items-center min-w-[200px] px-[12px] py-[10px] relative" data-node-id="1:24424" data-name="table-cell-header">
                            <div className="content-stretch flex gap-[4px] h-full items-center relative shrink-0 w-[136px]" data-node-id="I1:24424;567:4277" data-name="Content">
                              <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#646e87] text-[12px] text-ellipsis whitespace-nowrap" data-node-id="I1:24424;566:12188">
                                <p className="leading-[18px]">客户信息</p>
                              </div>
                            </div>
                          </div>
                          <div className="content-stretch flex h-full items-center justify-end min-w-[120px] px-[12px] py-[10px] relative shrink-0 w-[140px]" data-node-id="1:24426" data-name="table-cell-header">
                            <div className="content-stretch flex gap-[4px] h-full items-center justify-end relative shrink-0" data-node-id="I1:24426;581:9298" data-name="Content">
                              <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#646e87] text-[12px] text-ellipsis whitespace-nowrap" data-node-id="I1:24426;581:9299">
                                <p className="leading-[18px]">日均 REV</p>
                              </div>
                            </div>
                          </div>
                          <div className="content-stretch flex h-full items-center min-w-[120px] px-[12px] py-[10px] relative shrink-0 w-[120px]" data-node-id="1:24427" data-name="table-cell-header">
                            <div className="content-stretch flex flex-[1_0_0] gap-[4px] h-full items-center justify-end min-w-px relative" data-node-id="I1:24427;567:4277" data-name="Content">
                              <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#646e87] text-[12px] text-ellipsis whitespace-nowrap" data-node-id="I1:24427;566:12188">
                                <p className="leading-[18px]">涨跌值</p>
                              </div>
                            </div>
                          </div>
                          <div className="content-stretch flex h-full items-center justify-end min-w-[120px] px-[12px] py-[10px] relative shrink-0 w-[140px]" data-node-id="1:24428" data-name="table-cell-header">
                            <div className="content-stretch flex gap-[4px] h-full items-center justify-end relative shrink-0" data-node-id="I1:24428;581:9298" data-name="Content">
                              <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#646e87] text-[12px] text-ellipsis whitespace-nowrap" data-node-id="I1:24428;581:9299">
                                <p className="leading-[18px]">日均 TPV</p>
                              </div>
                            </div>
                          </div>
                          <div className="content-stretch flex h-full items-center min-w-[120px] px-[12px] py-[10px] relative shrink-0 w-[140px]" data-node-id="1:24433" data-name="table-cell-header">
                            <div className="content-stretch flex flex-[1_0_0] gap-[4px] h-full items-center justify-end min-w-px relative" data-node-id="I1:24433;567:4277" data-name="Content">
                              <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#646e87] text-[12px] text-ellipsis whitespace-nowrap" data-node-id="I1:24433;566:12188">
                                <p className="leading-[18px]">涨跌值</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="border-[#f6f6f9] border-b border-solid content-stretch flex h-[44px] items-start min-h-[44px] relative shrink-0 w-full" data-node-id="1:24434" data-name="row">
                          <div className="border-0 border-[#f6f6f9] border-solid content-stretch flex flex-[1_0_0] h-full items-center min-w-[200px] px-[12px] py-[10px] relative" data-node-id="1:24437" data-name="table-cell-body">
                            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] h-full items-start justify-center min-w-px relative" data-node-id="I1:24437;2985:32162" data-name="Content">
                              <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I1:24437;574:4502" data-name="Content">
                                <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#1e2436] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="I1:24437;574:4503">
                                  <p className="leading-[20px] overflow-hidden text-ellipsis">阿里巴巴网络技术有限公司</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="border-0 border-[#f6f6f9] border-solid content-stretch flex h-full items-center min-w-[120px] px-[12px] py-[10px] relative shrink-0 w-[140px]" data-node-id="1:24441" data-name="table-cell-body">
                            <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-end justify-center min-w-px relative" data-node-id="I1:24441;2985:32159" data-name="Content">
                              <div className="content-stretch flex gap-[4px] items-center justify-end relative shrink-0 w-full" data-node-id="I1:24441;581:9396" data-name="Content">
                                <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] min-w-px not-italic relative text-[#1e2436] text-[14px] text-right" data-node-id="I1:24441;581:9397">
                                  <p className="leading-[20px]">16,600</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="border-0 border-[#f6f6f9] border-solid content-stretch flex h-full items-center min-w-[120px] px-[12px] py-[10px] relative shrink-0 w-[120px]" data-node-id="1:24442" data-name="table-cell-body">
                            <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-end justify-center min-w-px relative" data-node-id="I1:24442;2985:32159" data-name="Content">
                              <div className="content-stretch flex gap-[4px] items-center justify-end relative shrink-0 w-full" data-node-id="I1:24442;581:9396" data-name="Content">
                                <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] min-w-px not-italic relative text-[#e5485d] text-[14px] text-right" data-node-id="I1:24442;581:9397">
                                  <p className="leading-[20px]">+12.2%</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="border-0 border-[#f6f6f9] border-solid content-stretch flex h-full items-center min-w-[120px] px-[12px] py-[10px] relative shrink-0 w-[140px]" data-node-id="1:24443" data-name="table-cell-body">
                            <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-end justify-center min-w-px relative" data-node-id="I1:24443;2985:32159" data-name="Content">
                              <div className="content-stretch flex gap-[4px] items-center justify-end relative shrink-0 w-full" data-node-id="I1:24443;581:9396" data-name="Content">
                                <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] min-w-px not-italic relative text-[#1e2436] text-[14px] text-right" data-node-id="I1:24443;581:9397">
                                  <p className="leading-[20px]">16,600</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="border-0 border-[#f6f6f9] border-solid content-stretch flex h-full items-center min-w-[120px] px-[12px] py-[10px] relative shrink-0 w-[140px]" data-node-id="1:24444" data-name="table-cell-body">
                            <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-end justify-center min-w-px relative" data-node-id="I1:24444;2985:32159" data-name="Content">
                              <div className="content-stretch flex gap-[4px] items-center justify-end relative shrink-0 w-full" data-node-id="I1:24444;581:9396" data-name="Content">
                                <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] min-w-px not-italic relative text-[#18a765] text-[14px] text-right" data-node-id="I1:24444;581:9397">
                                  <p className="leading-[20px]">-12.2%</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="border-[#f6f6f9] border-b border-solid content-stretch flex h-[44px] items-start min-h-[44px] relative shrink-0 w-full" data-node-id="1:24445" data-name="row">
                          <div className="border-0 border-[#f6f6f9] border-solid content-stretch flex flex-[1_0_0] h-full items-center min-w-[200px] px-[12px] py-[10px] relative" data-node-id="1:24448" data-name="table-cell-body">
                            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] h-full items-start justify-center min-w-px relative" data-node-id="I1:24448;2985:32162" data-name="Content">
                              <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I1:24448;574:4502" data-name="Content">
                                <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#1e2436] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="I1:24448;574:4503">
                                  <p className="leading-[20px] overflow-hidden text-ellipsis">阿里巴巴网络技术有限公司</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="border-0 border-[#f6f6f9] border-solid content-stretch flex h-full items-center min-w-[120px] px-[12px] py-[10px] relative shrink-0 w-[140px]" data-node-id="1:24452" data-name="table-cell-body">
                            <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-end justify-center min-w-px relative" data-node-id="I1:24452;2985:32159" data-name="Content">
                              <div className="content-stretch flex gap-[4px] items-center justify-end relative shrink-0 w-full" data-node-id="I1:24452;581:9396" data-name="Content">
                                <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] min-w-px not-italic relative text-[#1e2436] text-[14px] text-right" data-node-id="I1:24452;581:9397">
                                  <p className="leading-[20px]">16,600</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="border-0 border-[#f6f6f9] border-solid content-stretch flex h-full items-center min-w-[120px] px-[12px] py-[10px] relative shrink-0 w-[120px]" data-node-id="1:24453" data-name="table-cell-body">
                            <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-end justify-center min-w-px relative" data-node-id="I1:24453;2985:32159" data-name="Content">
                              <div className="content-stretch flex gap-[4px] items-center justify-end relative shrink-0 w-full" data-node-id="I1:24453;581:9396" data-name="Content">
                                <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] min-w-px not-italic relative text-[#e5485d] text-[14px] text-right" data-node-id="I1:24453;581:9397">
                                  <p className="leading-[20px]">+12.2%</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="border-0 border-[#f6f6f9] border-solid content-stretch flex h-full items-center min-w-[120px] px-[12px] py-[10px] relative shrink-0 w-[140px]" data-node-id="1:24454" data-name="table-cell-body">
                            <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-end justify-center min-w-px relative" data-node-id="I1:24454;2985:32159" data-name="Content">
                              <div className="content-stretch flex gap-[4px] items-center justify-end relative shrink-0 w-full" data-node-id="I1:24454;581:9396" data-name="Content">
                                <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] min-w-px not-italic relative text-[#1e2436] text-[14px] text-right" data-node-id="I1:24454;581:9397">
                                  <p className="leading-[20px]">16,600</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="border-0 border-[#f6f6f9] border-solid content-stretch flex h-full items-center min-w-[120px] px-[12px] py-[10px] relative shrink-0 w-[140px]" data-node-id="1:24455" data-name="table-cell-body">
                            <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-end justify-center min-w-px relative" data-node-id="I1:24455;2985:32159" data-name="Content">
                              <div className="content-stretch flex gap-[4px] items-center justify-end relative shrink-0 w-full" data-node-id="I1:24455;581:9396" data-name="Content">
                                <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] min-w-px not-italic relative text-[#18a765] text-[14px] text-right" data-node-id="I1:24455;581:9397">
                                  <p className="leading-[20px]">-12.2%</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="border-[#f6f6f9] border-b border-solid content-stretch flex h-[44px] items-start min-h-[44px] relative shrink-0 w-full" data-node-id="1:24456" data-name="row">
                          <div className="border-0 border-[#f6f6f9] border-solid content-stretch flex flex-[1_0_0] h-full items-center min-w-[200px] px-[12px] py-[10px] relative" data-node-id="1:24459" data-name="table-cell-body">
                            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] h-full items-start justify-center min-w-px relative" data-node-id="I1:24459;2985:32162" data-name="Content">
                              <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I1:24459;574:4502" data-name="Content">
                                <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#1e2436] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="I1:24459;574:4503">
                                  <p className="leading-[20px] overflow-hidden text-ellipsis">阿里巴巴网络技术有限公司</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="border-0 border-[#f6f6f9] border-solid content-stretch flex h-full items-center min-w-[120px] px-[12px] py-[10px] relative shrink-0 w-[140px]" data-node-id="1:24463" data-name="table-cell-body">
                            <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-end justify-center min-w-px relative" data-node-id="I1:24463;2985:32159" data-name="Content">
                              <div className="content-stretch flex gap-[4px] items-center justify-end relative shrink-0 w-full" data-node-id="I1:24463;581:9396" data-name="Content">
                                <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] min-w-px not-italic relative text-[#1e2436] text-[14px] text-right" data-node-id="I1:24463;581:9397">
                                  <p className="leading-[20px]">16,600</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="border-0 border-[#f6f6f9] border-solid content-stretch flex h-full items-center min-w-[120px] px-[12px] py-[10px] relative shrink-0 w-[120px]" data-node-id="1:24464" data-name="table-cell-body">
                            <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-end justify-center min-w-px relative" data-node-id="I1:24464;2985:32159" data-name="Content">
                              <div className="content-stretch flex gap-[4px] items-center justify-end relative shrink-0 w-full" data-node-id="I1:24464;581:9396" data-name="Content">
                                <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] min-w-px not-italic relative text-[#e5485d] text-[14px] text-right" data-node-id="I1:24464;581:9397">
                                  <p className="leading-[20px]">+12.2%</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="border-0 border-[#f6f6f9] border-solid content-stretch flex h-full items-center min-w-[120px] px-[12px] py-[10px] relative shrink-0 w-[140px]" data-node-id="1:24465" data-name="table-cell-body">
                            <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-end justify-center min-w-px relative" data-node-id="I1:24465;2985:32159" data-name="Content">
                              <div className="content-stretch flex gap-[4px] items-center justify-end relative shrink-0 w-full" data-node-id="I1:24465;581:9396" data-name="Content">
                                <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] min-w-px not-italic relative text-[#1e2436] text-[14px] text-right" data-node-id="I1:24465;581:9397">
                                  <p className="leading-[20px]">16,600</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="border-0 border-[#f6f6f9] border-solid content-stretch flex h-full items-center min-w-[120px] px-[12px] py-[10px] relative shrink-0 w-[140px]" data-node-id="1:24466" data-name="table-cell-body">
                            <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-end justify-center min-w-px relative" data-node-id="I1:24466;2985:32159" data-name="Content">
                              <div className="content-stretch flex gap-[4px] items-center justify-end relative shrink-0 w-full" data-node-id="I1:24466;581:9396" data-name="Content">
                                <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] min-w-px not-italic relative text-[#18a765] text-[14px] text-right" data-node-id="I1:24466;581:9397">
                                  <p className="leading-[20px]">-12.2%</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="border-[#f6f6f9] border-b border-solid content-stretch flex h-[44px] items-start min-h-[44px] relative shrink-0 w-full" data-node-id="1:24467" data-name="row">
                          <div className="border-0 border-[#f6f6f9] border-solid content-stretch flex flex-[1_0_0] h-full items-center min-w-[200px] px-[12px] py-[10px] relative" data-node-id="1:24470" data-name="table-cell-body">
                            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] h-full items-start justify-center min-w-px relative" data-node-id="I1:24470;2985:32162" data-name="Content">
                              <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I1:24470;574:4502" data-name="Content">
                                <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#1e2436] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="I1:24470;574:4503">
                                  <p className="leading-[20px] overflow-hidden text-ellipsis">阿里巴巴网络技术有限公司</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="border-0 border-[#f6f6f9] border-solid content-stretch flex h-full items-center min-w-[120px] px-[12px] py-[10px] relative shrink-0 w-[140px]" data-node-id="1:24474" data-name="table-cell-body">
                            <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-end justify-center min-w-px relative" data-node-id="I1:24474;2985:32159" data-name="Content">
                              <div className="content-stretch flex gap-[4px] items-center justify-end relative shrink-0 w-full" data-node-id="I1:24474;581:9396" data-name="Content">
                                <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] min-w-px not-italic relative text-[#1e2436] text-[14px] text-right" data-node-id="I1:24474;581:9397">
                                  <p className="leading-[20px]">16,600</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="border-0 border-[#f6f6f9] border-solid content-stretch flex h-full items-center min-w-[120px] px-[12px] py-[10px] relative shrink-0 w-[120px]" data-node-id="1:24475" data-name="table-cell-body">
                            <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-end justify-center min-w-px relative" data-node-id="I1:24475;2985:32159" data-name="Content">
                              <div className="content-stretch flex gap-[4px] items-center justify-end relative shrink-0 w-full" data-node-id="I1:24475;581:9396" data-name="Content">
                                <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] min-w-px not-italic relative text-[#e5485d] text-[14px] text-right" data-node-id="I1:24475;581:9397">
                                  <p className="leading-[20px]">+12.2%</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="border-0 border-[#f6f6f9] border-solid content-stretch flex h-full items-center min-w-[120px] px-[12px] py-[10px] relative shrink-0 w-[140px]" data-node-id="1:24476" data-name="table-cell-body">
                            <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-end justify-center min-w-px relative" data-node-id="I1:24476;2985:32159" data-name="Content">
                              <div className="content-stretch flex gap-[4px] items-center justify-end relative shrink-0 w-full" data-node-id="I1:24476;581:9396" data-name="Content">
                                <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] min-w-px not-italic relative text-[#1e2436] text-[14px] text-right" data-node-id="I1:24476;581:9397">
                                  <p className="leading-[20px]">16,600</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="border-0 border-[#f6f6f9] border-solid content-stretch flex h-full items-center min-w-[120px] px-[12px] py-[10px] relative shrink-0 w-[140px]" data-node-id="1:24477" data-name="table-cell-body">
                            <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-end justify-center min-w-px relative" data-node-id="I1:24477;2985:32159" data-name="Content">
                              <div className="content-stretch flex gap-[4px] items-center justify-end relative shrink-0 w-full" data-node-id="I1:24477;581:9396" data-name="Content">
                                <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] min-w-px not-italic relative text-[#18a765] text-[14px] text-right" data-node-id="I1:24477;581:9397">
                                  <p className="leading-[20px]">-12.2%</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="border-[#f6f6f9] border-b border-solid content-stretch flex h-[44px] items-start min-h-[44px] relative shrink-0 w-full" data-node-id="1:24478" data-name="row">
                          <div className="border-0 border-[#f6f6f9] border-solid content-stretch flex flex-[1_0_0] h-full items-center min-w-[200px] px-[12px] py-[10px] relative" data-node-id="1:24481" data-name="table-cell-body">
                            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] h-full items-start justify-center min-w-px relative" data-node-id="I1:24481;2985:32162" data-name="Content">
                              <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-node-id="I1:24481;574:4502" data-name="Content">
                                <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#1e2436] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="I1:24481;574:4503">
                                  <p className="leading-[20px] overflow-hidden text-ellipsis">阿里巴巴网络技术有限公司</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="border-0 border-[#f6f6f9] border-solid content-stretch flex h-full items-center min-w-[120px] px-[12px] py-[10px] relative shrink-0 w-[140px]" data-node-id="1:24485" data-name="table-cell-body">
                            <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-end justify-center min-w-px relative" data-node-id="I1:24485;2985:32159" data-name="Content">
                              <div className="content-stretch flex gap-[4px] items-center justify-end relative shrink-0 w-full" data-node-id="I1:24485;581:9396" data-name="Content">
                                <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] min-w-px not-italic relative text-[#1e2436] text-[14px] text-right" data-node-id="I1:24485;581:9397">
                                  <p className="leading-[20px]">16,600</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="border-0 border-[#f6f6f9] border-solid content-stretch flex h-full items-center min-w-[120px] px-[12px] py-[10px] relative shrink-0 w-[120px]" data-node-id="1:24486" data-name="table-cell-body">
                            <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-end justify-center min-w-px relative" data-node-id="I1:24486;2985:32159" data-name="Content">
                              <div className="content-stretch flex gap-[4px] items-center justify-end relative shrink-0 w-full" data-node-id="I1:24486;581:9396" data-name="Content">
                                <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] min-w-px not-italic relative text-[#e5485d] text-[14px] text-right" data-node-id="I1:24486;581:9397">
                                  <p className="leading-[20px]">+12.2%</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="border-0 border-[#f6f6f9] border-solid content-stretch flex h-full items-center min-w-[120px] px-[12px] py-[10px] relative shrink-0 w-[140px]" data-node-id="1:24487" data-name="table-cell-body">
                            <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-end justify-center min-w-px relative" data-node-id="I1:24487;2985:32159" data-name="Content">
                              <div className="content-stretch flex gap-[4px] items-center justify-end relative shrink-0 w-full" data-node-id="I1:24487;581:9396" data-name="Content">
                                <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Medium'] font-medium justify-center leading-[0] min-w-px not-italic relative text-[#1e2436] text-[14px] text-right" data-node-id="I1:24487;581:9397">
                                  <p className="leading-[20px]">16,600</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="border-0 border-[#f6f6f9] border-solid content-stretch flex h-full items-center min-w-[120px] px-[12px] py-[10px] relative shrink-0 w-[140px]" data-node-id="1:24488" data-name="table-cell-body">
                            <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-end justify-center min-w-px relative" data-node-id="I1:24488;2985:32159" data-name="Content">
                              <div className="content-stretch flex gap-[4px] items-center justify-end relative shrink-0 w-full" data-node-id="I1:24488;581:9396" data-name="Content">
                                <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] min-w-px not-italic relative text-[#18a765] text-[14px] text-right" data-node-id="I1:24488;581:9397">
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
                <div className="bg-white border border-[#edeef3] border-solid content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col gap-[16px] items-start p-[21px] relative rounded-[8px] shrink-0 w-full" data-node-id="1:24605" data-name="知识中心">
                  <div className="relative shrink-0 w-full" data-node-id="1:24606" data-name="标题">
                    <div className="home-module-titlebar bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative size-full">
                      <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-node-id="1:24607">
                        <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#1e2436] text-[18px] whitespace-nowrap" data-node-id="1:24608">
                          <p className="leading-[24px]">知识中心</p>
                        </div>
                      </div>
                      <div className="content-stretch flex gap-[4px] items-center justify-center px-[2px] relative rounded-[4px] shrink-0" data-node-id="1:24610" data-name="link">
                        <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] not-italic relative shrink-0 text-[#3c455d] text-[12px] whitespace-nowrap" data-node-id="I1:24610;1341:12603">
                          <p className="leading-[18px]">更多</p>
                        </div>
                        <div className="relative shrink-0 size-[12px]" data-node-id="I1:24610;1341:12605" data-name="common-linear-arrow-right">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCommonLinearArrowStraightRight1} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative shrink-0 w-full" data-node-id="1:24611" data-name="内容">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-start relative size-full">
                      <div className="bg-[#f8f8fb] content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-[280px] p-[16px] relative rounded-[6px]" data-node-id="1:24612">
                        <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-node-id="1:24613">
                          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Bold'] font-semibold justify-center leading-[0] min-w-px not-italic relative text-[#1e2436] text-[16px]" data-node-id="1:24614">
                            <p className="leading-[24px]">学习专区</p>
                          </div>
                          <div className="content-stretch flex gap-[4px] items-center justify-center px-[2px] relative rounded-[4px] shrink-0" data-node-id="1:24615" data-name="link">
                            <div className="relative shrink-0 size-[12px]" data-node-id="I1:24615;1341:12602" data-name="common-linear-refresh">
                              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCommonLinearRefresh} />
                            </div>
                            <div className="[word-break:break-word] flex flex-col font-['Source_Han_Sans_CN:Medium'] justify-center leading-[0] not-italic relative shrink-0 text-[#646e87] text-[12px] whitespace-nowrap" data-node-id="I1:24615;1341:12603">
                              <p className="leading-[18px]">换一批</p>
                            </div>
                          </div>
                        </div>
                        <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-node-id="1:24616">
                          <div className="h-[40px] relative rounded-[4px] shrink-0 w-[56px]" data-node-id="1:24617">
                            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[4px] size-full" src={imgRectangle21} />
                          </div>
                          <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col font-['Noto_Sans_SC:Regular'] font-normal gap-[2px] items-start justify-center leading-[0] min-w-px relative whitespace-nowrap" data-node-id="1:24618">
                            <div className="flex flex-col justify-center relative shrink-0 text-[#0036fe] text-[12px]" data-node-id="1:24619">
                              <p className="leading-[18px]">产品能力</p>
                            </div>
                            <div className="knowledge-item-title flex flex-col justify-center relative shrink-0 text-[#1e2436] text-[14px]" data-node-id="1:24620" data-tooltip="韩国新上线#支付方式#，教你一招，售卖谈判策略！" tabIndex={0}>
                              <p className="knowledge-item-title-text leading-[20px]">韩国新上线#支付方式#，教你一招，售卖谈判策略！</p>
                            </div>
                          </div>
                        </div>
                        <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-node-id="1:24621">
                          <div className="h-[40px] relative rounded-[4px] shrink-0 w-[56px]" data-node-id="1:24622">
                            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[4px] size-full" src={imgRectangle22} />
                          </div>
                          <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col font-['Noto_Sans_SC:Regular'] font-normal gap-[2px] items-start justify-center leading-[0] min-w-px relative whitespace-nowrap" data-node-id="1:24623">
                            <div className="flex flex-col justify-center relative shrink-0 text-[#0036fe] text-[12px]" data-node-id="1:24624">
                              <p className="leading-[18px]">产品能力</p>
                            </div>
                            <div className="knowledge-item-title flex flex-col justify-center relative shrink-0 text-[#1e2436] text-[14px]" data-node-id="1:24625" data-tooltip="韩国新上线#支付方式#，教你一招，售卖谈判策略！" tabIndex={0}>
                              <p className="knowledge-item-title-text leading-[20px]">韩国新上线#支付方式#，教你一招，售卖谈判策略！</p>
                            </div>
                          </div>
                        </div>
                        <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-node-id="1:24626">
                          <div className="h-[40px] relative rounded-[4px] shrink-0 w-[56px]" data-node-id="1:24627">
                            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[4px] size-full" src={imgRectangle23} />
                          </div>
                          <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col font-['Noto_Sans_SC:Regular'] font-normal gap-[2px] items-start justify-center leading-[0] min-w-px relative whitespace-nowrap" data-node-id="1:24628">
                            <div className="flex flex-col justify-center relative shrink-0 text-[#0036fe] text-[12px]" data-node-id="1:24629">
                              <p className="leading-[18px]">产品能力</p>
                            </div>
                            <div className="knowledge-item-title flex flex-col justify-center relative shrink-0 text-[#1e2436] text-[14px]" data-node-id="1:24630" data-tooltip="韩国新上线#支付方式#，教你一招，售卖谈判策略！" tabIndex={0}>
                              <p className="knowledge-item-title-text leading-[20px]">韩国新上线#支付方式#，教你一招，售卖谈判策略！</p>
                            </div>
                          </div>
                        </div>
                        <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-node-id="1:24631">
                          <div className="h-[40px] relative rounded-[4px] shrink-0 w-[56px]" data-node-id="1:24632">
                            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[4px] size-full" src={imgRectangle25} />
                          </div>
                          <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col font-['Noto_Sans_SC:Regular'] font-normal gap-[2px] items-start justify-center leading-[0] min-w-px relative whitespace-nowrap" data-node-id="1:24633">
                            <div className="flex flex-col justify-center relative shrink-0 text-[#0036fe] text-[12px]" data-node-id="1:24634">
                              <p className="leading-[18px]">产品能力</p>
                            </div>
                            <div className="knowledge-item-title flex flex-col justify-center relative shrink-0 text-[#1e2436] text-[14px]" data-node-id="1:24635" data-tooltip="韩国新上线#支付方式#，教你一招，售卖谈判策略！" tabIndex={0}>
                              <p className="knowledge-item-title-text leading-[20px]">韩国新上线#支付方式#，教你一招，售卖谈判策略！</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-[#f8f8fb] content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-[280px] p-[16px] relative rounded-[6px]" data-node-id="1:24636">
                        <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-node-id="1:24637">
                          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Bold'] font-semibold justify-center leading-[0] min-w-px not-italic relative text-[#1e2436] text-[16px]" data-node-id="1:24638">
                            <p className="leading-[24px]">竞品专区</p>
                          </div>
                          <div className="content-stretch flex gap-[4px] items-center justify-center px-[2px] relative rounded-[4px] shrink-0" data-node-id="1:24639" data-name="link">
                            <div className="relative shrink-0 size-[12px]" data-node-id="I1:24639;1341:12602" data-name="common-linear-refresh">
                              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCommonLinearRefresh} />
                            </div>
                            <div className="[word-break:break-word] flex flex-col font-['Source_Han_Sans_CN:Medium'] justify-center leading-[0] not-italic relative shrink-0 text-[#646e87] text-[12px] whitespace-nowrap" data-node-id="I1:24639;1341:12603">
                              <p className="leading-[18px]">换一批</p>
                            </div>
                          </div>
                        </div>
                        <div className="content-stretch flex items-start relative shrink-0 w-full" data-node-id="1:24640">
                          <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col font-['Noto_Sans_SC:Regular'] font-normal gap-[2px] items-start justify-center leading-[0] min-w-px relative whitespace-nowrap" data-node-id="1:24641">
                            <div className="flex flex-col justify-center relative shrink-0 text-[#646e87] text-[12px]" data-node-id="1:24642">
                              <p className="leading-[18px]">airwallex</p>
                            </div>
                            <div className="knowledge-item-title flex flex-col justify-center relative shrink-0 text-[#1e2436] text-[14px]" data-node-id="1:24643" data-tooltip="AW上线集团管理视图！" tabIndex={0}>
                              <p className="knowledge-item-title-text leading-[20px]">AW上线集团管理视图！</p>
                            </div>
                          </div>
                        </div>
                        <div className="content-stretch flex items-start relative shrink-0 w-full" data-node-id="1:24644">
                          <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col font-['Noto_Sans_SC:Regular'] font-normal gap-[2px] items-start justify-center leading-[0] min-w-px relative whitespace-nowrap" data-node-id="1:24645">
                            <div className="flex flex-col justify-center relative shrink-0 text-[#646e87] text-[12px]" data-node-id="1:24646">
                              <p className="leading-[18px]">airwallex</p>
                            </div>
                            <div className="knowledge-item-title flex flex-col justify-center relative shrink-0 text-[#1e2436] text-[14px]" data-node-id="1:24647" data-tooltip="AW上线菲律宾Gcash,售卖价格为3.5%+0.5USD！" tabIndex={0}>
                              <p className="knowledge-item-title-text leading-[20px]">AW上线菲律宾Gcash,售卖价格为3.5%+0.5USD！</p>
                            </div>
                          </div>
                        </div>
                        <div className="content-stretch flex items-start relative shrink-0 w-full" data-node-id="1:24648">
                          <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col font-['Noto_Sans_SC:Regular'] font-normal gap-[2px] items-start justify-center leading-[0] min-w-px relative whitespace-nowrap" data-node-id="1:24649">
                            <div className="flex flex-col justify-center relative shrink-0 text-[#646e87] text-[12px]" data-node-id="1:24650">
                              <p className="leading-[18px]">airwallex</p>
                            </div>
                            <div className="knowledge-item-title flex flex-col justify-center relative shrink-0 text-[#1e2436] text-[14px]" data-node-id="1:24651" data-tooltip="AW上线集团管理视图！" tabIndex={0}>
                              <p className="knowledge-item-title-text leading-[20px]">AW上线集团管理视图！</p>
                            </div>
                          </div>
                        </div>
                        <div className="content-stretch flex items-start relative shrink-0 w-full" data-node-id="1:24652">
                          <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col font-['Noto_Sans_SC:Regular'] font-normal gap-[2px] items-start justify-center leading-[0] min-w-px relative whitespace-nowrap" data-node-id="1:24653">
                            <div className="flex flex-col justify-center relative shrink-0 text-[#646e87] text-[12px]" data-node-id="1:24654">
                              <p className="leading-[18px]">airwallex</p>
                            </div>
                            <div className="knowledge-item-title flex flex-col justify-center relative shrink-0 text-[#1e2436] text-[14px]" data-node-id="1:24655" data-tooltip="AW上线集团管理视图！" tabIndex={0}>
                              <p className="knowledge-item-title-text leading-[20px]">AW上线集团管理视图！</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[12px] items-start justify-center justify-self-stretch relative self-start shrink-0" data-node-id="1:24656">
                <div className="home-list-module bg-white border border-[#edeef3] border-solid content-stretch flex flex-col gap-[4px] items-start overflow-clip pb-[8px] pt-[20px] px-[12px] relative rounded-[8px] shadow-[0px_1px_1px_0px_rgba(20,41,79,0.02),0px_2px_4px_0px_rgba(20,41,79,0.01)] shrink-0 w-full" data-node-id="1:24677" data-name="新客拓展">
                  <div className="px-[8px] relative shrink-0 w-full" data-node-id="1:24678" data-name="标题">
                    <div className="home-module-titlebar bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center pb-[12px] relative size-full">
                      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-node-id="1:24679" data-name="标题">
                        <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="1:24680" data-name="标题">
                          <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#1e2436] text-[18px] whitespace-nowrap" data-node-id="1:24681">
                            <p className="leading-[24px]">待办任务</p>
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex gap-[4px] items-center justify-center px-[2px] relative rounded-[4px] shrink-0" data-node-id="1:24685" data-name="link">
                        <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] not-italic relative shrink-0 text-[#646e87] text-[12px] whitespace-nowrap" data-node-id="I1:24685;1341:12598">
                          <p className="leading-[18px]">更多</p>
                        </div>
                        <div className="relative shrink-0 size-[12px]" data-node-id="I1:24685;1341:12600" data-name="common-linear-arrow-right">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCommonLinearArrowStraightRight} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="border-[#e7e8ef] border-b border-solid px-[8px] relative shrink-0 w-full" data-node-id="1:24696" data-name="tabs-line">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
                      <div className="content-stretch flex flex-[1_0_0] gap-[24px] items-center min-w-px relative" data-node-id="I1:24696;522:7080" data-name="tabs水平插槽">
                        <div className="content-stretch flex flex-col gap-[4px] items-center justify-center max-w-[160px] min-w-[32px] pb-[12px] relative shrink-0" data-node-id="I1:24696;522:7080;1:24687" data-name="tabs-line-cell">
                          <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] min-w-full not-italic overflow-hidden relative shrink-0 text-[#1e2436] text-[14px] text-center text-ellipsis w-[min-content] whitespace-nowrap" data-node-id="I1:24696;522:7080;1:24689">
                            <p className="leading-[20px] overflow-hidden text-ellipsis">全部</p>
                          </div>
                          <div className="absolute bg-[#0036fe] bottom-0 h-[3px] left-0 right-0 rounded-tl-[2px] rounded-tr-[2px]" data-node-id="I1:24696;522:7080;1:24692" />
                        </div>
                        <div className="content-stretch flex gap-[4px] items-center justify-center max-w-[160px] min-w-[32px] pb-[12px] relative shrink-0" data-node-id="I1:24696;522:7080;1:24693" data-name="tabs-line-cell">
                          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#646e87] text-[14px] text-center text-ellipsis whitespace-nowrap" data-node-id="I1:24696;522:7080;1:24693;520:3460">
                            <p className="leading-[20px] overflow-hidden text-ellipsis">客户建联</p>
                          </div>
                        </div>
                        <div className="content-stretch flex gap-[4px] items-center justify-center max-w-[160px] min-w-[32px] pb-[12px] relative shrink-0" data-node-id="I1:24696;522:7080;1:24694" data-name="tabs-line-cell">
                          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#646e87] text-[14px] text-center text-ellipsis whitespace-nowrap" data-node-id="I1:24696;522:7080;1:24694;520:3460">
                            <p className="leading-[20px] overflow-hidden text-ellipsis">产品合作</p>
                          </div>
                        </div>
                        <div className="content-stretch flex gap-[4px] items-center justify-center max-w-[160px] min-w-[32px] pb-[12px] relative shrink-0" data-node-id="I1:24696;522:7080;1:24695" data-name="tabs-line-cell">
                          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#646e87] text-[14px] text-center text-ellipsis whitespace-nowrap" data-node-id="I1:24696;522:7080;1:24695;520:3460">
                            <p className="leading-[20px] overflow-hidden text-ellipsis">审批驳回</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="min-w-[320px] relative shrink-0 w-full" data-node-id="1:24698" data-name="任务">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start min-w-[inherit] overflow-clip relative rounded-[inherit] size-full">
                      <div className="task-item-with-divider content-stretch flex gap-[12px] items-center min-h-[64px] min-w-[320px] overflow-clip px-[8px] py-[12px] relative rounded-[6px] shrink-0 transition-colors duration-150 hover:bg-[#f8f8fb] w-full" data-node-id="1:24699" data-name="任务">
                        <div className="bg-[#fff1f3] content-stretch flex items-center justify-center p-[8px] relative rounded-[6px] shrink-0" data-node-id="1:24700" data-name="图标">
                          <div className="relative shrink-0 size-[16px]" data-node-id="1:24701" data-name="sidebar-linear-profile-user">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSidebarLinearProfileUser} />
                          </div>
                        </div>
                        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px relative" data-node-id="1:24702" data-name="任务">
                          <div className="content-stretch flex items-start relative shrink-0 w-full" data-node-id="1:24704" data-name="标题">
                            <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#1e2436] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="1:24705">
                              <p className="leading-[20px] overflow-hidden text-ellipsis">客户建联，逾期回收公海</p>
                            </div>
                          </div>
                          <div className="content-stretch flex gap-[8px] h-[18px] items-center relative shrink-0 w-full" data-node-id="1:24706" data-name="辅助内容区">
                            <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-node-id="1:24707" data-name="文字">
                              <div className="task-supporting-text [word-break:break-word] flex flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] not-italic relative shrink-0 text-[#646e87] text-[12px] whitespace-nowrap" data-node-id="1:24708">
                                <p className="task-supporting-text-value leading-[18px]">未来生活集团，剩余3天完成客户建联</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="task-item-with-divider content-stretch flex gap-[12px] items-center min-h-[64px] min-w-[320px] overflow-clip px-[8px] py-[12px] relative rounded-[6px] shrink-0 transition-colors duration-150 hover:bg-[#f8f8fb] w-full" data-node-id="1:24711" data-name="任务">
                        <div className="bg-[#f8f8fb] content-stretch flex items-center justify-center p-[8px] relative rounded-[6px] shrink-0" data-node-id="1:24712" data-name="图标">
                          <div className="relative shrink-0 size-[16px]" data-node-id="1:24713" data-name="sidebar-linear-seal">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSidebarLinearSeal} />
                          </div>
                        </div>
                        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px relative" data-node-id="1:24714" data-name="任务">
                          <div className="content-stretch flex items-start relative shrink-0 w-full" data-node-id="1:24716" data-name="标题">
                            <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#1e2436] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="1:24717">
                              <p className="leading-[20px] overflow-hidden text-ellipsis">产品合作材料驳回整改</p>
                            </div>
                          </div>
                          <div className="content-stretch flex gap-[8px] h-[18px] items-center relative shrink-0 w-full" data-node-id="1:24718" data-name="辅助内容区">
                            <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-node-id="1:24719" data-name="文字">
                              <div className="task-supporting-text [word-break:break-word] flex flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] not-italic relative shrink-0 text-[#646e87] text-[12px] whitespace-nowrap" data-node-id="1:24720">
                                <p className="task-supporting-text-value leading-[18px]">TestPOS新产品合作，补充域名所有权证明</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="task-item-with-divider content-stretch flex gap-[12px] items-center min-h-[64px] min-w-[320px] overflow-clip px-[8px] py-[12px] relative rounded-[6px] shrink-0 transition-colors duration-150 hover:bg-[#f8f8fb] w-full" data-node-id="1:24723" data-name="任务">
                        <div className="bg-[#f8f8fb] content-stretch flex items-center justify-center p-[8px] relative rounded-[6px] shrink-0" data-node-id="1:24724" data-name="图标">
                          <div className="relative shrink-0 size-[16px]" data-node-id="1:24725" data-name="common-linear-box-add">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCommonLinearBoxAdd} />
                          </div>
                        </div>
                        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px relative" data-node-id="1:24726" data-name="任务">
                          <div className="content-stretch flex items-start relative shrink-0 w-full" data-node-id="1:24728" data-name="标题">
                            <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#1e2436] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="1:24729">
                              <p className="leading-[20px] overflow-hidden text-ellipsis">服务协议待确认</p>
                            </div>
                          </div>
                          <div className="content-stretch flex gap-[8px] h-[18px] items-center relative shrink-0 w-full" data-node-id="1:24730" data-name="辅助内容区">
                            <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-node-id="1:24731" data-name="文字">
                              <div className="task-supporting-text [word-break:break-word] flex flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] not-italic relative shrink-0 text-[#646e87] text-[12px] whitespace-nowrap" data-node-id="1:24732">
                                <p className="task-supporting-text-value leading-[18px]">TestPOS新产品合作，服务协议待您审核确认</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="task-item-with-divider content-stretch flex gap-[12px] items-center min-h-[64px] min-w-[320px] overflow-clip px-[8px] py-[12px] relative rounded-[6px] shrink-0 transition-colors duration-150 hover:bg-[#f8f8fb] w-full" data-node-id="1:24735" data-name="任务">
                        <div className="bg-[#f8f8fb] content-stretch flex items-center justify-center p-[8px] relative rounded-[6px] shrink-0" data-node-id="1:24736" data-name="图标">
                          <div className="relative shrink-0 size-[16px]" data-node-id="1:24737" data-name="sidebar-linear-seal">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSidebarLinearSeal} />
                          </div>
                        </div>
                        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px relative" data-node-id="1:24738" data-name="任务">
                          <div className="content-stretch flex items-start relative shrink-0 w-full" data-node-id="1:24740" data-name="标题">
                            <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#1e2436] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="1:24741">
                              <p className="leading-[20px] overflow-hidden text-ellipsis">报价单驳回待整改</p>
                            </div>
                          </div>
                          <div className="content-stretch flex gap-[8px] h-[18px] items-center relative shrink-0 w-full" data-node-id="1:24742" data-name="辅助内容区">
                            <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-node-id="1:24743" data-name="文字">
                              <div className="task-supporting-text [word-break:break-word] flex flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] not-italic relative shrink-0 text-[#646e87] text-[12px] whitespace-nowrap" data-node-id="1:24744">
                                <p className="task-supporting-text-value leading-[18px]">TestPOS已有商户增购</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex gap-[12px] items-center min-h-[64px] min-w-[320px] overflow-clip px-[8px] py-[12px] relative rounded-[6px] shrink-0 transition-colors duration-150 hover:bg-[#f8f8fb] w-full" data-node-id="1:24747" data-name="任务">
                        <div className="bg-[#f8f8fb] content-stretch flex items-center justify-center p-[8px] relative rounded-[6px] shrink-0" data-node-id="1:24748" data-name="图标">
                          <div className="relative shrink-0 size-[16px]" data-node-id="1:24749" data-name="common-linear-box-add">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCommonLinearBoxAdd} />
                          </div>
                        </div>
                        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px relative" data-node-id="1:24750" data-name="任务">
                          <div className="content-stretch flex items-start relative shrink-0 w-full" data-node-id="1:24752" data-name="标题">
                            <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#1e2436] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="1:24753">
                              <p className="leading-[20px] overflow-hidden text-ellipsis">MCC变更待确认</p>
                            </div>
                          </div>
                          <div className="content-stretch flex gap-[8px] h-[18px] items-center relative shrink-0 w-full" data-node-id="1:24754" data-name="辅助内容区">
                            <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-node-id="1:24755" data-name="文字">
                              <div className="task-supporting-text [word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#646e87] text-[12px] text-ellipsis whitespace-nowrap" data-node-id="1:24756">
                                <p className="task-supporting-text-value leading-[18px] overflow-hidden text-ellipsis">TestPOS新产品合作，KYCB审核通过，MCC有变更待处理</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white border border-[#edeef3] border-solid content-stretch drop-shadow-[0px_1px_0.5px_rgba(20,41,79,0.02),0px_2px_2px_rgba(20,41,79,0.01)] flex flex-col gap-[16px] items-start px-[13px] py-[21px] relative rounded-[8px] shrink-0 w-full" data-node-id="1:24759" data-name="咨询服务">
                  <div className="relative shrink-0 w-full" data-node-id="1:24760">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start px-[8px] relative size-full">
                      <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-node-id="1:24761" data-name="标题">
                        <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-w-px relative" data-node-id="1:24762">
                          <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#1e2436] text-[18px] whitespace-nowrap" data-node-id="1:24763">
                            <p className="leading-[24px]">常用功能</p>
                          </div>
                        </div>
                        <div className="content-stretch flex gap-[4px] items-center justify-center px-[2px] relative rounded-[4px] shrink-0" data-node-id="1:24765" data-name="link">
                          <div className="relative shrink-0 size-[12px]" data-node-id="I1:24765;1341:12602" data-name="sidebar-linear-settings" />
                          <div className="[word-break:break-word] flex flex-col font-['Source_Han_Sans_CN:Medium'] justify-center leading-[0] not-italic relative shrink-0 text-[#646e87] text-[12px] whitespace-nowrap" data-node-id="I1:24765;1341:12603">
                            <p className="leading-[18px]">自定义</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative rounded-[8px] shrink-0 w-full" data-node-id="1:24767" data-name="下拉布局">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid gap-x-[12px] gap-y-[12px] grid grid-cols-[repeat(4,minmax(0,1fr))] grid-rows-[repeat(2,fit-content(100%))] overflow-clip relative rounded-[inherit] size-full">
                      <button className="common-function-item content-stretch flex flex-col gap-[4px] items-center justify-self-stretch min-w-[72px] px-[8px] relative rounded-[8px] self-stretch shrink-0" data-node-id="1:24768" data-name="dropdown-menu-item" onClick={onNavigateForm} type="button">
                        <div className="bg-[#f8f8fb] content-stretch flex items-center justify-center p-[8px] relative rounded-[6px] shrink-0" data-node-id="1:24770" data-name="图标">
                          <Group8 className="relative shrink-0 size-[24px]" />
                        </div>
                        <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-node-id="1:24772" data-name="账户">
                          <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#1e2436] text-[12px] text-center text-ellipsis w-full whitespace-nowrap" data-node-id="1:24773">
                            <p className="leading-[18px] overflow-hidden text-ellipsis">产品合作</p>
                          </div>
                        </div>
                      </button>
                      <button className="common-function-item content-stretch flex flex-col gap-[4px] items-center justify-self-stretch min-w-[72px] px-[8px] relative rounded-[8px] self-stretch shrink-0" data-node-id="1:24791" data-name="dropdown-menu-item" onClick={onNavigateForm} type="button">
                        <div className="bg-[#f8f8fb] content-stretch flex items-center justify-center p-[8px] relative rounded-[6px] shrink-0" data-node-id="1:24793" data-name="图标">
                          <Group8 className="relative shrink-0 size-[24px]" property1="Frame 2147208044" />
                        </div>
                        <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-node-id="1:24795" data-name="账户">
                          <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#1e2436] text-[12px] text-center text-ellipsis w-full whitespace-nowrap" data-node-id="1:24796">
                            <p className="leading-[18px] overflow-hidden text-ellipsis">报价评估</p>
                          </div>
                        </div>
                      </button>
                      <button className="common-function-item content-stretch flex flex-col gap-[4px] items-center justify-self-stretch min-w-[72px] px-[8px] relative rounded-[8px] self-stretch shrink-0" data-node-id="1:24814" data-name="dropdown-menu-item" onClick={onNavigateForm} type="button">
                        <div className="bg-[#f8f8fb] content-stretch flex items-center justify-center p-[8px] relative rounded-[6px] shrink-0" data-node-id="1:24816" data-name="图标">
                          <Group8 className="relative shrink-0 size-[24px]" property1="receipt-minus" />
                        </div>
                        <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-node-id="1:24818" data-name="账户">
                          <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#1e2436] text-[12px] text-center text-ellipsis w-full whitespace-nowrap" data-node-id="1:24819">
                            <p className="leading-[18px] overflow-hidden text-ellipsis">批量调价</p>
                          </div>
                        </div>
                      </button>
                      <button className="common-function-item content-stretch flex flex-col gap-[4px] items-center justify-self-stretch min-w-[72px] px-[8px] relative rounded-[8px] self-stretch shrink-0" data-node-id="1:24837" data-name="dropdown-menu-item" onClick={onNavigateForm} type="button">
                        <div className="bg-[#f8f8fb] content-stretch flex items-center justify-center p-[8px] relative rounded-[6px] shrink-0" data-node-id="1:24839" data-name="图标">
                          <Group8 className="relative shrink-0 size-[24px]" property1="wallet-add" />
                        </div>
                        <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-node-id="1:24841" data-name="账户">
                          <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#1e2436] text-[12px] text-center text-ellipsis w-full whitespace-nowrap" data-node-id="1:24842">
                            <p className="leading-[18px] overflow-hidden text-ellipsis">增购</p>
                          </div>
                        </div>
                      </button>
                      <button className="common-function-item content-stretch flex flex-col gap-[4px] items-center justify-self-stretch min-w-[72px] px-[8px] relative rounded-[8px] self-stretch shrink-0" data-node-id="1:24860" data-name="dropdown-menu-item" onClick={onNavigateForm} type="button">
                        <div className="bg-[#f8f8fb] content-stretch flex items-center justify-center p-[8px] relative rounded-[6px] shrink-0" data-node-id="1:24862" data-name="图标">
                          <Group8 className="relative shrink-0 size-[24px]" property1="cards" />
                        </div>
                        <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-node-id="1:24864" data-name="账户">
                          <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#1e2436] text-[12px] text-center text-ellipsis w-full whitespace-nowrap" data-node-id="1:24865">
                            <p className="leading-[18px] overflow-hidden text-ellipsis">新开商户</p>
                          </div>
                        </div>
                      </button>
                      <button className="common-function-item content-stretch flex flex-col gap-[4px] items-center justify-self-stretch min-w-[72px] px-[8px] relative rounded-[8px] self-stretch shrink-0" data-node-id="1:24883" data-name="dropdown-menu-item" onClick={onNavigateForm} type="button">
                        <div className="bg-[#f8f8fb] content-stretch flex items-center justify-center p-[8px] relative rounded-[6px] shrink-0" data-node-id="1:24885" data-name="图标">
                          <Group8 className="relative shrink-0 size-[24px]" property1="save-add" />
                        </div>
                        <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-node-id="1:24887" data-name="账户">
                          <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#1e2436] text-[12px] text-center text-ellipsis w-full whitespace-nowrap" data-node-id="1:24888">
                            <p className="leading-[18px] overflow-hidden text-ellipsis">邀请入驻</p>
                          </div>
                        </div>
                      </button>
                      <button className="common-function-item content-stretch flex flex-col gap-[4px] items-center justify-self-stretch min-w-[72px] px-[8px] relative rounded-[8px] self-stretch shrink-0" data-node-id="1:24906" data-name="dropdown-menu-item" onClick={onNavigateForm} type="button">
                        <div className="bg-[#f8f8fb] content-stretch flex items-center justify-center p-[8px] relative rounded-[6px] shrink-0" data-node-id="1:24908" data-name="图标">
                          <Group8 className="relative shrink-0 size-[24px]" property1="bag-2" />
                        </div>
                        <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-node-id="1:24910" data-name="账户">
                          <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#1e2436] text-[12px] text-center text-ellipsis w-full whitespace-nowrap" data-node-id="1:24911">
                            <p className="leading-[18px] overflow-hidden text-ellipsis">能力申请</p>
                          </div>
                        </div>
                      </button>
                      <button className="common-function-item content-stretch flex flex-col gap-[4px] items-center justify-self-stretch min-w-[72px] px-[8px] relative rounded-[8px] self-stretch shrink-0" data-node-id="1:24929" data-name="dropdown-menu-item" onClick={onNavigateForm} type="button">
                        <div className="bg-[#f8f8fb] content-stretch flex items-center justify-center p-[8px] relative rounded-[6px] shrink-0" data-node-id="1:24931" data-name="图标">
                          <Group8 className="relative shrink-0 size-[24px]" property1="more" />
                        </div>
                        <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-node-id="1:24933" data-name="账户">
                          <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#1e2436] text-[12px] text-center text-ellipsis w-full whitespace-nowrap" data-node-id="1:24934">
                            <p className="leading-[18px] overflow-hidden text-ellipsis">更多功能</p>
                          </div>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="home-list-module bg-white border border-[#edeef3] border-solid content-stretch drop-shadow-[0px_1px_0.5px_rgba(20,41,79,0.02),0px_2px_2px_rgba(20,41,79,0.01)] flex flex-col gap-[16px] items-start pb-[8px] pt-[20px] px-[12px] relative rounded-[8px] shrink-0 w-full" data-node-id="1:25169" data-name="客户事件">
                  <div className="px-[8px] relative shrink-0 w-full" data-node-id="1:25170" data-name="标题">
                    <div className="home-module-titlebar bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative size-full">
                      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-node-id="1:25171" data-name="标题">
                        <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="1:25172" data-name="标题">
                          <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Bold'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#1e2436] text-[18px] whitespace-nowrap" data-node-id="1:25173">
                            <p className="leading-[24px]">客户异动</p>
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex gap-[4px] items-center justify-center px-[2px] relative rounded-[4px] shrink-0" data-node-id="1:25177" data-name="link">
                        <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] not-italic relative shrink-0 text-[#646e87] text-[12px] whitespace-nowrap" data-node-id="I1:25177;1341:12598">
                          <p className="leading-[18px]">更多</p>
                        </div>
                        <div className="relative shrink-0 size-[12px]" data-node-id="I1:25177;1341:12600" data-name="common-linear-arrow-right">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCommonLinearArrowStraightRight} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative shrink-0 w-full" data-node-id="1:25204">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-0 items-start relative size-full">
                      <div className="content-stretch flex flex-col gap-[4px] items-start justify-center overflow-clip px-[8px] py-[12px] relative rounded-[6px] shrink-0 transition-colors duration-150 hover:bg-[#f8f8fb] w-full" data-node-id="1:25205" data-name="event">
                        <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-node-id="1:25206">
                          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#1e2436] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="1:25208">
                            <p className="leading-[20px] overflow-hidden text-ellipsis">菲律宾Gcash收单跌0</p>
                          </div>
                          <div className="content-stretch flex gap-[4px] items-center relative rounded-[9999px] shrink-0" data-node-id="1:25209" data-name="tag">
                            <div className="bg-[#e5485d] content-stretch flex flex-col items-center justify-center p-[2px] relative rounded-[8px] shrink-0" data-node-id="1:25210" data-name="badge">
                              <div className="flex items-center justify-center relative shrink-0" data-node-id="1:25211">
                                <div className="-scale-y-100 flex-none rotate-180">
                                  <div className="bg-[#d9d9d9] relative size-0" data-name="dot" />
                                </div>
                              </div>
                            </div>
                            <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] not-italic relative shrink-0 text-[#e5485d] text-[12px] whitespace-nowrap" data-node-id="1:25212">
                              <p className="leading-[18px]">未通知</p>
                            </div>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0 w-full" data-node-id="1:25219">
                          <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-node-id="1:25220">
                            <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#646e87] text-[12px] text-ellipsis whitespace-nowrap" data-node-id="1:25223">
                              <p className="leading-[18px] overflow-hidden text-ellipsis">菲律宾Gcash渠道下线引起支付方式的下线时需要对客通知。菲律宾Gcash渠道下线引起支付方式的下线时需要对客通知。</p>
                            </div>
                          </div>
                          <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-node-id="1:25224">
                            <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] not-italic relative shrink-0 text-[#646e87] text-[12px] whitespace-nowrap" data-node-id="1:25225">
                              <p className="leading-[18px]">影响客户 32</p>
                            </div>
                            <div className="flex h-[10px] items-center justify-center relative shrink-0 w-0" data-node-id="1:25226">
                              <div className="flex-none rotate-90">
                                <div className="h-0 relative w-[10px]">
                                  <div className="absolute inset-[-1px_0_0_0]">
                                    <img alt="" className="block max-w-none size-full" src={imgLine25} />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] min-w-px not-italic relative text-[#646e87] text-[12px]" data-node-id="1:25229">
                              <p className="leading-[18px]">UTC +0:00 2025-06-09 10:29</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="h-px relative shrink-0 w-full" data-node-id="1:25240" data-name="divider">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgDivider} />
                      </div>
                      <div className="content-stretch flex flex-col gap-[4px] items-start justify-center overflow-clip px-[8px] py-[12px] relative rounded-[6px] shrink-0 transition-colors duration-150 hover:bg-[#f8f8fb] w-full" data-node-id="1:25241" data-name="event">
                        <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-node-id="1:25242">
                          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#1e2436] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="1:25244">
                            <p className="leading-[20px] overflow-hidden text-ellipsis">菲律宾Gcash收单跌0</p>
                          </div>
                          <div className="content-stretch flex gap-[4px] items-center relative rounded-[9999px] shrink-0" data-node-id="1:25248" data-name="tag">
                            <div className="bg-[#e5485d] content-stretch flex flex-col items-center justify-center p-[2px] relative rounded-[8px] shrink-0" data-node-id="1:25249" data-name="badge">
                              <div className="flex items-center justify-center relative shrink-0" data-node-id="1:25250">
                                <div className="-scale-y-100 flex-none rotate-180">
                                  <div className="bg-[#d9d9d9] relative size-0" data-name="dot" />
                                </div>
                              </div>
                            </div>
                            <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] not-italic relative shrink-0 text-[#e5485d] text-[12px] whitespace-nowrap" data-node-id="1:25251">
                              <p className="leading-[18px]">未通知</p>
                            </div>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0 w-full" data-node-id="1:25255">
                          <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-node-id="1:25256">
                            <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#646e87] text-[12px] text-ellipsis whitespace-nowrap" data-node-id="1:25259">
                              <p className="leading-[18px] overflow-hidden text-ellipsis">菲律宾Gcash渠道下线引起支付方式的下线时需要对客通知。菲律宾Gcash渠道下线引起支付方式的下线时需要对客通知。</p>
                            </div>
                          </div>
                          <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-node-id="1:25260">
                            <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] not-italic relative shrink-0 text-[#646e87] text-[12px] whitespace-nowrap" data-node-id="1:25261">
                              <p className="leading-[18px]">影响客户 32</p>
                            </div>
                            <div className="flex h-[10px] items-center justify-center relative shrink-0 w-0" data-node-id="1:25262">
                              <div className="flex-none rotate-90">
                                <div className="h-0 relative w-[10px]">
                                  <div className="absolute inset-[-1px_0_0_0]">
                                    <img alt="" className="block max-w-none size-full" src={imgLine25} />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] min-w-px not-italic relative text-[#646e87] text-[12px]" data-node-id="1:25265">
                              <p className="leading-[18px]">UTC +0:00 2025-06-09 10:29</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="h-px relative shrink-0 w-full" data-node-id="1:25276" data-name="divider">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgDivider} />
                      </div>
                      <div className="content-stretch flex flex-col gap-[4px] items-start justify-center overflow-clip px-[8px] py-[12px] relative rounded-[6px] shrink-0 transition-colors duration-150 hover:bg-[#f8f8fb] w-full" data-node-id="1:25277" data-name="event">
                        <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-node-id="1:25278">
                          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#1e2436] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="1:25280">
                            <p className="leading-[20px] overflow-hidden text-ellipsis">菲律宾Gcash收单跌0</p>
                          </div>
                          <div className="content-stretch flex gap-[4px] items-center relative rounded-[9999px] shrink-0" data-node-id="1:25284" data-name="tag">
                            <div className="bg-[#18a765] content-stretch flex flex-col items-center justify-center p-[2px] relative rounded-[8px] shrink-0" data-node-id="1:25285" data-name="badge">
                              <div className="flex items-center justify-center relative shrink-0" data-node-id="1:25286">
                                <div className="-scale-y-100 flex-none rotate-180">
                                  <div className="bg-[#d9d9d9] relative size-0" data-name="dot" />
                                </div>
                              </div>
                            </div>
                            <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] not-italic relative shrink-0 text-[#18a765] text-[12px] whitespace-nowrap" data-node-id="1:25287">
                              <p className="leading-[18px]">已通知</p>
                            </div>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0 w-full" data-node-id="1:25301">
                          <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-node-id="1:25302">
                            <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#646e87] text-[12px] text-ellipsis whitespace-nowrap" data-node-id="1:25305">
                              <p className="leading-[18px] overflow-hidden text-ellipsis">菲律宾Gcash渠道下线引起支付方式的下线时需要对客通知。菲律宾Gcash渠道下线引起支付方式的下线时需要对客通知。</p>
                            </div>
                          </div>
                          <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-node-id="1:25306">
                            <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] not-italic relative shrink-0 text-[#646e87] text-[12px] whitespace-nowrap" data-node-id="1:25307">
                              <p className="leading-[18px]">影响客户 32</p>
                            </div>
                            <div className="flex h-[10px] items-center justify-center relative shrink-0 w-0" data-node-id="1:25308">
                              <div className="flex-none rotate-90">
                                <div className="h-0 relative w-[10px]">
                                  <div className="absolute inset-[-1px_0_0_0]">
                                    <img alt="" className="block max-w-none size-full" src={imgLine25} />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] min-w-px not-italic relative text-[#646e87] text-[12px]" data-node-id="1:25311">
                              <p className="leading-[18px]">UTC +0:00 2025-06-09 10:29</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="h-px relative shrink-0 w-full" data-node-id="1:25312" data-name="divider">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgDivider} />
                      </div>
                      <div className="content-stretch flex flex-col gap-[4px] items-start justify-center overflow-clip px-[8px] py-[12px] relative rounded-[6px] shrink-0 transition-colors duration-150 hover:bg-[#f8f8fb] w-full" data-node-id="1:25313" data-name="event">
                        <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-node-id="1:25314">
                          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#1e2436] text-[14px] text-ellipsis whitespace-nowrap" data-node-id="1:25316">
                            <p className="leading-[20px] overflow-hidden text-ellipsis">菲律宾Gcash收单跌0</p>
                          </div>
                          <div className="content-stretch flex gap-[4px] items-center relative rounded-[9999px] shrink-0" data-node-id="1:25320" data-name="tag">
                            <div className="bg-[#18a765] content-stretch flex flex-col items-center justify-center p-[2px] relative rounded-[8px] shrink-0" data-node-id="1:25321" data-name="badge">
                              <div className="flex items-center justify-center relative shrink-0" data-node-id="1:25322">
                                <div className="-scale-y-100 flex-none rotate-180">
                                  <div className="bg-[#d9d9d9] relative size-0" data-name="dot" />
                                </div>
                              </div>
                            </div>
                            <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Medium'] justify-center leading-[0] not-italic relative shrink-0 text-[#18a765] text-[12px] whitespace-nowrap" data-node-id="1:25323">
                              <p className="leading-[18px]">已通知</p>
                            </div>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0 w-full" data-node-id="1:25337">
                          <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-node-id="1:25338">
                            <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#646e87] text-[12px] text-ellipsis whitespace-nowrap" data-node-id="1:25341">
                              <p className="leading-[18px] overflow-hidden text-ellipsis">菲律宾Gcash渠道下线引起支付方式的下线时需要对客通知。菲律宾Gcash渠道下线引起支付方式的下线时需要对客通知。</p>
                            </div>
                          </div>
                          <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-node-id="1:25342">
                            <div className="[word-break:break-word] flex flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] not-italic relative shrink-0 text-[#646e87] text-[12px] whitespace-nowrap" data-node-id="1:25343">
                              <p className="leading-[18px]">影响客户 32</p>
                            </div>
                            <div className="flex h-[10px] items-center justify-center relative shrink-0 w-0" data-node-id="1:25344">
                              <div className="flex-none rotate-90">
                                <div className="h-0 relative w-[10px]">
                                  <div className="absolute inset-[-1px_0_0_0]">
                                    <img alt="" className="block max-w-none size-full" src={imgLine26} />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['PingFang_SC:Regular'] justify-center leading-[0] min-w-px not-italic relative text-[#646e87] text-[12px]" data-node-id="1:25347">
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
