export const REMOVE_COURSE = 'remove_course';

export const removeCourse = (courseId) => ({
  type: REMOVE_COURSE,
  payload: courseId,
});
