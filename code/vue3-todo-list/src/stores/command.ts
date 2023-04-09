export function parseCommand(title: string) {
  const commands: any[] = [];
  const COMMAND_END_CHAT = ":";
  const COMMAND_SEPARATOR = " ";
  const haveCommands = title.includes(COMMAND_END_CHAT);
  if (haveCommands) {
    const endChatIndex = title.indexOf(COMMAND_END_CHAT);
    const commandsStr = title.slice(0, endChatIndex);

    commands.push(...toSplit(commandsStr));
  }

  return commands;
}

function toSplit(commandsStr: string) {
  const COMMAND_SEPARATOR = " ";
  return commandsStr.split(COMMAND_SEPARATOR).filter((c) => {
    return ["top", "reverse"].includes(c);
  });
}
