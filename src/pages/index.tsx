import styles from './index.less';

const imgUrl = `$$root/xx.jpg`
console.log("🚀 ~ file: index.tsx ~ line 4 ~ imgUrl", imgUrl)
export default function IndexPage() {
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <p> `{window.config.RUNTIME}` </p>
    </div>
  );
}
