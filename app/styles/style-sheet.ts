import { StyleSheet } from 'react-native';
import { hp, wp, wpFont } from '../services/response-screen-service';
import { Colors } from './colors';

const FontSizes = {
  fs_34: {
    fontSize: wpFont(34),
    lineHeight: wpFont(34) * 1.2,
  },
  fs_28: {
    fontSize: wpFont(28),
    lineHeight: wpFont(28) * 1.2,
  },
  fs_22: {
    fontSize: wpFont(22),
    lineHeight: wpFont(22) * 1.2,
  },
  fs_20: {
    fontSize: wpFont(20),
    lineHeight: wpFont(20) * 1.2,
  },
  fs_18: {
    fontSize: wpFont(18),
    lineHeight: wpFont(18) * 1.3,
  },
  fs_17: {
    // fontSize: wp(16.4),
    fontSize: wpFont(17),
    lineHeight: wpFont(17) * 1.3,
  },
  fs_16: {
    // fontSize: wp(15),
    fontSize: wpFont(16),
    lineHeight: wpFont(16) * 1.3,
  },
  fs_14: {
    fontSize: wpFont(14),
    lineHeight: wpFont(14) * 1.3,
  },
  fs_13: {
    fontSize: wpFont(13),
    lineHeight: wpFont(13) * 1.3,
  },
  fs_12: {
    fontSize: wpFont(12),
    lineHeight: wpFont(12) * 1.3,
  },
  fs_11: {
    fontSize: wpFont(11),
    lineHeight: wpFont(11) * 1.3,
  },
};

const wpUnits = {
  x2_small: wp(1),
  x_small: wp(4),
  small: wp(8),
  p12: wp(12),
  medium: wp(16),
  large: wp(24),
  x_large: wp(32),
  x2_large: wp(40),
  x3_large: wp(48),
  x4_large: wp(56),
  x5_large: wp(64),
};

const hpUnits = {
  x2_small: hp(1),
  x_small: hp(4),
  small: hp(8),
  p12: hp(12),
  medium: hp(16),
  large: hp(24),
  x_large: hp(32),
  x2_large: wp(40),
  x3_large: wp(48),
  x4_large: wp(56),
  x5_large: hp(64),
  x6_large: hp(72),
  x7_large: hp(80),
  x8_large: hp(88),
};

