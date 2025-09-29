import styled from "styled-components";

interface FlexProps {
    $flexDirection?: string;
    $flexWrap?: string;
    $flexGrow?: number;
    $flexShrink?: number;
    $flexBasis?: string | number;
    $justifyContent?: string;
    $alignItems?: string;
    $alignSelf?: string;
    $gap?: string | number;
    $rowGap?: string | number;
    $columnGap?: string | number;
    $width?: string | number;
    $height?: string | number;
    $minWidth?: string | number;
    $minHeight?: string | number;
    $maxWidth?: string | number;
    $maxHeight?: string | number;
    $padding?: string | number;
    $paddingTop?: string | number;
    $paddingRight?: string | number;
    $paddingBottom?: string | number;
    $paddingLeft?: string | number;
    $margin?: string | number;
    $marginTop?: string | number;
    $marginRight?: string | number;
    $marginBottom?: string | number;
    $marginLeft?: string | number;
    $position?: string;
    $top?: string | number;
    $right?: string | number;
    $bottom?: string | number;
    $left?: string | number;
    $backgroundColor?: string;
    $overflow?:string,
    $overflowX?:string,
    $overflowY?:string,
    $border?:string,
    $borderRadius?:string,
}

export const FlexContainer = styled.div<FlexProps>(
    ({
         $flexDirection = "row",
         $flexWrap = "nowrap",
         $flexGrow,
         $flexShrink,
         $flexBasis,
         $justifyContent = "flex-start",
         $alignItems = "stretch",
         $alignSelf = "auto",
         $gap,
         $rowGap,
         $columnGap,
         $width,
         $height,
         $minWidth,
         $minHeight,
         $maxWidth,
         $maxHeight,
         $padding,
         $paddingTop,
         $paddingRight,
         $paddingBottom,
         $paddingLeft,
         $margin,
         $marginTop,
         $marginRight,
         $marginBottom,
         $marginLeft,
         $position,
         $top,
         $right,
         $bottom,
         $left,
         $backgroundColor,
         $overflow,
         $overflowX,
         $overflowY,
         $border,
         $borderRadius,
     }) => ({
        display: "flex",
        flexDirection: $flexDirection,
        flexWrap: $flexWrap,
        ...( $flexGrow !== undefined && { flexGrow: $flexGrow }),
        ...( $flexShrink !== undefined && { flexShrink: $flexShrink }),
        ...( $flexBasis !== undefined && { flexBasis: $flexBasis }),
        justifyContent: $justifyContent,
        alignItems: $alignItems,
        alignSelf: $alignSelf,
        ...( $gap && { gap: $gap }),
        ...( $rowGap && { rowGap: $rowGap }),
        ...( $columnGap && { columnGap: $columnGap }),
        ...( $width && { width: $width }),
        ...( $height && { height: $height }),
        ...( $minWidth && { minWidth: $minWidth }),
        ...( $minHeight && { minHeight: $minHeight }),
        ...( $maxWidth && { maxWidth: $maxWidth }),
        ...( $maxHeight && { maxHeight: $maxHeight }),
        ...( $padding && { padding: $padding }),
        ...( $paddingTop && { paddingTop: $paddingTop }),
        ...( $paddingRight && { paddingRight: $paddingRight }),
        ...( $paddingBottom && { paddingBottom: $paddingBottom }),
        ...( $paddingLeft && { paddingLeft: $paddingLeft }),
        ...( $margin && { margin: $margin }),
        ...( $marginTop && { marginTop: $marginTop }),
        ...( $marginRight && { marginRight: $marginRight }),
        ...( $marginBottom && { marginBottom: $marginBottom }),
        ...( $marginLeft && { marginLeft: $marginLeft }),
        ...( $position && { position: $position }),
        ...( $top !== undefined && { top: $top }),
        ...( $right !== undefined && { right: $right }),
        ...( $bottom !== undefined && { bottom: $bottom }),
        ...( $left !== undefined && { left: $left }),
        ...( $backgroundColor && { backgroundColor: $backgroundColor }),
        ...( $overflow && { overflow: $overflow }),
        ...( $overflowX && { overflowX: $overflowX }),
        ...( $overflowY && { overflowY: $overflowY }),
        ...( $border && { border: $border }),
        ...( $borderRadius && { borderRadius: $borderRadius }),
    })
);


interface ContainerProps {
    $display?: string;

    // Flex
    $flexDirection?: string;
    $flexWrap?: string;
    $flexGrow?: number;
    $flexShrink?: number;
    $flexBasis?: string | number;
    $justifyContent?: string;
    $alignItems?: string;
    $alignSelf?: string;
    $gap?: string | number;
    $rowGap?: string | number;
    $columnGap?: string | number;

    // Grid
    $order?: number;
    $gridTemplateColumns?: string;
    $gridTemplateRows?: string;
    $gridColumn?: string;
    $gridRow?: string;
    $gridArea?: string;
    $placeItems?: string;
    $placeContent?: string;

    // Size
    $width?: string | number;
    $height?: string | number;
    $minWidth?: string | number;
    $minHeight?: string | number;
    $maxWidth?: string | number;
    $maxHeight?: string | number;

    // Spacing
    $padding?: string | number;
    $paddingTop?: string | number;
    $paddingRight?: string | number;
    $paddingBottom?: string | number;
    $paddingLeft?: string | number;
    $margin?: string | number;
    $marginTop?: string | number;
    $marginRight?: string | number;
    $marginBottom?: string | number;
    $marginLeft?: string | number;

