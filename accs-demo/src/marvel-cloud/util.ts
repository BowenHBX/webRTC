import { ColorARGB, ColorHEX, PI } from "./@types";

/**
 * C的浮点角度转换成JS角度
 * @param value C的浮点角度
 */
export const floatToDegree = (value: number) => {
  const degree = (value / PI) * 180;
  return Math.ceil(degree);
};

/**
 * JS角度转换成C的浮点角度
 * @param value JS角度
 */
export const degreeToFloat = (value: number) => {
  const float = (value / 180) * PI;
  return Number(float.toFixed(4));
};

/**
 * 浮点数转换成像素
 * @param value 浮点数值
 * @param absolutePixel 绝对像素
 */
export const floatToPixel = (value: number, absolutePixel: number) => {
  return Math.ceil(value * absolutePixel);
};

/**
 * 像素转成C浮点数值
 * @param value 像素值
 * @param absolutePixel 绝对像素
 */
export const pixelToFloat = (value: number, absolutePixel: number) => {
  return Number((value / absolutePixel).toFixed(4));
};

/**
 * ARGB转换成HEX
 * @param value
 */
export const ARGBToHex = (value: ColorARGB): ColorHEX => {
  const hex = (value & 0x00ffffff).toString(16);
  return "#" + hex.padStart(6, "0"); // 补位到 6位
};

/**
 * 取ARGB透明度
 * @param value
 */
export const ARGBToAlpha = (value: ColorARGB): ColorHEX => {
  // >>> 0 为了把值转换成无符号整形
  return (
    parseInt((value >>> 0).toString(16).padStart(8, "0").slice(0, 2), 16) / 255
  ).toFixed(1);
};

/**
 * HEX转成ARGB
 * @param value
 */
export const HexToARGB = (value: ColorHEX | ColorARGB): ColorARGB => {
  if (value.toString().startsWith("#")) {
    value = value.toString().replace("#", "").toLowerCase();
    return parseInt("ff" + value, 16);
  }
  return value as ColorARGB
};
