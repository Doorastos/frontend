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
      <Form className='grid grid-cols-[54%_1fr] items-center gap-x-12 mt-2.5 esm:gap-x-[90px] sm:gap-x-10 sm:grid-cols-[1fr_max-content]'>
        <div className='flex flex-col gap-y-2.5 col-[1]'>
          <div className='group'>
            <Field
              className={cn(
                'text14 h-7 w-full border-b outline-none transition-colors',
                errors.phone ? 'text-red border-b-red placeholder:text-red' : 'border-b-grey1 group-hover:text-grey1',
              )}
              placeholder='Phone' type="phone" name="phone"
            />
          </div>
          <p className='text-tiny text-grey2'>
            By clicking on the send button, you agree to the terms of
            <span className='text-blue1 transition-colors cursor-pointer hover:text-blue2'> personal data processing</span>
          </p>
        </div>
        <button
          className={cn(
            'text-esm font-light bg-blue1 text-white border border-blue1 rounded-full w-[90px] h-[90px] transition-all col-[2] ml-auto mb-7 -mt-5 hover:bg-blue2 hover:border-blue2 active:bg-white active:text-black esm:w-[130px] esm:h-[130px] esm:mb-2.5 esm:-mt-12 md:w-[150px] md:h-[150px] md:mb-5 md:-mt-20',
            errors.phone && 'opacity-80 pointer-events-none',
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