    // Position
    $position?: string;
    $top?: string | number;
    $right?: string | number;
    $bottom?: string | number;
    $left?: string | number;
    $zIndex?: number;

    // Borders & background
    $border?: string;
    $borderTop?: string;
    $borderRight?: string;
    $borderBottom?: string;
    $borderLeft?: string;
    $borderRadius?: string | number;
    $background?: string;
    $backgroundColor?: string;
    $color?: string;
    $boxShadow?: string;

    // Overflow & misc
    $overflow?: string;
    $overflowX?: string;
    $overflowY?: string;
    $whiteSpace?: string;

    $boxSizing?:string
}

export const Container = styled.div<ContainerProps>(
    ({
         $display = "block",
         $flexDirection,
         $flexWrap,
         $flexGrow,
         $flexShrink,
         $flexBasis,
         $justifyContent,
         $alignItems,
         $alignSelf,
         $gap,
         $rowGap,
         $columnGap,
         $order,
         $gridTemplateColumns,
         $gridTemplateRows,
         $gridColumn,
         $gridRow,
         $gridArea,
         $placeItems,
         $placeContent,
         $width,
         $height,
         $minWidth,
         $minHeight,
         $maxWidth,
         $maxHeight,
         $padding,
         $paddingTop,
         $paddingRight,
         $paddingBottom,
         $paddingLeft,
         $margin,
         $marginTop,
         $marginRight,
         $marginBottom,
         $marginLeft,
         $position,
         $top,
         $right,
         $bottom,
         $left,
         $zIndex,
         $border,
         $borderTop,
         $borderRight,
         $borderBottom,
         $borderLeft,
         $borderRadius,
         $background,
         $backgroundColor,
         $color,
         $boxShadow,
         $overflow,
         $overflowX,
         $overflowY,
         $whiteSpace,
         $boxSizing
     }) => ({
        display: $display,
        ...( $flexDirection && { flexDirection: $flexDirection }),
        ...( $flexWrap && { flexWrap: $flexWrap }),
        ...( $flexGrow !== undefined && { flexGrow: $flexGrow }),
        ...( $flexShrink !== undefined && { flexShrink: $flexShrink }),
        ...( $flexBasis && { flexBasis: $flexBasis }),
        ...( $justifyContent && { justifyContent: $justifyContent }),
        ...( $alignItems && { alignItems: $alignItems }),
        ...( $alignSelf && { alignSelf: $alignSelf }),
        ...( $gap && { gap: $gap }),
        ...( $rowGap && { rowGap: $rowGap }),
        ...( $columnGap && { columnGap: $columnGap }),
        ...( $order !== undefined && { order: $order }),
        ...( $gridTemplateColumns && { gridTemplateColumns: $gridTemplateColumns }),
        ...( $gridTemplateRows && { gridTemplateRows: $gridTemplateRows }),
        ...( $gridColumn && { gridColumn: $gridColumn }),
        ...( $gridRow && { gridRow: $gridRow }),
        ...( $gridArea && { gridArea: $gridArea }),
        ...( $placeItems && { placeItems: $placeItems }),
        ...( $placeContent && { placeContent: $placeContent }),
        ...( $width && { width: $width }),
        ...( $height && { height: $height }),
        ...( $minWidth && { minWidth: $minWidth }),
        ...( $minHeight && { minHeight: $minHeight }),
        ...( $maxWidth && { maxWidth: $maxWidth }),
        ...( $maxHeight && { maxHeight: $maxHeight }),
        ...( $padding && { padding: $padding }),
        ...( $paddingTop && { paddingTop: $paddingTop }),
        ...( $paddingRight && { paddingRight: $paddingRight }),
        ...( $paddingBottom && { paddingBottom: $paddingBottom }),
        ...( $paddingLeft && { paddingLeft: $paddingLeft }),
        ...( $margin && { margin: $margin }),
        ...( $marginTop && { marginTop: $marginTop }),
        ...( $marginRight && { marginRight: $marginRight }),
        ...( $marginBottom && { marginBottom: $marginBottom }),
        ...( $marginLeft && { marginLeft: $marginLeft }),
        ...( $position && { position: $position }),
        ...( $top !== undefined && { top: $top }),
        ...( $right !== undefined && { right: $right }),
        ...( $bottom !== undefined && { bottom: $bottom }),
        ...( $left !== undefined && { left: $left }),
        ...( $zIndex !== undefined && { zIndex: $zIndex }),
        ...( $border && { border: $border }),
        ...( $borderTop && { borderTop: $borderTop }),
        ...( $borderRight && { borderRight: $borderRight }),
        ...( $borderBottom && { borderBottom: $borderBottom }),
        ...( $borderLeft && { borderLeft: $borderLeft }),
        ...( $borderRadius && { borderRadius: $borderRadius }),
        ...( $background && { background: $background }),
        ...( $backgroundColor && { backgroundColor: $backgroundColor }),
        ...( $color && { color: $color }),
        ...( $boxShadow && { boxShadow: $boxShadow }),
        ...( $overflow && { overflow: $overflow }),
        ...( $overflowX && { overflowX: $overflowX }),
        ...( $overflowY && { overflowY: $overflowY }),
        ...( $whiteSpace && { whiteSpace: $whiteSpace }),
        ...( $boxSizing && { boxSizing: $boxSizing }),
    })
);
