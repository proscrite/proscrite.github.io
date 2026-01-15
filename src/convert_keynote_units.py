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




# alphas = {'position': (5.11, 5.59), 'size': (15.05, 11.47)}
# preparation = {'position': (4.86, 15.58), 'size': (10.47, 22.08)}
# recoils = {'position': (26.26, 20.48), 'size': (24.9, 11.11)}
# xrays = {'position': (26.26, 10.44), 'size': (24.9, 3.66)}
# final = {'position': (51.16, 9.41), 'size': (14.77, 16.29)}

canvas = {'size': (102.37, 94.54)}
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

canvas = {'size': (67.73, 31.75)}

dict_list = [
    {'production': {'size': (20.44, 30.42), 'position': (45.53, 1.19)}},
    {'mass_filtering': {'size': (13.42, 30.55), 'position': (32.37, 1.19)}},
    {'steering': {'size': (16.03, 30.56), 'position': (16.27, 1.13)}},
    {'thermalization': {'size': (13.19, 30.64), 'position': (4.18, 1.12)}},
    {'microscopy_chamber': {'size': (9.1, 30.81), 'position': (0.0, 1.12)}},
]

for d in dict_list:
    for key in d:
        print(f"{key}: {to_percentage(d[key], canvas)}")