const Margins = StyleSheet.create({
  // all
  m_none: { marginHorizontal: 0, paddingVertical: 0 },
  m_x2_small: {
    marginHorizontal: wpUnits.x2_small,
    paddingVertical: hpUnits.x2_small,
  },
  m_x_small: {
    marginHorizontal: wpUnits.x_small,
    paddingVertical: hpUnits.x_small,
  },
  m_small: { marginHorizontal: wpUnits.small, paddingVertical: hpUnits.small },
  m_12: { marginHorizontal: wpUnits.p12, paddingVertical: hpUnits.p12 },
  m_medium: {
    marginHorizontal: wpUnits.medium,
    paddingVertical: hpUnits.medium,
  },
  m_large: { marginHorizontal: wpUnits.large, paddingVertical: hpUnits.large },
  m_x_large: {
    marginHorizontal: wpUnits.x_large,
    paddingVertical: hpUnits.x_large,
  },
  m_x2_large: {
    marginHorizontal: wpUnits.x2_large,
    paddingVertical: hpUnits.x2_large,
  },
  m_x3_large: {
    marginHorizontal: wpUnits.x3_large,
    paddingVertical: hpUnits.x3_large,
  },
  m_x4_large: {
    marginHorizontal: wpUnits.x4_large,
    paddingVertical: hpUnits.x4_large,
  },

  // padding for layout
  mh_default: { marginHorizontal: wpUnits.medium },
  mh_tighter: { marginHorizontal: wpUnits.x_large },

  mh_none: { marginHorizontal: 0 },
  mh_x2_small: { marginHorizontal: wpUnits.x2_small },
  mh_x_small: { marginHorizontal: wpUnits.x_small },
  mh_small: { marginHorizontal: wpUnits.small },
  mh_12: { marginHorizontal: wpUnits.p12 },
  mh_medium: { marginHorizontal: wpUnits.medium },
  mh_large: { marginHorizontal: wpUnits.large },
  mh_x_large: { marginHorizontal: wpUnits.x_large },
  mh_x2_large: { marginHorizontal: wpUnits.x2_large },
  mh_x3_large: { marginHorizontal: wpUnits.x3_large },
  mh_x4_large: { marginHorizontal: wpUnits.x4_large },

  mv_none: { marginVertical: 0 },
  mv_x2_small: { marginVertical: hpUnits.x2_small },
  mv_x_small: { marginVertical: hpUnits.x_small },
  mv_small: { marginVertical: hpUnits.small },
  mv_12: { marginVertical: hpUnits.p12 },
  mv_medium: { marginVertical: hpUnits.medium },
  mv_large: { marginVertical: hpUnits.large },
  mv_x_large: { marginVertical: hpUnits.x_large },
  mv_x2_large: { marginVertical: hpUnits.x2_large },
  mv_x3_large: { marginVertical: hpUnits.x3_large },
  mv_x4_large: { marginVertical: hpUnits.x4_large },
  mv_x5_large: { marginVertical: hpUnits.x5_large },
  mv_x6_large: { marginVertical: hpUnits.x6_large },
  mv_x7_large: { marginVertical: hpUnits.x7_large },
  mv_x8_large: { marginVertical: hpUnits.x8_large },

  ml_none: { marginLeft: 0 },
  ml_x2_small: { marginLeft: wpUnits.x2_small },
  ml_x_small: { marginLeft: wpUnits.x_small },
  ml_small: { marginLeft: wpUnits.small },
  ml_12: { marginLeft: wpUnits.p12 },
  ml_medium: { marginLeft: wpUnits.medium },
  ml_large: { marginLeft: wpUnits.large },
  ml_x_large: { marginLeft: wpUnits.x_large },
  ml_x2_large: { marginLeft: wpUnits.x2_large },
  ml_x3_large: { marginLeft: wpUnits.x3_large },
  ml_x4_large: { marginLeft: wpUnits.x4_large },
  ml_x5_large: { marginLeft: wpUnits.x5_large },

  mr_none: { marginRight: 0 },
  mr_x2_small: { marginRight: wpUnits.x2_small },
  mr_x_small: { marginRight: wpUnits.x_small },
  mr_small: { marginRight: wpUnits.small },
  mr_12: { marginRight: wpUnits.p12 },
  mr_medium: { marginRight: wpUnits.medium },
  mr_large: { marginRight: wpUnits.large },
  mr_x_large: { marginRight: wpUnits.x_large },
  mr_x2_large: { marginRight: wpUnits.x2_large },
  mr_x3_large: { marginRight: wpUnits.x3_large },
  mr_x4_large: { marginRight: wpUnits.x4_large },
  mr_x5_large: { marginRight: wpUnits.x5_large },

  mt_none: { marginTop: 0 },
  mt_x2_small: { marginTop: hpUnits.x2_small },
  mt_x_small: { marginTop: hpUnits.x_small },
  mt_small: { marginTop: hpUnits.small },
  mt_12: { marginTop: hpUnits.p12 },
  mt_medium: { marginTop: hpUnits.medium },
  mt_large: { marginTop: hpUnits.large },
  mt_x_large: { marginTop: hpUnits.x_large },
  mt_x2_large: { marginTop: hpUnits.x2_large },
  mt_x3_large: { marginTop: hpUnits.x3_large },
  mt_x4_large: { marginTop: hpUnits.x4_large },
  mt_x5_large: { marginTop: hpUnits.x5_large },
  mt_x6_large: { marginTop: hpUnits.x6_large },
  mt_x7_large: { marginTop: hpUnits.x7_large },
  mt_x8_large: { marginTop: hpUnits.x8_large },

  mb_none: { marginBottom: 0 },
  mb_x2_small: { marginBottom: hpUnits.x2_small },
  mb_x_small: { marginBottom: hpUnits.x_small },
  mb_small: { marginBottom: hpUnits.small },
  mb_12: { marginBottom: hpUnits.p12 },
  mb_medium: { marginBottom: hpUnits.medium },
  mb_large: { marginBottom: hpUnits.large },
  mb_x_large: { marginBottom: hpUnits.x_large },
  mb_x2_large: { marginBottom: hpUnits.x2_large },
  mb_x3_large: { marginBottom: hpUnits.x3_large },
  mb_x4_large: { marginBottom: hpUnits.x4_large },
  mb_x5_large: { marginBottom: hpUnits.x5_large },
  mb_x6_large: { marginBottom: hpUnits.x6_large },
  mb_x7_large: { marginBottom: hpUnits.x7_large },
  mb_x8_large: { marginBottom: hpUnits.x8_large },
});

