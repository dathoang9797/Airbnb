import Swal from 'sweetalert2';

const primaryColor = '#ff385c';
const deleteColor = '#d33';

const sweetAlertDelete = (title = '', icon = '') => {
  return Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: primaryColor,
    cancelButtonColor: deleteColor,
    confirmButtonText: 'Yes, delete it!'
  });
};

const sweetAlertSuccess = () => {
  return Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
};

export const sweetAlert = {
  sweetAlertDelete,
  sweetAlertSuccess,
};
