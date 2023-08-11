// Icons
import DeleteIcon from '@mui/icons-material/Delete';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import IconButton from '@mui/material/IconButton';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import AdsClickIcon from '@mui/icons-material/AdsClick';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChecklistRtlIcon from '@mui/icons-material/ChecklistRtl';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import PersonIcon from '@mui/icons-material/Person';
import MailIcon from '@mui/icons-material/Mail';
//Buttons
import { ButtonGroup } from '@mui/material';
import Button from '@mui/material/Button';
import Fab from '@mui/material/Fab';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Rating from '@mui/material/Rating';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Badge from '@mui/material/Badge';


function App() {
  return (
    <div>
      <h2>Text Button!</h2>
      <Button>Click Me</Button>
      <Button color='warning'>Warning</Button>
      <Button color='primary' href='https://google.com'>Link</Button>
      <Button disabled>Disabled</Button>

      <h2>Contained Button!</h2>
      <Button variant='contained'>How's You!</Button>
      <Button variant='contained' color='secondary'>Click Me</Button>
      <Button variant='contained' color='success' href='https://google.com'>Link</Button>
      <Button variant='contained' disabled>Click Me</Button>

      <h2>Outlined Button!</h2>
      <Button variant='outlined'>How's You!</Button>
      <Button variant='outlined' color='secondary'>Click Me</Button>
      <Button variant='outlined' color='success' href='https://google.com'>Link</Button>
      <Button variant='outlined' disabled>Click Me</Button>

      <h2>Button Size!</h2>
      <Button size='small' variant='outlined'>How's You!</Button>
      <Button size='medium' variant='outlined' color='warning'>Click Me</Button>
      <Button size='large' variant='outlined' color='error' href='https://google.com'>Link</Button>

      <h2>Buttons With Icon!</h2>
      <Button variant='contained' color='error' startIcon={<DeleteIcon />}>Delete</Button>
      <Button variant='outlined' color='success' endIcon={<HowToRegIcon />}>Register</Button>

      <h2>Icon Button</h2>
      <IconButton color='warning' variant='contained' size='small'>
        <LocalFloristIcon />
      </IconButton>

      <h2>Custom Button!</h2>
      <Button variant='contained' style={{ backgroundColor: 'teal' }}>Custom 1</Button>
      <Button variant='outlined' style={{ backgroundColor: 'pink', color: 'black' }}>Custom 2</Button>

      <h2>Button with Click Event</h2>
      <Button variant='outlined' style={{ backgroundColor: 'teal', color: 'white' }}
        startIcon={<AdsClickIcon />} onClick={() => {
          alert('Button Clicked');
        }}>
        Click Me
      </Button>

      <h2>Normal/Horizontal Button Group!</h2>
      <ButtonGroup variant='outlined' color='warning' onClick={() => console.log('clicked')}>
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>

      <h2>Vertical Button Group!</h2>
      <ButtonGroup variant='contained' color='success' onClick={() => console.log('clicked')} orientation='vertical'>
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>

      <h2>Floating Action Button!</h2>
      <Fab variant='contained' style={{ backgroundColor: 'pink' }}
        onClick={() => { alert('Favorite Floating Action Button'); }}>
        <FavoriteIcon />
      </Fab>
      <Fab variant='extended'>
        <ChecklistRtlIcon sx={{ mr: 1 }} />List Items
      </Fab>

      <h2>CheckBox</h2>
      <Checkbox color='primary' />
      <Checkbox color='secondary' defaultChecked />
      <Checkbox color='warning' disabled />
      <Checkbox color='success' disabled checked />
      <Checkbox checked indeterminate />
      <Checkbox icon={<FavoriteBorder />} checkedIcon={<FavoriteIcon />} color='error' />
      <Checkbox icon={<PersonOutlineOutlinedIcon />}
        checkedIcon={<PersonIcon />}
        onChange={() => { alert('Icon Checked!'); }} />

      <h2>Labelled CheckBox</h2>
      <FormControlLabel control={<Checkbox
        icon={<FavoriteBorder />} checkedIcon={<FavoriteIcon />} color='error' />}
        label='Start' labelPlacement='start' />
      <FormControlLabel control={<Checkbox
        icon={<FavoriteBorder />} checkedIcon={<FavoriteIcon />} color='error' />}
        label='Top' labelPlacement='top' />
      <FormControlLabel control={<Checkbox
        icon={<FavoriteBorder />} checkedIcon={<FavoriteIcon />} color='error' />}
        label='Bottom' labelPlacement='bottom' />
      <FormControlLabel control={<Checkbox
        icon={<FavoriteBorder />} checkedIcon={<FavoriteIcon />} color='error' />}
        label='End' labelPlacement='end' />

      <h2>Radio Button</h2>
      <Radio disabled />
      <Radio defaultChecked />
      <Radio onClick={() => { alert('clicked'); }} />
      <Radio color='secondary' />

      <h2>Radio Button with Label</h2>
      <FormControlLabel control={<Radio color='warning' />}
        label='Male' />
      <FormControlLabel control={<Radio color='warning' />}
        label='Female' />

      <h2>Radio Button with Label Placement</h2>
      <FormControlLabel control={<Radio color='warning' />}
        label='Start' labelPlacement='start' />
      <FormControlLabel control={<Radio color='warning' />}
        label='Top' labelPlacement='top' />
      <FormControlLabel control={<Radio color='warning' />}
        label='Bottom' labelPlacement='bottom' />
      <FormControlLabel control={<Radio color='warning' />}
        label='End' labelPlacement='end' />

      <h2>Radio Group Vertical</h2>
      <RadioGroup row>
        <FormControlLabel control={<Radio color='success' />} label='Male' />
        <FormControlLabel control={<Radio color='success' />} label='Female' />
        <FormControlLabel control={<Radio color='success' />} label='Other' />
      </RadioGroup>
      <h2>Radio Group Horizontal</h2>
      <RadioGroup column>
        <FormControlLabel control={<Radio color='secondary' />} label='Male' />
        <FormControlLabel control={<Radio color='secondary'  />} label='Female' />
        <FormControlLabel control={<Radio color='secondary'  />} label='Other' />
      </RadioGroup>

      <h2>Rating</h2>
      <div><Rating/></div>
      <div><Rating value={3} readOnly/></div>
      <div><Rating defaultValue={2.5} precision={0.5} /></div>

      <h2>Slider</h2>
      <Slider/>
      <Slider value={10} color='success'/>
      <Slider defaultValue={30} color='error'/>
      <Box sx={{height:300}}>
        <Slider orientation='vertical' defaultValue={45}
        color='warning'/>
      </Box>

      <h2>Switch</h2>
      <Switch/>
      <Switch defaultChecked/>
      <Switch disabled/>
      <FormControlLabel control={<Switch/>} label="Bottom" labelPlacement='bottom'/>
      <FormControlLabel control={<Switch/>} label="Top" labelPlacement='top'/>

      <h2>Text Field</h2>
      <TextField/>
      <TextField label='Name' color='success'/>
      <TextField label='Standard' variant='standard' color='secondary'/>
      <TextField label='Outlined' variant='outlined' color='warning'/>
      <TextField label='Filled' variant='filled' color='info'/>

      <h2>Box</h2>
      <Box sx={{height:20,width:100, backgroundColor:'pink'}}>
        Hello World!</Box>

      <h2>Stack</h2>
      <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={2}>
        <Button variant='outlined' color='secondary'>Item1</Button>
        <Button variant='outlined' color='secondary'>Item1</Button>
        <Button variant='outlined' color='secondary'>Item1</Button>
      </Stack>

      <h2>Avatar</h2>
      <Stack direction="row" spacing={4}>
      <Avatar>M</Avatar>
      <Avatar src='https://cdn.pixaby.com/photo/2016/11/29/09/29/woman-1868717_960_720.jpg'/>
      <Avatar> <HowToRegIcon/> </Avatar>
      </Stack>

      <h2>Avatar Group</h2>
      <AvatarGroup max={4}>
      <Avatar>N</Avatar>
      <Avatar>N</Avatar>
      <Avatar>N</Avatar>
      <Avatar>N</Avatar>
      <Avatar>N</Avatar>
      </AvatarGroup>

      <h2>Badges</h2>
      <Stack spacing={4} direction="row">
        <Badge badgeContent={5} color='secondary'> <MailIcon/> </Badge>
        <Badge badgeContent={100} color='success' max={50}> <MailIcon/> </Badge>
        <Badge anchorOrigin={{vertical:"bottom", horizontal:"right"}}
        badgeContent={100} max={40} color='warning'><MailIcon/></Badge>
        <Badge color='error' variant='dot'><MailIcon/></Badge>

      </Stack>
      
    </div>
  );
}

export default App;
