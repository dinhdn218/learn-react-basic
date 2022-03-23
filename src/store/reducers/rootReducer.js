import { toast } from 'react-toastify';
import { REMOVE_COURSE } from '../action/courseAction';

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
  switch (action.type) {
    case REMOVE_COURSE:
      const newCourses = [...state.courses].filter(
        (course) => course.id !== action.payload
      );
      toast.success('Xóa thành công');
      return { ...state, courses: newCourses };
    default:
      return state;
  }
};

export default rootReducer;
