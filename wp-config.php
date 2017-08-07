<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'jobkeeper_home');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', '');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'F,kT-d{54maI()%Ur NWrx8.l[(~kX d0:rd5?Cfi3B4jq=-7CX*r~gXO<}/&8Vh');
define('SECURE_AUTH_KEY',  '!iS+g CAC0;ZZS{lxip0dz>We8?F6_=GP.@G<;<Jq^vB1f)+67;^N`<&n9J]:Hsl');
define('LOGGED_IN_KEY',    'UpZTXF YI$[gMRNIIWWDp/68Jce6!!>F3r]Y[7|00Yo=3m+YQ?ZAD3fp6xq.7zD*');
define('NONCE_KEY',        '|^sD38WBLiXp+X1V}]]7{gEi~F83aWNiZN3M25]TA9]r[UKFTX+f>;?h~=d9g]v5');
define('AUTH_SALT',        'Ym0.E^EMHeM0dOecg/U)0>347MQ2I%ar/ `IvZQwXm:IhgPy>kV9CYTaI))l:7jY');
define('SECURE_AUTH_SALT', 'vsE$t].;DL+_|XB ]oomr.]}/X{$w$t.tV)5_$a#6:di$*O;|l4TR$qqmP6^EU)K');
define('LOGGED_IN_SALT',   '*xP8<z9dfnS|5xT*bi[lN<A`kIq&hoK,gRk;dhWuLE99Lm2/7IY~(1Al[>X$Ki3>');
define('NONCE_SALT',       'u^vZU3w^PIzZgYL?jki9%;){sk{Jm3gKW#n%`K-Cgw_-]cx{:;2V^}{Hao4&*Hpm');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
