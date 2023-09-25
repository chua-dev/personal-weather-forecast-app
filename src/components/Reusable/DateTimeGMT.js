import { Typography } from "@mui/material";
import { getUTCDateTime } from "../../utils/DateTimeUtils";


const DateTimeGMT = () => {
  const fullDate = getUTCDateTime();
  const timeValue = (
    <Typography
        variant="h3"
        component="h3"
        sx={{ // sx = custom styling using css
            fontWeight: '400',
            fontSize: { xs: '10px', sm: '12px' },
            color: 'rgba(255, 255, 255, .7)',
            lineHeight: 1,
            paddingRight: '2px',
            fontFamily: 'Poppins',
        }}
    >
        {fullDate} GMT
    </Typography>
  );

  return timeValue;
};

export default DateTimeGMT;