// container_app_environment_id set in pipeline
// container_app_environment_static_ip_address set in pipeline
// subscription_id set in pipeline
// image set in pipeline
// repository_name set in pipeline
// sha set in pipeline
// github_token set in pipeline
// resource_group_name set in pipeline
// registry_username set in pipeline
// auth_secret set in pipeline

max_replicas                          = 5
min_replicas                          = 1
cpu                                   = "0.25"
memory                                = "0.5Gi"
registry_server                       = "ghcr.io"
dns_zone_name                         = "enemy.sh"
dns_zone_resource_group_name          = "Core"
auth_url                              = "https://enemy.sh"
