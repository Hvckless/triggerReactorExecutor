function BOSSBAR(args){
	var nnkey = Java.type('org.bukkit.NamespacedKey');
	var BarColor = Java.type('org.bukkit.boss.BarColor');
	var BarStyle = Java.type('org.bukkit.boss.BarStyle');
	
	if(args.length != 0){
		if(args[0] == "create"){
			if(args[1] == null){
				throw new Error("Invaild name");
			}else{
				if(!has("com.hackless.executor.bossbar."+player.getWorld().getName()+".name."+args[1])){
					put("com.hackless.executor.bossbar."+player.getWorld().getName()+".name."+args[1], nnkey.randomKey()+"");
					
					newBar = Bukkit.createBossBar(nnkey.fromString(get("com.hackless.executor.bossbar."+player.getWorld().getName()+".name."+args[1])), "BOSSBAR", BarColor.BLUE, BarStyle.SOLID, null);
					
					for(i=0;i<player.getWorld().getPlayers().length;i++){
						newBar.addPlayer(player.getWorld().getPlayers()[i]);
					}
				}else{
					throw new Error("already exist boss bar");
				}
			}
		}else if(args[0] == "set"){
			if(args[1] == null){
				throw new Error("Invaild name");
			}else{
				if(has("com.hackless.executor.bossbar."+player.getWorld().getName()+".name."+args[1])){
					if(args[2] == null){
						throw new Error("Invaild value");
					}else{
						oldBar = Bukkit.getBossBar(nnkey.fromString(get("com.hackless.executor.bossbar."+player.getWorld().getName()+".name."+args[1])));
						oldBar.setProgress(parseFloat(args[2]));
					}
				}else{
					throw new Error("Invaild BossBar");
				}
			}
		}else if(args[0] == "add"){
			if(args[1] == null){
				throw new Error("Invaild name");
			}else{
				if(has("com.hackless.executor.bossbar."+player.getWorld().getName()+".name."+args[1])){
					if(args[2] == null){
						throw new Error("Invaild value");
					}else{
						oldBar = Bukkit.getBossBar(nnkey.fromString(get("com.hackless.executor.bossbar."+player.getWorld().getName()+".name."+args[1])));
						
						try{
							oldBar.setProgress(oldBar.getProgress() + (parseInt(args[2]) / 100));
						}catch(e){
							
						}
					}
				}
			}
			
		}else if(args[0] == "sub"){
			if(args[1] == null){
				throw new Error("Invaild name");
			}else{
				if(has("com.hackless.executor.bossbar."+player.getWorld().getName()+".name."+args[1])){
					if(args[2] == null){
						throw new Error("Invaild value");
					}else{
						oldBar = Bukkit.getBossBar(nnkey.fromString(get("com.hackless.executor.bossbar."+player.getWorld().getName()+".name."+args[1])));
						
						try{
							oldBar.setProgress(oldBar.getProgress() - (parseInt(args[2]) / 100));
						}catch(e){
							
						}
					}
				}
			}
		}else if(args[0] == "edit"){
			if(args[1] == null){
				throw new Error("Invaild name");
			}else{
				if(args[2] == null){
					throw new Error("Invaild Text");
				}else{
					oldBar =  Bukkit.getBossBar(nnkey.fromString(get("com.hackless.executor.bossbar."+player.getWorld().getName()+".name."+args[1])));
					
					oldBar.setTitle(ChatColor.translateAlternateColorCodes(Char('&'), args[2]));
				}
			}
		}else if(args[0] == "help"){
			player.sendMessage("#BOSSBAR <create> <barname>");
			player.sendMessage("#BOSSBAR <set> <barname> <value:float>");
			player.sendMessage("#BOSSBAR <add> <barname> <numeric:int>");
			player.sendMessage("#BOSSBAR <sub> <barname> <numeric:int>");
			player.sendMessage("#BOSSBAR <remove> <barname>");
		}else if(args[0] == "remove"){	
			if(args[1] == null){
				throw new Error("Invaild name");
			}else{
				oldBar = Bukkit.getBossBar(nnkey.fromString(get("com.hackless.executor.bossbar."+player.getWorld().getName()+".name."+args[1])));
				Bukkit.removeBossBar(nnkey.fromString(get("com.hackless.executor.bossbar."+player.getWorld().getName()+".name."+args[1])));
				oldBar.removeAll();
				
				put("com.hackless.executor.bossbar."+player.getWorld().getName()+".name."+args[1], null);
			}
		}else{
			throw new Error("unexpected token " + args[0]);
		}
		
	}else{
		throw new Error("unexpected argument length");
	}
}