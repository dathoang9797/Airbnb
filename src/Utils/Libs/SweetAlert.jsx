import Swal from 'sweetalert2';

const sweetAlertDelete = (title = '', icon = '') => {
  return Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!',
  });
};

const sweetAlertSuccess = () => {
  return Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
};

export const sweetAlert = {
  sweetAlertDelete,
  sweetAlertSuccess,
};
