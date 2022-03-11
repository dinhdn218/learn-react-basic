const initState = {
  courses: [
    { id: 1, name: 'Kiến Thức Nhập Môn IT' },
    { id: 2, name: 'HTML, CSS từ Zero đến Hero' },
    { id: 3, name: 'Responsive Với Grid System' },
    { id: 4, name: 'Lập Trình JavaScript Cơ Bản' },
    { id: 5, name: 'Lập Trình JavaScript Nâng Cao' },
    { id: 6, name: 'Xây Dựng Website với ReactJS' },
  ],
};

const rootReducer = (state = initState, action) => {
  return state;
};

export default rootReducer;
