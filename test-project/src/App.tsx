import { Button, Input } from "firebug-ui";


export default function App() {
  return (
    <div>
      <Button mods={['primary']}>Click Me</Button>
      <Input
        mods={['label-stack']}
        label="Label Stack"
      />
    </div>
  );
}
