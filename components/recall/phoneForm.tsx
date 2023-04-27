import { FC } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import "yup-phone";
import cn from 'classnames';

const initialValues = {
  phone: '',
};

const validationSchema = Yup.object().shape({
  phone: Yup.string().phone('ru', true, 'Wrong format!').required(),
});

const PhoneForm: FC = () => {
  return <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={(values) => {
      console.log(values)
    }}
  >
    {({ isSubmitting, errors }) => (
      <Form className='grid grid-cols-2 items-center mt-2.5'>
        <div className='group'>
          <Field className='text14 outline-none group-hover:text-grey1' placeholder='Phone' type="phone" name="phone" />
          <span className={cn(
            'block h-px w-full transition-colors mt-1 group-hover:bg-grey1',
            errors.phone ? 'bg-red' : 'bg-black',
          )} />
        </div>
        <p className='text-tiny text-grey2 mt-2.5'>
          By clicking on the send button, you agree to the terms of
          <span className='text-blue1 transition-colors cursor-pointer hover:text-blue2'> personal data processing</span>
        </p>
        <button
          className={cn(
            'text-esm font-light bg-blue1 text-white border border-blue1 rounded-full w-[90px] h-[90px] transition-all ml-auto hover:bg-blue2 hover:border-blue2 active:bg-white active:text-black esm:w-[130px] esm:h-[130px]',
            errors.phone && 'pointer-events-none',
          )}
          type="submit"
          disabled={isSubmitting || errors.phone !== undefined}
        >
          Send
        </button>
      </Form>
    )}
  </Formik>
};

export default PhoneForm;