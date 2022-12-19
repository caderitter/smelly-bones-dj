import { SlashCommandBuilder } from "@discordjs/builders";

const play = new SlashCommandBuilder()
  .setName("play")
  .setDescription("Plays or queues your search")
  .addStringOption((option) =>
    option
      .setName("Search query or URL")
      .setDescription(
        "Search query to search youtube with or a URL of a song or playlist"
      )
  );

const pause = new SlashCommandBuilder()
  .setName("pause")
  .setDescription("Pauses the player");

const stop = new SlashCommandBuilder()
  .setName("stop")
  .setDescription("Stops the player");

const playtop = new SlashCommandBuilder()
  .setName("playtop")
  .setDescription("Puts your song on the top of the queue")
  .addStringOption((option) =>
    option
      .setName("Search query or URL")
      .setDescription(
        "Search query to search youtube with or a URL of a song or playlist"
      )
  );

const move = new SlashCommandBuilder()
  .setName("move")
  .setDescription("Swaps two tracks in the queue")
  .addIntegerOption((option) =>
    option
      .setName("Inital position")
      .setDescription("Position of track to be moved")
  )
  .addIntegerOption((option) =>
    option.setName("Final position").setDescription("Position to move track to")
  );

const deleteTrack = new SlashCommandBuilder()
  .setName("delete")
  .setDescription("Deletes a track")
  .addIntegerOption((option) =>
    option.setName("Track position").setDescription("Track to be deleted")
  );

const commands = [play, pause, stop, playtop, move, deleteTrack];
const json = commands.map((command) => command.toJSON());

export default json;
