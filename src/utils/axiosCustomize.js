import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:8081/',
});
/* => interceptors là các hàm mà bạn có thể đăng ký để can thiệp vào quá trình gửi yêu cầu hoặc 
nhận phản hồi trả về từ server -> 'trước khi chúng được xử lý bởi Axios' */

/* => Bằng cách sử dụng interceptors, bạn có thể thực hiện các nhiệm vụ như thêm/loại bỏ tiêu đề, 
thực hiện xác thực, xử lý lỗi, hoặc thực hiện bất kỳ hành động nào trước khi yêu cầu được gửi hoặc phản hồi được xử lý. */

// => giản lược hóa xử lý data ở client

// Đăng ký một request interceptor
instance.interceptors.request.use(
    function (config) {
        // Thực hiện các thay đổi hoặc kiểm tra trước khi yêu cầu được gửi
        return config;
    },
    function (error) {
        // Xử lý lỗi nếu có
        return Promise.reject(error);
    });

// Đăng ký một response interceptor
instance.interceptors.response.use(
    function (response) {
        // Any status of 2xx active
        // Thực hiện các thay đổi hoặc kiểm tra trên phản hồi trả về từ server
        return response && response.data ? response.data : response; // return thẳng về title data khi component gọi API
    },
    function (error) {
        // Any status codes outside of 2xx active
        // Xử lý lỗi nếu có
        return error && error.response && error.response.data ? error.response.data : Promise.reject(error);
    });
export default instance;