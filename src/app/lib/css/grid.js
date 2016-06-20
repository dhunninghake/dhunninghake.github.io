const gridWidth = (columns) => {
  return (columns/12 * 100) + '%';
};

export const col1  = { width: gridWidth(1) };
export const col2  = { width: gridWidth(2) };
export const col3  = { width: gridWidth(3) };
export const col4  = { width: gridWidth(4) };
export const col5  = { width: gridWidth(5) };
export const col6  = { width: gridWidth(6) };
export const col7  = { width: gridWidth(7) };
export const col8  = { width: gridWidth(8) };
export const col9  = { width: gridWidth(9) };
export const col10 = { width: gridWidth(10) };
export const col11 = { width: gridWidth(11) };
export const col12 = { width: gridWidth(12) };

export const fullWidth  = { width: '100%' };
export const fullHeight = { height: '100%' };