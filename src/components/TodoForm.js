import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme =>
  createStyles({
    form: {
      boxSizing: "border-box",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      padding: theme.spacing(2, 0)
    },
    textField: {
      flex: 1,
      marginRight: theme.spacing(4),
      "& > label.Mui-focused": {
        color: "#45050C"
      }
    },
    button: {
      background: "linear-gradient(45deg, #EECF6D 30%, #D5AC4E 90%)",
      border: 0,
      borderRadius: 3,
      boxShadow: "0 3px 5px 2px #D5AC4E",
      color: "#45050C",
      padding: "10px 40px"
    }
  })
);

const TodoForm = ({ addTodo }) => {
  const classes = useStyles();

  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      <TextField
        id="text_field"
        label="Add todo"
        className={classes.textField}
        value={value}
        onChange={e => setValue(e.target.value)}
        margin="normal"
        autoFocus
      />
      <Button
        variant="contained"
        className={classes.button}
        type="submit"
        data-testid="add-button"
      >
        Add
      </Button>
    </form>
  );
};

export default TodoForm;
