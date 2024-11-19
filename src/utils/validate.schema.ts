import * as Yup from "yup";

export const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Định dạng email không hợp lệ")
    .required("Vui lòng nhập địa chỉ email của bạn"),
  password: Yup.string()
    .min(6, "Password cần tối thiểu 6 ký tự")
    .max(20, "Password tối da 20 ký tự")
    .required("Password không được để trống"),
});

export const SignUpSchema = Yup.object().shape({
  name: Yup.string().required("Họ tên không được để trống"),
  email: Yup.string()
    .email("Định dạng email không hợp lệ")
    .required("Vui lòng nhập địa chỉ email của bạn"),
  password: Yup.string()
    .min(6, "Password cần tối thiểu 6 ký tự")
    .max(20, "Password tối da 20 ký tự")
    .required("Password không được để trống"),
});
