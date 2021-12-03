import styles from "../styles/Index.module.scss";
export default function Home() {
  const contents = [
    {
      title: "title",
      hashtags: ["tag1", "tag2", "tag3"],
      writer: "chaenii_i",
      thumbnail: {
        idx: 1,
        name: "fileName",
        uri: "",
      },
    },
    {
      title: "title",
      hashtags: ["tag1", "tag2", "tag3"],
      writer: "chaenii_i",
      thumbnail: {
        idx: 1,
        name: "fileName",
        uri: "",
      },
    },

    {
      title: "title",
      hashtags: ["tag1", "tag2", "tag3"],
      writer: "chaenii_i",
      thumbnail: {
        idx: 1,
        name: "fileName",
        uri: "",
      },
    },

    {
      title: "title",
      hashtags: ["tag1", "tag2", "tag3"],
      writer: "chaenii_i",
      thumbnail: {
        idx: 1,
        name: "fileName",
        uri: "",
      },
    },
    {
      title: "title",
      hashtags: ["tag1", "tag2", "tag3"],
      writer: "chaenii_i",
      thumbnail: {
        idx: 1,
        name: "fileName",
        uri: "",
      },
    },

    {
      title: "title",
      hashtags: ["tag1", "tag2", "tag3"],
      writer: "chaenii_i",
      thumbnail: {
        idx: 1,
        name: "fileName",
        uri: "",
      },
    },

    {
      title: "title",
      hashtags: ["tag1", "tag2", "tag3"],
      writer: "chaenii_i",
      thumbnail: {
        idx: 1,
        name: "fileName",
        uri: "",
      },
    },

    {
      title: "title",
      hashtags: ["tag1", "tag2", "tag3"],
      writer: "chaenii_i",
      thumbnail: {
        idx: 1,
        name: "fileName",
        uri: "",
      },
    },

    {
      title: "title",
      hashtags: ["tag1", "tag2", "tag3"],
      writer: "chaenii_i",
      thumbnail: {
        idx: 1,
        name: "fileName",
        uri: "",
      },
    },
  ];
  return (
    <div className={styles.wrapper}>
      <div className={styles.imageCarousel}>111</div>
      <div className={styles.contentWrapper}>
        {contents.map((content) => {
          return (
            <div className={styles.contentBox}>
              <div className={styles.thumbnailWrapper}>
                <image
                  className={styles.thumbnail}
                  src={content.thumbnail.uri}
                  alt={content.thumbnail.name}
                />
              </div>
              <div className={styles.conetentTextWrapper}>
                <div className={styles.contentTitle}>{content.title}</div>
                <div className={styles.hashtagWrapper}>
                  {content.hashtags.map((hashtag) => {
                    return (
                      <div className={styles.hashtag}>{"#" + hashtag}</div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
