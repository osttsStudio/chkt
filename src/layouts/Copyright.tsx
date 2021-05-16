import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import * as pkg from "../../package.json";

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
    </div>
  );
}

export default Copyright;
