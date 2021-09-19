<script>
  import generator from "generate-password-browser";
  import { Label, Input, Button } from "sveltestrap";
  import copy from "copy-to-clipboard";

  let password = "";

  let config = {
    length: 6,
    numbers: false,
    symbols: false,
    uppercase: true,
    excludeSimilarCharacters: false,
  };

  let copyText = "Copy To Clipboard";
  let copyColor = "secondary";

  const handleCopy = () => {
    copy(password);
    copyText = "Copied to Clipboard!";
    copyColor = "success";
    setTimeout(() => {
      copyText = "Copy To Clipboard";
      copyColor = "secondary";
    }, 2000);
  };

  $: {
    password = generator.generate(config);
  }
</script>

<div class="gen">
  <h2>Random Password Generator</h2>
  <Label for="exampleRange">Length: {config.length}</Label>
  <Input
    type="range"
    name="range"
    id="exampleRange"
    min={6}
    max={40}
    step={1}
    bind:value={config.length}
  />
  <Input
    bind:checked={config.numbers}
    type="checkbox"
    label="Include Numbers?"
  />
  <Input
    bind:checked={config.symbols}
    type="checkbox"
    label="Include Symbols?"
  />
  <Input
    bind:checked={config.uppercase}
    type="checkbox"
    label="Include Uppercase Characters?"
  />
  <Input
    bind:checked={config.excludeSimilarCharacters}
    type="checkbox"
    label="Exclude Similar Characters?"
  />
  <span class="pass">{password}</span>
  <Button color={copyColor} on:click={handleCopy}>{copyText}</Button>
</div>

<style lang="scss">
  $bg-color: #333;
  $secondary-color: #555;

  :global(html) {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: $bg-color;
  }

  .gen {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 2px solid white;
    background-color: $secondary-color;
    color: white;
    padding: 1rem;
    outline: none;
    width: 40vw;
    justify-content: space-between;
  }

  .pass {
    margin: 0.5rem;
    font-size: 1.5rem;
    font-weight: 700;
  }

  @media (max-width: 540px) {
    .gen {
      width: 90vw;
      height: 40vh;
      font-size: 1.5rem;
    }
    .pass {
      font-size: 2.5rem;
    }
  }
</style>
