const GetText = ({ normalText, formattedText, styles }) => {
  if (formattedText.entities) {
    let eIndex = 0;
    const textArr = formattedText.text.split(" ");
    return (
      <p>
        {textArr.map((txt, key) => {
          if (txt.includes("{}")) {
            const txtArr = txt.trim().split("{}");
            eIndex += 1;
            return (
              <>
                {txtArr[0] != "" ? (
                  <span style={styles}>{txtArr[0]}</span>
                ) : (
                  <span> </span>
                )}
                <span
                  style={{
                    ...styles,
                    color: formattedText.entities[eIndex - 1].color,
                  }}
                >
                  {formattedText.entities[eIndex - 1].text}
                </span>
                {txtArr[1] != "" ? <span style={styles}>{txtArr[1]}</span> : <span> </span>}
              </>
            );
          } else {
            return <span style={styles}>{txt + " "}</span>;
          }
        })}
      </p>
    );
  } else {
    return <p style={styles}>{normalText}</p>;
  }
};

export default GetText;
