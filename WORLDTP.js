function WORLDTP(args) {

	if (args.length <= 2) {

		var TempWorldName = Bukkit.getWorld(args[0]);

		if (args.length == 1) {

			var CurrentPlayerLocation = player.getName() + "." + player.getWorld().getName() + ".lastlocT";
			var PlayerTargetLocation = player.getName() + "." + args[0] + ".lastlocT";

			var TargetLoc = get(PlayerTargetLocation);

			if (TargetLoc == null) {

				put(CurrentPlayerLocation, player.getLocation());
				player.teleport(TempWorldName.getSpawnLocation());

			} else {

				put(CurrentPlayerLocation, player.getLocation());
				player.teleport(TargetLoc);

			}

		}

		if (args.length == 2) {

			var TargetPC = Bukkit.getPlayer(args[1]);

			var CurrentTargetPCLocation = TargetPC.getName() + "." + TargetPC.getWorld().getName() + ".lastlocT"
			var TargetPCTargetLocation = TargetPC.getName() + "." + args[0] + ".lastlocT";

			var TargetPCTargetLoc = get(TargetPCTargetLocation);

			if (TargetPCTargetLoc == null) {

				put(CurrentTargetPCLocation, TargetPC.getLocation());
				TargetPC.teleport(TempWorldName.getSpawnLocation());

			} else {

				put(CurrentTargetPCLocation, TargetPC.getLocation());
				TargetPC.teleport(TargetPCTargetLoc);

			}

		}

	} else {

		throw new Error("syntax amount must be smaller than 3");

	}

}