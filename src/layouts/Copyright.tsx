import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import * as pkg from "../../package.json";

import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";

import Icon from "@mdi/react";
import { mdiGithub } from "@mdi/js";
// import { mdiTelegram } from "@mdi/js";
// import { mdiSinaWeibo } from "@mdi/js";
import { mdiTwitter } from "@mdi/js";
// import { mdiWechat } from "@mdi/js";
// import { mdiEarth } from "@mdi/js";
// import { mdiCloud } from "@mdi/js";

const socialList = [
  {
    type: "github",
    color: "black",
    icon: mdiGithub,
    label: `GitHub: SHDocter`,
    href: `https://github.com/SHDocter/chkt`,
  },
  {
    type: "twitter",
    color: "#1da1f2",
    icon: mdiTwitter,
    label: "Twitter: SHDocter",
    href: "https://twitter.com/SHDocter",
  },
];

function Copyright() {
  return (
    <div>
      <Box>
        <Typography variant="body2" color="textSecondary" align="center">
          {"© "}
          <Link color="inherit" href={pkg.repository.url} target="_blank">
            原项目：Yun Air Conditioner
          </Link>
          {" - "}
          <Link color="inherit" href={pkg.author.url} target="_blank">
            {pkg.author.name}
          </Link>
        </Typography>
      </Box>
      <Box>
        <Typography variant="body2" color="textSecondary" align="center">
          {"© "}
          <Link color="inherit" href={"https://github.com/SHDocter/chkt"} target="_blank">
            chkt
          </Link>
          {" - "}
          <Link color="inherit" href={"https://space.bilibili.com/8907402"} target="_blank">
            {"狐日泽"}
          </Link>
        </Typography>
      </Box>
      <Typography variant="body2" color="textSecondary" align="center">
        {" 2021 - " + new Date().getFullYear()}
      </Typography>
      <Box style={{ textAlign: "center" }}>
        {socialList.map((item) => (
          <Tooltip title={item.label} arrow>
            <IconButton
              sx={{ color: item.color }}
              href={item.href}
              target="_blank"
            >
              <Icon path={item.icon} size={1} />
            </IconButton>
          </Tooltip>
        ))}
      </Box>
    </div>
  );
}

export default Copyright;
