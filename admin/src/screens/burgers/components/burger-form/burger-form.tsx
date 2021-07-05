import { Formik } from 'formik';
import React from 'react';

import { Button } from '@components/button';
import { ImagePicker } from '@components/image-picker';
import { Loader } from '@components/loader';
import { TextField } from '@components/text-field';
import { COLORS } from '@styles/colors';
import { FlexStyled, SpacerStyled } from '@styles/components';

import { PROMISES_AREA } from '@constants/promises-area';

import { BurgerFormSchema, IBurgerFormProps } from './burger-form.typings';

import { BurgerFormStyles } from './burger-form.styles';

export const BurgerForm: React.FC<IBurgerFormProps> = ({
  onUpdate,
  onSubmit,
  name = '',
  image = '',
  price = '',
  id,
  description = '',
  isEdit,
  list,
  onItemClick,
  onAddIngredientClick,
}) => (
  <Formik
    initialValues={{
      name,
      image,
      price,
      description,
    }}
    validateOnBlur
    onSubmit={
      isEdit
        ? (values) => onUpdate(id!, { ...values, price: +values.price })
        : onSubmit
    }
    validationSchema={BurgerFormSchema}
    enableReinitialize
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
      <BurgerFormStyles.Form>
        <SpacerStyled paddingY="3">
          <TextField
            type="text"
            name="name"
            placeholder={'Burger name'}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
            error={touched.name && errors.name ? errors.name : ''}
            isFullWidth
          />
        </SpacerStyled>
        <SpacerStyled paddingY="3">
          <TextField
            type="textarea"
            name="description"
            height="150px"
            placeholder={'Burger description'}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.description}
            error={
              touched.description && errors.description
                ? errors.description
                : ''
            }
            isFullWidth
          />
        </SpacerStyled>
        <SpacerStyled paddingY="3">
          <ImagePicker
            setValue={(image: string) => setValues({ ...values, image })}
            value={values.image}
          />
        </SpacerStyled>
        {isEdit && (
          <Loader area={PROMISES_AREA.getIngredientsInBurgerList}>
            <BurgerFormStyles.List>
              {list.length > 0 ? (
                list.map(({ id, ingredient, count }) => (
                  <BurgerFormStyles.Items
                    key={id}
                    onClick={() => onItemClick(id)}
                  >
                    <div>{ingredient.name}</div>
                    <img src={ingredient.image} alt="icon" />
                    <div>{count}</div>
                  </BurgerFormStyles.Items>
                ))
              ) : (
                <BurgerFormStyles.Items>
                  While there are no ingredients in this burger
                </BurgerFormStyles.Items>
              )}
            </BurgerFormStyles.List>
          </Loader>
        )}
        <SpacerStyled paddingY="3">
          <TextField
            type="text"
            name="price"
            placeholder={'Price'}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.price}
            error={touched.price && errors.price ? errors.price : ''}
            isFullWidth
          />
        </SpacerStyled>
        <Loader color={COLORS.primary} area={PROMISES_AREA.addBurger}>
          <FlexStyled paddingY="3" justifyContent="space-between">
            <Button
              title="Submit"
              onClick={handleSubmit}
              isDisabled={!dirty || !isValid}
              variant="primary"
              type="submit"
            />
            {isEdit && (
              <Button
                title="Add new Ingredient"
                onClick={onAddIngredientClick}
                variant="secondary"
                type="button"
              />
            )}
          </FlexStyled>
        </Loader>
      </BurgerFormStyles.Form>
    )}
  </Formik>
);
