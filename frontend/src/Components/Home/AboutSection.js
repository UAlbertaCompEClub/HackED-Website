import React from 'react'

import { Box } from 'grommet'
import Text from '../Text'

export default class AboutSection extends React.Component {

    render() {
        return (
            <Box
                style={styles.containerBox}
            >
                <Text type="h1" uppercase>{"Hacka-what?".toUpperCase()}</Text>
                <Text type="p">
                    {
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id mauris quam. Suspendisse at leo vel lacus efficitur pellentesque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi rhoncus, nulla id eleifend semper, nibh elit mollis nisl, quis commodo est mauris ac metus. Nunc massa justo, imperdiet blandit nisl quis, tincidunt finibus mi. Duis quis imperdiet neque. Suspendisse commodo orci volutpat dolor ullamcorper, non egestas massa efficitur. Pellentesque arcu leo, faucibus id lorem nec, aliquam eleifend justo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi nec tempus ante. Mauris eu ultrices ligula. Duis facilisis metus eget orci vulputate ornare."
                    }
                </Text>
                <Text>
                    {
                        "Curabitur dui nisl, volutpat in dictum ut, ultricies et lorem. Proin lacus sapien, euismod ac libero vitae, pharetra pharetra neque. Integer pharetra mauris id libero semper, ac lobortis ipsum porta. In semper et nulla non ultrices. Fusce tempus malesuada ultricies. Nam nec augue a magna consectetur tristique. In bibendum malesuada ipsum, non vestibulum quam. Mauris pulvinar vel quam lobortis tempus. Proin pulvinar leo sed eleifend sagittis. Integer finibus eros et elit feugiat vulputate. Nunc volutpat elit eu purus blandit venenatis. Vivamus ac blandit nulla."
                    }
                </Text>
            </Box>
        );
    }
}

let styles = {
    containerBox: {
        backgroundColor: "rgba(255,255,255,0.8)",
        borderRadius: "15px",
        padding: "4em 6em 4em 6em",
        width: "70%",
        marginTop: "4em",
        boxShadow: "0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)"
    },
    h1: {
        fontFamily: "Open Sans"
    },
    p: {
        fontFamily: "Open Sans"
    }
}