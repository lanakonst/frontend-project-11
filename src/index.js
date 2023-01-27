// import * as bootstrap from 'bootstrap';
import './styles.scss';
import * as yup from 'yup';
import onChange from 'on-change';

const schema = yup.object({
    url: yup.string().url('Invalid url').required()
});

const validate = (fields) => {
    try {
        schema.validate(fields, { abortEarly: false });
        return {};
    } catch (e) {
        console.log(e);
    }
};

console.log('Hello World!');
const form = document.querySelector('form');
console.log(form);

export default () => {
    console.log('HIIIII');
};
