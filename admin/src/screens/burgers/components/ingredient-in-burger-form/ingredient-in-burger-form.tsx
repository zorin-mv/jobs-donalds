import { Formik } from 'formik';
import React, { useState } from 'react';

import { Button } from '@components/button';
import { CheckBox } from '@components/checkbox';
import { Loader } from '@components/loader';
import { Select } from '@components/select';
import { TextField } from '@components/text-field';
import { COLORS } from '@styles/colors';
import { FlexStyled, SpacerStyled } from '@styles/components';

import { images } from '@constants/images';
import { PROMISES_AREA } from '@constants/promises-area';

import {
    IIngredientInBurgerFormProps, IngredientInBurgerFormSchema
} from './ingredient-in-burger.typings';

import { IngredientInBurgerFormStyles } from './ingredient-in-burger-form.styles';

export const IngredientInBurgerForm: React.FC<IIngredientInBurgerFormProps> = ({
  onUpdate,
  onCreate,
  id,
  burgerId = '',
  ingredientsList,
  count = '',
  isCustom = false,
  isEdit,
  ingredientId = '',
  setIsActive,
  handleDelete,
}) => {
  const [selected, setSelected] = useState({ name: 'ChoiseOne', id: '1' });
  const onDelete = (id: string) => () => handleDelete(id);
  const onClick = () => setIsActive({ isShowModal: false });

  return (
    <Formik
      initialValues={{
        isCustom,
        count,
      }}
      validateOnBlur
      onSubmit={
        isEdit
          ? (values) => onUpdate(id!, values)
          : (values) =>
              onCreate({ ...values, burgerId, ingredientId: selected.id })
      }
      validationSchema={IngredientInBurgerFormSchema}
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
        <>
          <IngredientInBurgerFormStyles.BackDrop onClick={onClick} />
          <IngredientInBurgerFormStyles.Form>
            <IngredientInBurgerFormStyles.Icon>
              <img onClick={onClick} src={images.close} alt="close" />
            </IngredientInBurgerFormStyles.Icon>
            {isEdit ? (
              <IngredientInBurgerFormStyles.Title>
                {
                  ingredientsList?.find((item) => item.id === ingredientId)
                    ?.name
                }
              </IngredientInBurgerFormStyles.Title>
            ) : (
              <Select
                options={
                  ingredientsList || [{ name: 'No Ingredients', id: '2' }]
                }
                selected={selected}
                setSelected={setSelected}
                isFullWidth
              />
            )}
            <SpacerStyled paddingY="3" marginY="3">
              <TextField
                type="text"
                name="count"
                placeholder={'Ingredient count'}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.count}
                error={touched.count && errors.count ? errors.count : ''}
                isFullWidth
              />
            </SpacerStyled>
            <SpacerStyled paddingY="3" marginBottom="3">
              <CheckBox
                title="This ingredient can be customized?"
                name="isCustom"
                onChange={() =>
                  setValues({ ...values, isCustom: !values.isCustom })
                }
                onBlur={handleBlur}
                color={COLORS.primary}
                isChecked={values.isCustom}
              />
            </SpacerStyled>
            <Loader area={PROMISES_AREA.addIngredientInBurger}>
              <FlexStyled
                paddingY="3"
                marginBottom="3"
                justifyContent="space-between"
              >
                <Button
                  title="Submit"
                  onClick={handleSubmit}
                  isDisabled={!dirty || !isValid}
                  variant="primary"
                  type="submit"
                />
                {isEdit && (
                  <Button
                    title="Delete"
                    onClick={onDelete(id!)}
                    variant="secondary"
                    type="button"
                  />
                )}
              </FlexStyled>
            </Loader>
          </IngredientInBurgerFormStyles.Form>
        </>
      )}
    </Formik>
  );
};
