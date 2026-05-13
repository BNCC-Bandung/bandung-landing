import type { StructureProps } from "@/types/grid";
import Image from "next/image";

type PositionedStructureItem = StructureProps & {
  colStart: number;
  rowStart: number;
};

const getGridPosition = (className: string) => {
  const colMatch = /col-start-(\d+)/.exec(className);
  const rowMatch = /row-start-(\d+)/.exec(className);

  return {
    colStart: Number(colMatch?.[1] ?? 1),
    rowStart: Number(rowMatch?.[1] ?? 1),
  };
};

const GridItem = ({ item }: { item: PositionedStructureItem }) => (
  <div
    className="shadow-custom-shadow relative z-10 flex flex-col gap-4 rounded-xl bg-white/5 p-6 text-white backdrop-blur-lg"
    style={{
      gridColumnStart: item.colStart,
      gridRowStart: item.rowStart * 2 - 1,
    }}
  >
    <div className="relative">
      <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-[#65E0E9] to-[#3E47BE] opacity-75 blur" />
      <div className="relative">
        <Image
          src={item.imageSrc}
          alt={item.alt}
          width={200}
          height={150}
          className="aspect-[2/3] w-full rounded-lg object-cover"
        />
      </div>
    </div>
    <div className="space-y-2 text-center">
      <div className="flex flex-col items-center justify-between">
        <h2 className="text-lg font-bold">{item.position}</h2>
        <span className="font-light">{item.name}</span>
      </div>
    </div>
  </div>
);

export function OurStructure({ gridItems }: { gridItems: StructureProps[] }) {
  const positionedItems = gridItems.map((item) => ({
    ...item,
    ...getGridPosition(item.className),
  }));

  const rows = [...new Set(positionedItems.map((item) => item.rowStart))].sort(
    (a, b) => a - b,
  );

  return (
    <div className="grid grid-cols-5 grid-rows-[auto_4rem_auto_4rem_auto] gap-x-[2.5rem] gap-y-0">
      {rows.slice(0, -1).map((row) => {
        const parentItems = positionedItems.filter((item) => item.rowStart === row);
        const childItems = positionedItems.filter(
          (item) => item.rowStart === row + 1,
        );

        if (parentItems.length === 0 || childItems.length === 0) {
          return null;
        }

        const allColumns = [...parentItems, ...childItems].map(
          (item) => item.colStart,
        );
        const minCol = Math.min(...allColumns);
        const maxCol = Math.max(...allColumns);
        const connectorRow = row * 2;

        return (
          <div key={`connector-row-${row}`} className="contents">
            <div
              className="pointer-events-none relative z-0 self-center"
              style={{
                gridColumnStart: minCol,
                gridColumnEnd: maxCol + 1,
                gridRowStart: connectorRow,
              }}
            >
              <div className="h-px w-full bg-white/35" />
            </div>

            {parentItems.map((item) => (
              <div
                key={`parent-connector-${row}-${item.id}`}
                className="pointer-events-none relative z-0 h-full justify-self-center"
                style={{
                  gridColumnStart: item.colStart,
                  gridRowStart: connectorRow,
                }}
              >
                <div className="absolute left-1/2 top-0 h-1/2 w-px -translate-x-1/2 bg-white/35" />
              </div>
            ))}

            {childItems.map((item) => (
              <div
                key={`child-connector-${row}-${item.id}`}
                className="pointer-events-none relative z-0 h-full justify-self-center"
                style={{
                  gridColumnStart: item.colStart,
                  gridRowStart: connectorRow,
                }}
              >
                <div className="absolute bottom-0 left-1/2 h-1/2 w-px -translate-x-1/2 bg-white/35" />
              </div>
            ))}
          </div>
        );
      })}

      {positionedItems.map((item) => (
        <GridItem key={item.id} item={item} />
      ))}
    </div>
  );
}
