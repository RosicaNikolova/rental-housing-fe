import React from 'react'
import { Box, Stack} from "@mui/material";
import TableCharacteritics from './TableCharacteristics';

function PropertyInfo(props) {
  return (
    <Box bgcolor="red" flex = {2}>
        <Stack spacing={4}>
              <Box bgcolor="blue">
                <h4>
                  About this property
                </h4>
                <p>
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.
                </p>
              </Box>
              <Box bgcolor="green">   
              <h4>
                  Characterisitics
                </h4>
                <TableCharacteritics/>

              </Box>
               <Box bgcolor="pink">
                <h4>
                  Status
                </h4>
                <TableCharacteritics/>
              </Box>
        </Stack>
    </Box>
  )
}

export default PropertyInfo;