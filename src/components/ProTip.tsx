import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import EmojiObjectsOutlinedIcon from "@material-ui/icons/EmojiObjectsOutlined";
import { jumpToCaihua, CaihuaLink } from "../features/adsense";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(3, 0),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

/**
 * 直播间链接
 */
function caihuaLink() {
  return (
    <a
      className="ximalaya-text-link"
      href={CaihuaLink}
      target="_blank"
      onClick={() => {
        jumpToCaihua();
      }}
    >
      菜花
    </a>
  );
}

export default function ProTip() {
  const classes = useStyles();
  return (
    <Typography align="center" className={classes.root} color="textSecondary">
      <EmojiObjectsOutlinedIcon />
      Tip: {process.env.REACT_APP_DISABLE_ADSENSE ? null : <XimalayaLink />}
      为你的夏日带去清凉！
    </Typography>
  );
}
