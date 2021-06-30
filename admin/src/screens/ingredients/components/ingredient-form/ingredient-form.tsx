import { Formik } from 'formik';
import React from 'react';

import { Button } from '@components/button';
import { CheckBox } from '@components/checkbox';
import { ImagePicker } from '@components/image-picker';
import { Loader } from '@components/loader';
import { TextField } from '@components/text-field';
import { COLORS } from '@styles/colors';
import { SpacerStyled } from '@styles/components';

import { IIngredientFormProps, IngredientFormSchema } from './ingredient-form.typings';

import { IngredientFormStyles } from './ingredient-form.styles';

export const IngredientForm: React.FC<IIngredientFormProps> = ({
  name,
  image,
  isAlergen,
  calory,
  onSubmit,
}) => (
  <Formik
    initialValues={{
      name: name || '',
      image: image || '',
      isAlergen: isAlergen || false,
      calory: calory || '',
    }}
    validateOnBlur
    onSubmit={onSubmit}
    validationSchema={IngredientFormSchema}
  >
    {({
      values,
      errors,
      touched,
      handleChange,
      handleBlur,
      isValid,
      handleSubmit,
      setValues,
      dirty,
    }) => (
      <IngredientFormStyles.Form>
        <SpacerStyled paddingY="3">
          <TextField
            type="text"
            name="name"
            placeholder={'Ingredient name'}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
            error={touched.name && errors.name ? errors.name : ''}
            isFullWidth
          />
        </SpacerStyled>
        <SpacerStyled paddingY="3">
          <ImagePicker
            setValue={(image: string) => setValues({ ...values, image })}
            value={values.image}
          />
        </SpacerStyled>
        <SpacerStyled paddingY="3">
          <CheckBox
            title="Is Alergen?"
            name="isAlergen"
            onChange={() =>
              setValues({ ...values, isAlergen: !values.isAlergen })
            }
            onBlur={handleBlur}
            color={COLORS.primary}
            isChecked={values.isAlergen}
          />
        </SpacerStyled>
        <SpacerStyled paddingY="3">
          <TextField
            type="text"
            name="calory"
            placeholder={'Calory'}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.calory}
            error={touched.calory && errors.calory ? errors.calory : ''}
            isFullWidth
          />
        </SpacerStyled>
        <SpacerStyled paddingY="3">
          <Loader color={COLORS.primary} area="add-ingredient">
            <Button
              title="Submit"
              onClick={handleSubmit}
              isDisabled={!dirty || !isValid}
              variant="primary"
              type="submit"
            />
          </Loader>
        </SpacerStyled>
      </IngredientFormStyles.Form>
    )}
  </Formik>
);
