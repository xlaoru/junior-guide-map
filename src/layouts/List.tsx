import { memo, useState, useEffect } from "react";
import { List } from "react-virtualized";
import ContentItem from "../components/ContentItem";
import getText from "../utils/getText";
import translation from "../assets/translation";
import { IListProps } from "../utils/models";

const VirtualizedList = memo(({ value, content }: IListProps) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const language = localStorage.getItem("language") || "en";

  const rowRenderer = ({
    index,
    key,
    style,
  }: {
    index: number;
    key: string;
    style: React.CSSProperties;
  }) => {
    const item = content[index];

    return (
      <div key={key} style={style}>
        <ContentItem
          value={value}
          data={item.data}
          title={language === "en" ? item.title.en : item.title.ua}
          body={language === "en" ? item.body.en : item.body.ua}
          link={language === "en" ? item.link.en : item.link.ua}
          type={Array.isArray(item.type) ? item.type.join(", ") : item.type}
        />
      </div>
    );
  };

  const noRowsRenderer = () => (
    <h2 className="error-caption">{getText(translation.list.error)}</h2>
  );

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <List
        width={windowWidth > 600 ? windowWidth / 2 : windowWidth / 1.1}
        height={windowHeight / 1.55}
        rowCount={content.length}
        rowHeight={650}
        rowRenderer={rowRenderer}
        noRowsRenderer={noRowsRenderer}
      />
    </div>
  );
});

export default VirtualizedList;