const Paddings = StyleSheet.create({
  // all
  p_none: { paddingHorizontal: 0, paddingVertical: 0 },
  p_x2_small: {
    paddingHorizontal: wpUnits.x2_small,
    paddingVertical: hpUnits.x2_small,
  },
  p_x_small: {
    paddingHorizontal: wpUnits.x_small,
    paddingVertical: hpUnits.x_small,
  },
  p_small: { paddingHorizontal: wpUnits.small, paddingVertical: hpUnits.small },
  p_12: { paddingHorizontal: wpUnits.p12, paddingVertical: hpUnits.p12 },
  p_medium: {
    paddingHorizontal: wpUnits.medium,
    paddingVertical: hpUnits.medium,
  },
  p_large: { paddingHorizontal: wpUnits.large, paddingVertical: hpUnits.large },
  p_x_large: {
    paddingHorizontal: wpUnits.x_large,
    paddingVertical: hpUnits.x_large,
  },
  p_x2_large: {
    paddingHorizontal: wpUnits.x2_large,
    paddingVertical: hpUnits.x2_large,
  },
  p_x3_large: {
    paddingHorizontal: wpUnits.x3_large,
    paddingVertical: hpUnits.x3_large,
  },
  p_x4_large: {
    paddingHorizontal: wpUnits.x4_large,
    paddingVertical: hpUnits.x4_large,
  },

  // padding for layout
  ph_default: { paddingHorizontal: wpUnits.medium },
  ph_tighter: { paddingHorizontal: wpUnits.x_large },

  ph_none: { paddingHorizontal: 0 },
  ph_x2_small: { paddingHorizontal: wpUnits.x2_small },
  ph_x_small: { paddingHorizontal: wpUnits.x_small },
  ph_small: { paddingHorizontal: wpUnits.small },
  ph_12: { paddingHorizontal: wpUnits.p12 },
  ph_medium: { paddingHorizontal: wpUnits.medium },
  ph_large: { paddingHorizontal: wpUnits.large },
  ph_x_large: { paddingHorizontal: wpUnits.x_large },
  ph_x2_large: { paddingHorizontal: wpUnits.x2_large },
  ph_x3_large: { paddingHorizontal: wpUnits.x3_large },
  ph_x4_large: { paddingHorizontal: wpUnits.x4_large },
  ph_x5_large: { paddingHorizontal: wpUnits.x5_large },

  pv_none: { paddingVertical: 0 },
  pv_x2_small: { paddingVertical: hpUnits.x2_small },
  pv_x_small: { paddingVertical: hpUnits.x_small },
  pv_small: { paddingVertical: hpUnits.small },
  pv_12: { paddingVertical: hpUnits.p12 },
  pv_medium: { paddingVertical: hpUnits.medium },
  pv_large: { paddingVertical: hpUnits.large },
  pv_x_large: { paddingVertical: hpUnits.x_large },
  pv_x2_large: { paddingVertical: hpUnits.x2_large },
  pv_x3_large: { paddingVertical: hpUnits.x3_large },
  pv_x4_large: { paddingVertical: hpUnits.x4_large },
  pv_x5_large: { paddingVertical: hpUnits.x5_large },
  pv_x6_large: { paddingVertical: hpUnits.x6_large },
  pv_x7_large: { paddingVertical: hpUnits.x7_large },
  pv_x8_large: { paddingVertical: hpUnits.x8_large },

  pl_none: { paddingLeft: 0 },
  pl_x2_small: { paddingLeft: wpUnits.x2_small },
  pl_x_small: { paddingLeft: wpUnits.x_small },
  pl_small: { paddingLeft: wpUnits.small },
  pl_12: { paddingLeft: wpUnits.p12 },
  pl_medium: { paddingLeft: wpUnits.medium },
  pl_large: { paddingLeft: wpUnits.large },
  pl_x_large: { paddingLeft: wpUnits.x_large },
  pl_x2_large: { paddingLeft: wpUnits.x2_large },
  pl_x3_large: { paddingLeft: wpUnits.x3_large },
  pl_x4_large: { paddingLeft: wpUnits.x4_large },
  pl_x5_large: { paddingLeft: wpUnits.x5_large },

  pr_none: { paddingRight: 0 },
  pr_x2_small: { paddingRight: wpUnits.x2_small },
  pr_x_small: { paddingRight: wpUnits.x_small },
  pr_small: { paddingRight: wpUnits.small },
  pr_12: { paddingRight: wpUnits.p12 },
  pr_medium: { paddingRight: wpUnits.medium },
  pr_large: { paddingRight: wpUnits.large },
  pr_x_large: { paddingRight: wpUnits.x_large },
  pr_x2_large: { paddingRight: wpUnits.x2_large },
  pr_x3_large: { paddingRight: wpUnits.x3_large },
  pr_x4_large: { paddingRight: wpUnits.x4_large },
  pr_x5_large: { paddingRight: wpUnits.x5_large },

  pt_none: { paddingTop: 0 },
  pt_x2_small: { paddingTop: hpUnits.x2_small },
  pt_x_small: { paddingTop: hpUnits.x_small },
  pt_small: { paddingTop: hpUnits.small },
  pt_12: { paddingTop: hpUnits.p12 },
  pt_medium: { paddingTop: hpUnits.medium },
  pt_large: { paddingTop: hpUnits.large },
  pt_x_large: { paddingTop: hpUnits.x_large },
  pt_x2_large: { paddingTop: hpUnits.x2_large },
  pt_x3_large: { paddingTop: hpUnits.x3_large },
  pt_x4_large: { paddingTop: hpUnits.x4_large },
  pt_x5_large: { paddingTop: hpUnits.x5_large },
  pt_x6_large: { paddingTop: hpUnits.x6_large },
  pt_x7_large: { paddingTop: hpUnits.x7_large },
  pt_x8_large: { paddingTop: hpUnits.x8_large },

  pb_none: { paddingBottom: 0 },
  pb_x2_small: { paddingBottom: hpUnits.x2_small },
  pb_x_small: { paddingBottom: hpUnits.x_small },
  pb_small: { paddingBottom: hpUnits.small },
  pb_12: { paddingBottom: hpUnits.p12 },
  pb_medium: { paddingBottom: hpUnits.medium },
  pb_large: { paddingBottom: hpUnits.large },
  pb_x_large: { paddingBottom: hpUnits.x_large },
  pb_x2_large: { paddingBottom: hpUnits.x2_large },
  pb_x3_large: { paddingBottom: hpUnits.x3_large },
  pb_x4_large: { paddingBottom: hpUnits.x4_large },
  pb_x5_large: { paddingBottom: hpUnits.x5_large },
  pb_x6_large: { paddingBottom: hpUnits.x6_large },
  pb_x7_large: { paddingBottom: hpUnits.x7_large },
  pb_x8_large: { paddingBottom: hpUnits.x8_large },
});

