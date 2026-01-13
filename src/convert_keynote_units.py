"""
# Convert Keynote units (points) to percentage of canvas size
"""

# Transform each component position and size to percentage of canvas: 
# With the following format: { left: '6.15%', top: '2.78%', width: '19.27%', height: '44.26%' }, target: 'preparation' },
def to_percentage(component, canvas):
    x_perc =round(component['position'][0] / canvas['size'][0] * 100, 2)
    y_perc = round(component['position'][1] / canvas['size'][1] * 100, 2)
    w_perc = round(component['size'][0] / canvas['size'][0] * 100, 2)
    h_perc = round(component['size'][1] / canvas['size'][1] * 100, 2)
    return {'left': f'{x_perc}%', 'top': f'{y_perc}%', 'width': f'{w_perc}%', 'height': f'{h_perc}%'}



canvas = {'size': (102.37, 94.54)}

# alphas = {'position': (5.11, 5.59), 'size': (15.05, 11.47)}
# preparation = {'position': (4.86, 15.58), 'size': (10.47, 22.08)}
# recoils = {'position': (26.26, 20.48), 'size': (24.9, 11.11)}
# xrays = {'position': (26.26, 10.44), 'size': (24.9, 3.66)}
# final = {'position': (51.16, 9.41), 'size': (14.77, 16.29)}

dict_list = [{'take_spectra': {'size': (24.29, 5.48), 'position': (12.3, 41.15)} },
{'take_trajectories': {'size': (24.29, 5.48), 'position': (38.5, 41.15)} },
{'power_ramp': {'size': (24.39, 5.48), 'position': (64.6, 41.15)} },

{'autofocus': {'size': (24.39, 5.48), 'position': (64.6, 48.45)} },
{'live_camera': {'size': (24.24, 5.72), 'position': (38.38, 48.45)} },
{'take_image': {'size': (24.24, 5.72), 'position': (12.54, 48.59)} },

{'set_roi': {'size': (24.24, 5.72), 'position': (38.39, 55.83)} },
{'set_filter': {'size': (24.24, 5.72), 'position': (64.66, 55.83)} },
{'set_name': {'size': (24.24, 5.72), 'position': (12.39, 55.83)} },

{'set_exposure': {'size': (24.24, 5.72), 'position': (12.39, 63.36)} },
{'move_z': {'size': (24.24, 5.72), 'position': (38.52, 63.36)} },
{'refresh_power': {'size': (24.24, 5.72), 'position': (64.66, 63.36)} },

{'manage_power': {'size': (24.24, 5.72), 'position': (12.39, 70.89)} },
{'toggle_shutter': {'size': (24.24, 5.72), 'position': (39.07, 70.89)} },
{'daq_settings': {'size': (24.24, 5.72), 'position': (64.61, 70.74)} },
{'setup_settings': {'size': (24.24, 5.72), 'position': (38.48, 78.42)} },]

# dict_list = [take_spectra, take_trajectories, power_ramp, autofocus, live_camera,
#           take_image, set_roi, set_filter, refresh_power, move_z, set_exposure, 
#           toggle_shutter, daq_settings, setup_settings]

# take_spectra_perc = to_percentage(take_spectra, canvas)

for d in dict_list:
    for key in d:
        print(f"{key}: {to_percentage(d[key], canvas)}")