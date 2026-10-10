import type { ChangeEvent } from "react";

const assetPathPrefix = `${import.meta.env.BASE_URL}assets/list`;
const imgProfile2User = `${assetPathPrefix}/52091.svg`;
const imgWhatsapp = `${assetPathPrefix}/f562d.svg`;
const imgLovely = `${assetPathPrefix}/bfa98.svg`;
const imgVoucherEdit = `${assetPathPrefix}/222c0.svg`;
const imgTickCircle = `${assetPathPrefix}/1c3f1.svg`;
const imgWarningCircle = `${assetPathPrefix}/8a512.svg`;
const imgCommonLinearArrowDown = `${assetPathPrefix}/2bc01.svg`;
const imgCommonLinearDelete = `${assetPathPrefix}/aa449.svg`;
const imgCommonLinearRefresh = `${assetPathPrefix}/6ee98.svg`;
const imgSidebarLinearSettings = `${assetPathPrefix}/bee22.svg`;

const statistics = [
  { icon: imgProfile2User, label: "全部集团" },
  { icon: imgWhatsapp, label: "初步接触" },
  { icon: imgLovely, label: "意向沟通" },
  { icon: imgVoucherEdit, label: "入驻签约" },
  { icon: imgTickCircle, label: "运营/增长" },
  { icon: imgWarningCircle, label: "沉睡/流失" },
];

type TraditionalTableViewProps = {
  onSearchChange: (value: string) => void;
  searchQuery: string;
};

function FilterField({
  label,
  placeholder,
  searchable = false,
  searchQuery,
  onSearchChange,
}: {
  label: string;
  placeholder: string;
  searchable?: boolean;
  searchQuery?: string;
  onSearchChange?: (value: string) => void;
}) {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => onSearchChange?.(event.target.value);

  return (
    <label className="flex h-[32px] min-w-[240px] items-center gap-[8px] rounded-[8px] border border-[#e7e8ef] bg-white px-[12px]">
      <span className="shrink-0 font-['PingFang_SC:Regular'] text-[14px] leading-[20px] text-[#3c455d]">{label}</span>
      {searchable ? (
        <input
          aria-label={`${label}${placeholder}`}
          className="min-w-0 flex-1 bg-transparent font-['PingFang_SC:Regular'] text-[14px] leading-[20px] text-[#1e2436] outline-none placeholder:text-[#9097ad]"
          onChange={handleChange}
          placeholder={placeholder}
          type="search"
          value={searchQuery}
        />
      ) : (
        <>
          <span className="min-w-0 flex-1 overflow-hidden text-ellipsis whitespace-nowrap font-['PingFang_SC:Regular'] text-[14px] leading-[20px] text-[#9097ad]">{placeholder}</span>
          <img alt="" className="size-[16px] shrink-0" src={imgCommonLinearArrowDown} />
        </>
      )}
    </label>
  );
}

export default function TraditionalTableView({ onSearchChange, searchQuery }: TraditionalTableViewProps) {
  return (
    <div className="traditional-table-design flex w-full shrink-0 flex-col gap-[12px]">
      <div className="grid w-full grid-cols-6 gap-[12px]">
        {statistics.map(({ icon, label }) => (
          <div key={label} className="flex min-w-[150px] items-center gap-[12px] rounded-[8px] border border-[#edeef3] bg-white px-[20px] py-[12px] shadow-[0px_1px_0.5px_rgba(20,41,79,0.02),0px_2px_2px_rgba(20,41,79,0.01)]">
            <div className="flex size-[40px] shrink-0 items-center justify-center rounded-[6px] bg-[#f8f8fb]">
              <img alt="" className="block max-w-none" src={icon} />
            </div>
            <div className="min-w-0">
              <p className="overflow-hidden text-ellipsis whitespace-nowrap font-['PingFang_SC:Regular'] text-[14px] leading-[20px] text-[#3c455d]">{label}</p>
              <p className="font-['Inter:Semi_Bold'] text-[20px] font-semibold leading-[24px] text-[#1e2436]">28</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid w-full grid-cols-3 gap-[12px] rounded-[8px] border border-[#edeef3] bg-white p-[20px] shadow-[0px_1px_0.5px_rgba(20,41,79,0.02),0px_2px_2px_rgba(20,41,79,0.01)]">
        <FilterField label="集团/客户" onSearchChange={onSearchChange} placeholder="搜索名称/ID" searchable searchQuery={searchQuery} />
        <FilterField label="商户" placeholder="搜索名称/内部名称/商户号" />
        <FilterField label="集团等级" placeholder="请选择" />
        <FilterField label="集团标签" placeholder="请选择" />
        <FilterField label="生命周期" placeholder="请选择" />
        <div className="flex min-w-0 flex-wrap items-center gap-[8px]">
          <button className="flex h-[32px] items-center gap-[6px] rounded-[8px] border border-[#e7e8ef] px-[8px] font-['PingFang_SC:Regular'] text-[14px] text-[#3c455d]" type="button">
            更多筛选
            <img alt="" className="size-[16px]" src={imgCommonLinearArrowDown} />
          </button>
          <button className="h-[32px] rounded-[8px] border border-[#0036fe] px-[12px] font-['PingFang_SC:Medium'] text-[14px] text-[#0036fe]" type="button">查询</button>
          <button aria-label="清空筛选" className="flex size-[32px] items-center justify-center rounded-[8px] border border-[#e7e8ef]" onClick={() => onSearchChange("")} type="button">
            <img alt="" className="size-[16px]" src={imgCommonLinearDelete} />
          </button>
          <button aria-label="刷新" className="flex size-[32px] items-center justify-center rounded-[8px] border border-[#e7e8ef]" type="button">
            <img alt="" className="size-[16px]" src={imgCommonLinearRefresh} />
          </button>
          <button aria-label="表格设置" className="flex size-[32px] items-center justify-center rounded-[8px] border border-[#e7e8ef]" type="button">
            <img alt="" className="size-[16px]" src={imgSidebarLinearSettings} />
          </button>
        </div>
      </div>

    </div>
  );
}