const Backgrounds = StyleSheet.create({
  bg_white: { backgroundColor: Colors.White },
  bg_black: { backgroundColor: Colors.Black },
  bg_transparent: { backgroundColor: 'transparent' },
});

const Radius = StyleSheet.create({
  rounded: { borderRadius: 8 },
  rounded_small: { borderRadius: 4 },
  rounded_full: { borderRadius: 9999 },
});

const Positions = StyleSheet.create({
  absolute: { position: 'absolute' },
  relative: { position: 'relative' },
});

const Flexes = StyleSheet.create({
  flex_1: { flex: 1 },
  flex_2: { flex: 2 },
  flex_3: { flex: 3 },
  flex_4: { flex: 4 },

  flex: { display: 'flex' },

  flex_wrap: { flexWrap: 'wrap' },

  flex_row: { flexDirection: 'row', display: 'flex' },
  flex_row_rev: { flexDirection: 'row-reverse' },
  flex_col: { flexDirection: 'column', display: 'flex' },
  flex_col_rev: { flexDirection: 'column-reverse' },

  jus_end: { justifyContent: 'flex-end' },
  jus_start: { justifyContent: 'flex-start' },
  jus_center: { justifyContent: 'center' },
  jus_between: { justifyContent: 'space-between' },
  jus_around: { justifyContent: 'space-around' },
  jus_evenly: { justifyContent: 'space-evenly' },

  alg_end: { alignItems: 'flex-end' },
  alg_start: { alignItems: 'flex-start' },
  alg_center: { alignItems: 'center' },
  alg_stretch: { alignItems: 'stretch' },
  alg_base: { alignItems: 'baseline' },

  align_self_start: { alignSelf: 'flex-start' },
  align_self_end: { alignSelf: 'flex-end' },
  align_self_center: { alignSelf: 'center' },

  centered: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const FullSize = {
  full_width: {
    width: '100%',
  },
  full_height: {
    height: '100%',
  },
  full: {
    width: '100%',
    height: '100%',
  },
};

const Shadow = {
  shadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  shadowCard: {
    shadowColor: Colors.Grey400,
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
};

const Borders = StyleSheet.create({
  // All borders
  b_none: { borderWidth: 0 },
  b_small: { borderWidth: 1 },
  b_medium: { borderWidth: 2 },
  b_large: { borderWidth: 4 },
  b_x_large: { borderWidth: 6 },
  b_x2_large: { borderWidth: 8 },
  b_x3_large: { borderWidth: 10 },

  bh_none: { borderLeftWidth: 0, borderRightWidth: 0 },
  bh_small: { borderLeftWidth: 1, borderRightWidth: 1 },
  bh_medium: { borderLeftWidth: 2, borderRightWidth: 2 },
  bh_large: { borderLeftWidth: 4, borderRightWidth: 4 },
  bh_x_large: { borderLeftWidth: 6, borderRightWidth: 6 },
  bh_x2_large: { borderLeftWidth: 8, borderRightWidth: 8 },
  bh_x3_large: { borderLeftWidth: 10, borderRightWidth: 10 },

  bv_none: { borderTopWidth: 0, borderBottomWidth: 0 },
  bv_small: { borderTopWidth: 1, borderBottomWidth: 1 },
  bv_medium: { borderTopWidth: 2, borderBottomWidth: 2 },
  bv_large: { borderTopWidth: 4, borderBottomWidth: 4 },
  bv_x_large: { borderTopWidth: 6, borderBottomWidth: 6 },
  bv_x2_large: { borderTopWidth: 8, borderBottomWidth: 8 },
  bv_x3_large: { borderTopWidth: 10, borderBottomWidth: 10 },

  bt_none: { borderTopWidth: 0 },
  bt_hairline: { borderTopWidth: 0.5 },
  bt_small: { borderTopWidth: 1 },
  bt_medium: { borderTopWidth: 2 },
  bt_large: { borderTopWidth: 4 },
  bt_x_large: { borderTopWidth: 6 },
  bt_x2_large: { borderTopWidth: 8 },
  bt_x3_large: { borderTopWidth: 10 },

  bb_none: { borderBottomWidth: 0 },
  bb_small: { borderBottomWidth: 1 },
  bb_medium: { borderBottomWidth: 2 },
  bb_large: { borderBottomWidth: 4 },
  bb_x_large: { borderBottomWidth: 6 },
  bb_x2_large: { borderBottomWidth: 8 },
  bb_x3_large: { borderBottomWidth: 10 },

  bl_none: { borderLeftWidth: 0 },
  bl_small: { borderLeftWidth: 1 },
  bl_medium: { borderLeftWidth: 2 },
  bl_large: { borderLeftWidth: 4 },
  bl_x_large: { borderLeftWidth: 6 },
  bl_x2_large: { borderLeftWidth: 8 },
  bl_x3_large: { borderLeftWidth: 10 },

  br_none: { borderRightWidth: 0 },
  br_small: { borderRightWidth: 1 },
  br_medium: { borderRightWidth: 2 },
  br_large: { borderRightWidth: 4 },
  br_x_large: { borderRightWidth: 6 },
  br_x2_large: { borderRightWidth: 8 },
  br_x3_large: { borderRightWidth: 10 },
});

const styles = StyleSheet.create({
  ...Radius,
  ...Backgrounds,
  ...Flexes,
  ...Positions,
  ...Margins,
  ...Paddings,
  ...FontSizes,
  ...FullSize,
  ...Borders,
  ...Shadow,
});

export default styles;
