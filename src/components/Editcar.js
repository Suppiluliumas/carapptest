import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

export default function Editcar(props) {
const [car,setCar] = React.useState({
    brand: '',
    model: '',
    color: '',
    fuel:'',
    year: '',
    price: ''
});
const [open, setOpen] = React.useState(false);

const handleClickOpen = () => {
    setOpen(true);
    setCar({
        brand: props.params.brand,
        model: props.params.model,
        color: props.params.color,
        fuel: props.params.fuel,
        year: props.params.year,
        price: props.params.price,
    });
    console.log(props.params);
  };

  const handleClose = (event,reason) => {
    
    if(reason !== "backDropClick") {
      setOpen(false);
    }
  };

  const handleSave = () => {
    props.updateCar(props.params._links.car.href, car)
    setOpen(false);
  }

  return (
    <div>
      <Button size="small" onClick={handleClickOpen}>
        Edit
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add car</DialogTitle>
        <DialogContent>
          <TextField
            margin="dense"
            label="Brand"
            value={car.brand}
            onChange={(event) => setCar({...car,brand: event.target.value})}
            fullWidth
            variant="standard"
          />

        <TextField
            margin="dense"
            label="Model"
            value={car.model}
            onChange={(event) => setCar({...car,model: event.target.value})}
            fullWidth
            variant="standard"
          />

        <TextField
            margin="dense"
            label="Color"
            value={car.color}
            onChange={(event) => setCar({...car,color: event.target.value})}
            fullWidth
            variant="standard"
          />

        <TextField
            margin="dense"
            label="Fuel"
            value={car.fuel}
            onChange={(event) => setCar({...car,fuel: event.target.value})}
            fullWidth
            variant="standard"
          />

        <TextField
            margin="dense"
            label="Year"
            value={car.year}
            onChange={(event) => setCar({...car,year: event.target.value})}
            fullWidth
            variant="standard"
          />

        <TextField
            margin="dense"
            label="Price"
            value={car.price}
            onChange={(event) => setCar({...car,price: event.target.value})}
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSave}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}