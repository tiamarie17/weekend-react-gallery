
CREATE TABLE "images" (
	"id" SERIAL PRIMARY KEY,
	"path" VARCHAR(250) NOT NULL,
	"description" VARCHAR (500) NOT NULL,
	"likes" INT NOT NULL
	);
    
INSERT INTO "images" ("path", "description", "likes")
VALUES ('images/camping.png', 'Camping on the south coast of Iceland', 0), 
('images/hiking.png', 'Hiking with my husband Ron in Iceland!', 0), 
('images/khaosok.png', 'Visiting Khao Sok National Park in Thailand', 0), 
('images/krabi.png', 'Krabi Beach, Thailand', 0), 
('images/malacca.png', 'Visiting with family in Melaka, Malaysia', 0),
 ('images/patios.png', 'Festival of Patios in Cordoba, Spain', 0), 
 ('images/iceland.png', 'Hiking to Svartifoss waterfall in Iceland', 0), 
 ('images/porcupine.png', 'Camping on Lake Superior in Porcupine Mountain State Park', 0), 
 ('images/raingarden.png', 'Coneflowers blooming in our rain garden, Minnesota', 0), 
 ('images/rockies.png', 'Backpacking in Rocky Mountain National Park', 0), 
 ('images/sevilla.png', 'One of my favorite places to get tapas in Sevilla, Spain', 0);