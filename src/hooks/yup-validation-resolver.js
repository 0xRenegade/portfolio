import { useCallback, useMemo } from 'react'

const useValidationResolver = (schema) => {
  useCallback(
    async (data) => {
      try {
        const values = await schema.validate({ abortEarly: false })

        return {
          values,
          errors: {},
        }
      } catch (errors) {
        return {
          values: {},
          errors: errors.inner.reduce(
            (allErrors, currentError) => ({
              ...allErrors,
              [currentError.path]: {
                type: currentError.type ?? 'validation',
                message: currentError.message,
              },
            }),
            {}
          ),
        }
      }
    },
    [schema]
  )
}

export default useValidationResolver