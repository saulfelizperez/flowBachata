import { useState, useCallback } from "react";

type FormValues = {
  [key: string]: string;
};

export default function useForm(initialValues: FormValues) {
  const [values, setValues] = useState(initialValues);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setValues((prev) => ({
        ...prev,
        [name]: value,
      }));
    },
    []
  );

  const resetForm = useCallback(() => {
    setValues(initialValues);
  }, [initialValues]);

  return {
    values,
    handleChange,
    resetForm,
  };
}